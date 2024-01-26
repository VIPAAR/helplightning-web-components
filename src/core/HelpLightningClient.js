/*
 * Copyright (c) 2024 Help Lightning, Inc.
 *
 * License: MIT
 */

import axios from 'axios';

import TokenExpiredException from './exceptions/TokenExpiredException';
import {} from './types/LinkType';

class HelpLightningClient {
  HelpLightningClient(
    host,
    apikey,
    token,
    refreshToken = null,
    logoutHandler = null,
  ) {
    this.host = host;
    this.apikey = apikey;
    this.token = token;
    this.refreshToken = refreshToken;
    this.logoutHandler = logoutHandler;

    // create a request handler
    this.request = axios.create({
      baseURL: this.host,
      timeout: 120000,
      headers: {
        'x-helplightning-api-key': this.apiKey,
        'Content-type': 'application/json; charset=utf-8',
      },
    });
    // set up some interceptors
    this.request.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;
        if (error.response?.status === 400) {
          // check the code of the response body
          if (error.response?.data?.code === 1003) {
            // refresh our token
            return this.refreshAuthToken()
              .then(() => {
                // update the headers
                originalRequest.headers.Authorization = this.token;
                return this.request(originalRequest);
              });
          }
        } else if (error.response?.status === 401) {
          // possibly an expired token
          if (error.response?.data === 'Authorization token is expired, please refresh the token') {
            // refresh our token
            return this.refreshAuthToken()
              .then(() => {
                // update the headers
                originalRequest.headers.Authorization = this.token;
                return this.request(originalRequest);
              });
          }
        }

        // raise this up
        return Promise.reject(error);
      },
    );
  }

  /**
   * Create a new Session Link
   *
   * linkType:: types.LinkType
   */
  createSessionLink(linkType) {
    return this.request.post('/api/v1/sessions/link', {
      linkTypeStr: linkType,
    }, {
      headers: {
        Authorization: this.token,
      },
    });
  }

  /**
   * Refresh our token.
   *
   * This is typically used internally automatically
   */
  refreshAuthToken() {
    if (this.refreshToken) {
      return this.request.post('/api/v1/auth/refresh', {
        refresh_token: this.refreshToken,
      }, {
        headers: {
          Authorization: this.token,
        },
      });
    }

    return Promise.reject(new TokenExpiredException('Token Expired')).finally(() => {
      if (this.logoutHandler) {
        this.logoutHandler();
      }
    });
  }
}

export default HelpLightningClient;
