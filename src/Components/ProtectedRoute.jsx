import React from 'react';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children, tokenKey = 'token', redirectTo = '/' }) {
  const token = localStorage.getItem(tokenKey);

  if (token) {
    return children;
  } else {
    return <Navigate to={redirectTo} />;
  }
}
