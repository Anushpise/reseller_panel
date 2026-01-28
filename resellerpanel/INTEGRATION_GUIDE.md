# Integration Guide

## How to Integrate Firebase Authentication

### 1. Update Login Component

**File:** `src/Pages/Login.js`

```javascript
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api/FirebaseAuthService';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const { user, role } = await loginUser(email, password);
      
      // Redirect based on role
      if (role === 'owner') {
        navigate('/owner/dashboard');
      } else if (role === 'reseller') {
        navigate('/');
      } else {
        navigate('/student/dashboard');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        {error && <div className="error">{error}</div>}
        
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default Login;
```

### 2. Update Register Component

**File:** `src/Pages/Register.js`

```javascript
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../api/FirebaseAuthService';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('student');
  const [businessName, setBusinessName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);
    try {
      const additionalData = role === 'reseller' ? { businessName } : {};
      await registerUser(email, password, role, additionalData);
      
      // Redirect to login
      navigate('/login', { state: { message: 'Registration successful! Please login.' } });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleRegister}>
        <h2>Register</h2>
        {error && <div className="error">{error}</div>}
        
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="student">Student</option>
          <option value="reseller">Reseller</option>
          <option value="owner">Owner</option>
        </select>
        
        {role === 'reseller' && (
          <input
            type="text"
            placeholder="Business Name"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            required
          />
        )}
        
        <button type="submit" disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default Register;
```

### 3. Add Protected Routes

**File:** `src/App.js`

```javascript
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './Components/ProtectedRoute';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ResellerDashboard from './Pages/ResellerDashboard'; // or your reseller page
import StudentDashboard from './Pages/StudentDashboard';
import OwnerDashboard from './Pages/OwnerDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        <Route 
          path="/" 
          element={
            <ProtectedRoute allowedRoles={['reseller']}>
              <ResellerDashboard />
            </ProtectedRoute>
          } 
        />
        
        <Route 
          path="/student/dashboard" 
          element={
            <ProtectedRoute allowedRoles={['student']}>
              <StudentDashboard />
            </ProtectedRoute>
          } 
        />
        
        <Route 
          path="/owner/dashboard" 
          element={
            <ProtectedRoute allowedRoles={['owner']}>
              <OwnerDashboard />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
```

### 4. Add Logout Button to Navbar

**File:** `src/Components/Navbar.js`

```javascript
import React from 'react';
import LogoutButton from './LogoutButton';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Your navbar content */}
      
      <div className="navbar-right">
        <LogoutButton />
      </div>
    </nav>
  );
};

export default Navbar;
```

### 5. Update App.js to Initialize Firebase

```javascript
import React, { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Utils/firebase';

function App() {
  useEffect(() => {
    // Listen for auth state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('User logged in:', user.email);
      } else {
        console.log('User logged out');
      }
    });

    return () => unsubscribe();
  }, []);

  // Rest of your App component
  return (
    // Your JSX
  );
}

export default App;
```

## Testing Authentication

### 1. Register a new user
```
Email: test@example.com
Password: Test123!@
Role: Reseller
Business Name: Test Business
```

### 2. Login with credentials
```
Email: test@example.com
Password: Test123!@
```

### 3. Verify redirect works
Should redirect to `/` (reseller dashboard)

### 4. Check localStorage
```javascript
// In browser console
localStorage.getItem('userRole') // Should return 'reseller'
localStorage.getItem('userEmail') // Should return 'test@example.com'
```

## Checklist

- [ ] Firebase project created
- [ ] Firestore database created
- [ ] Authentication enabled
- [ ] Environment variables configured (.env.local)
- [ ] Firebase SDK installed (`npm install firebase`)
- [ ] `firebase.js` initialized
- [ ] Login.js updated with Firebase
- [ ] Register.js updated with Firebase
- [ ] Protected routes added to App.js
- [ ] Logout button added to Navbar
- [ ] Auth state listener added to App.js
- [ ] Test registration works
- [ ] Test login works
- [ ] Test role-based redirects work
- [ ] Test logout works

## Common Issues

### "Cannot find module 'firebase'"
```bash
npm install firebase
```

### "FIREBASE_API_KEY is undefined"
- Check `.env.local` is in root directory
- Verify environment variable names match exactly
- Restart development server

### "User not found in Firestore"
- Check Firestore security rules allow creating documents
- Verify user document is being created in `registerUser()` function

### "localStorage is not defined"
- Make sure code runs in browser (not SSR)
- This is normal - only happens on client side

## Next Steps

1. Customize Login and Register UI to match your design
2. Add email verification
3. Add password reset functionality
4. Add two-factor authentication (optional)
5. Integrate with your existing API

## Support

- Firebase Docs: https://firebase.google.com/docs
- React Router Docs: https://reactrouter.com
- Ask GPT or search Stack Overflow for specific issues
