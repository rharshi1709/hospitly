import Cookies from "js-cookie";
import React from 'react'

function ProtectedRoute({children}) {
  const jwtToken = Cookies.get("jwt_token");
  if (!jwtToken) {
    window.location.href = "/signin";
    return null;
  }
  return children;
}

export default ProtectedRoute
