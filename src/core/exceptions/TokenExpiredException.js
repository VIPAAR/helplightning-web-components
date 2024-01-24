/*
 * Copyright (c) 2024 Help Lightning, Inc.
 *
 * License: MIT
 */

class TokenExpiredException extends Error {
  constructor(message, options) {
    // Need to pass `options` as the second parameter to install the "cause" property.
    super(message, options);
  }
}

export default TokenExpiredException;
