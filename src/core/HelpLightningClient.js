/*
 * Copyright (c) 2024 Help Lightning, Inc.
 *
 * License: MIT
 */

import axios from 'axios';

import TokenExpiredException from './exceptions/TokenExpiredException';
import LinkType from './types/LinkType';

class HelpLightningClient {
  HelpLightningClient(host, apikey, token,
                      refershToken = null, logoutHandler = null) {
    this._host = host;
    this._apikey = apikey;
    this._token = token;
    this._refreshToken = refreshToken;
    this._logoutHandler = logoutHandler;

    // create a request handler
    this._request = axios.create({
      baseURL: this._host,
      timeout: 120000,
      headers: {
        'x-helplightning-api-key': this._apiKey,
        'Content-type': 'application/json; charset=utf-8'
      }
    });
    // set up some interceptors
    this._request.interceptors.response.use(
      (response) => {
        return response
      },
      async (error) => {
        const originalRequest = error.config;
        if (error.response?.status === 400) {
          // check the code of the response body
          if (error.response?.data?.code === 1003) {
            // refresh our token
            return refreshToken()
              .then(() => {
                // update the headers
                originalRequest.headers['Authorization'] = self._token;
                return this._request(originalRequest);
              })
          }
        } else if (error.response?.status === 401) {
          // possibly an expired token
          if (error.response?.data === "Authorization token is expired, please refresh the token") {
            // refresh our token
            return refreshToken()
              .then(() => {
                // update the headers
                originalRequest.headers['Authorization'] = self._token;
                return this._request(originalRequest);
              })
          }
        }

        // raise this up
        return Promise.reject(error);
      }
    );

  }

  /**
   * Create a new Session Link
   *
   * linkType:: types.LinkType
   */
  createSessionLink(linkType) {
    return this._request.post('/api/v1/sessions/link', {
      'linkTypeStr': linkType
    }, {
      headers: {
        'Authorization': self._token
      }
    });
  }

  /**
   * Refresh our token.
   *
   * This is typically used internally automatically
   */
  refreshToken() {
    if (this._refreshToken) {
      this._request.post('/api/v1/auth/refresh', {
        'refresh_token': this._refreshToken
      }, {
        headers: {
          'Authorization': self._token
        }
      });
    } else {
      Promise.reject(new TokenExpiredException("Token Expired")).finally(() => {
        if (this._logoutHandler) {
          this._logoutHandler();
        }
      });
    }
  }
}

export default HelpLightningClient;
