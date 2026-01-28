import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../api/FirebaseAuthService';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutUser();
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <button onClick={handleLogout} style={{ padding: '8px 16px', cursor: 'pointer' }}>
      Logout
    </button>
  );
};

export default LogoutButton;
