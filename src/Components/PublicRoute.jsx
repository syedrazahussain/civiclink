import React from 'react';
import { Navigate } from 'react-router-dom';

export default function PublicRoute({ children, tokenKey = 'token', redirectTo = '/userpage' }) {
  const token = localStorage.getItem(tokenKey);

  if (token) {
    return <Navigate to={redirectTo} />;
  } else {
    return children;
  }
}
