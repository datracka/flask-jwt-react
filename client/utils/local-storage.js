import decodeJWT from "jwt-decode";

export const TOKEN_KEY = "userToken";

export function extractToken(response) {
  return response.xhr
    .getResponseHeader("Authorization")
    .split(" ")[1];
}

export function removeLocalStorageKey(key) {
  localStorage.removeItem(key);
}

export function saveInLocalStorage(key, token) {
  if (token) {
    // Remember the token
    localStorage.setItem(key, token);
  }
}

export function getFromLocalStorage(key) {
  return localStorage.getItem(key);
}

export function getValidToken(key) {
  const token = localStorage.getItem(key);
  try {
    const decodedToken = decodeJWT(token);
    const now = Date.now() / 1000;
    // Check if token has expired
    if (now > decodedToken.exp) {
      return null;
    }
    // Valid token
    return token;
  } catch (error) {
    // Invalid token
    return null;
  }
}

export function getDecodedToken(key) {
  const validToken = getValidToken(key);
  if (validToken) {
    return decodeJWT(validToken);
  } else {
    return null;
  }
}
