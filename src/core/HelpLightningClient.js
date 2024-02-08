/*
 * Copyright (c) 2024 Help Lightning, Inc.
 *
 * License: MIT
 */

import axios from 'axios';

import TokenExpiredException from './exceptions/TokenExpiredException';
import {} from './types/LinkType';

class HelpLightningClient {
  constructor(
    host,
    apiKey,
    token,
    refreshToken = null,
    logoutHandler = null,
  ) {
    this.host = host;
    this.apiKey = apiKey;
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
          if (error.response?.data === 'Token expired') { // Check by error message is terribly unreliable.
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
      linkType,
    }, {
      headers: {
        Authorization: this.token,
      },
    });
  }

  /**
   * Create a new Session Link
   */
  inviteToSession(name, message, inviteLink, signature, linkType, email, phone) {
    return this.request.post('/api/v1/sessions/link/invite', {
      recipientName: name,
      message,
      invite: inviteLink,
      signature,
      linkType,
      recipientEmail: email,
      recipientPhoneNumber: phone,
    }, {
      headers: {
        Authorization: this.token,
      },
    });
  }

  fetchData(endpoint, filter, page, pageSize) {
    const params = { page, page_size: pageSize, search_term: filter };
    return this.request.get(endpoint, {
      params,
      headers: {
        Authorization: this.token,
      },
    });
  }

  fetchOnCallGroupFavorite(filter, page, pageSize) {
    return this.fetchData('/api/v1r1/user/search/on_call_group_favorites', filter, page, pageSize);
  }

  fetchFavorite(filter, page, pageSize) {
    return this.fetchData('/api/v1r1/user/search/favorites', filter, page, pageSize);
  }

  fetchOnCallGroup(filter, page, pageSize) {
    return this.fetchData('/api/v1r1/user/search/on_call_groups', filter, page, pageSize);
  }

  fetchTeam(filter, page, pageSize) {
    return this.fetchData('/api/v1r1/user/search/team', filter, page, pageSize);
  }

  addToFavorite(id) {
    return this.request.post('/api/v1/favorites', { id }, {
      headers: {
        Authorization: this.token,
      },
    });
  }

  removeFromFavorite(id) {
    return this.request.delete('/api/v1/favorites', {
      params: { id },
      headers: {
        Authorization: this.token,
      },
    });
  }

  addToGroupFavorite(id) {
    return this.request.post(`/api/v1/on_call_groups/${id}/favorites`, {}, {
      headers: {
        Authorization: this.token,
      },
    });
  }

  removeFromGroupFavorite(id) {
    return this.request.delete(`/api/v1/on_call_groups/${id}/favorites`, {}, {
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
      }).then((response) => {
        this.token = response.data.token;
        this.refreshToken = response.data.refresh;
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
