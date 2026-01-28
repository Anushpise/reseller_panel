# Firebase Setup Guide

## Prerequisites
- Firebase account (free tier available)
- Node.js 18+ installed
- npm installed

## Step-by-Step Firebase Setup

### 1. Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Enter project name: "Reseller Panel"
4. Enable Google Analytics (optional)
5. Click "Create project"

### 2. Create Web App

1. In Firebase Console, click web icon (`</>`)
2. App nickname: "Reseller Panel"
3. Check "Also set up Firebase Hosting"
4. Click "Register app"
5. Copy the config object

### 3. Enable Authentication

1. Go to Authentication → Sign-in method
2. Enable "Email/Password"
3. Enable "Google" (optional)

### 4. Create Firestore Database

1. Go to Firestore Database
2. Click "Create database"
3. Select "Start in production mode"
4. Choose location (closest to your users)
5. Click "Create"

### 5. Update Firestore Security Rules

Replace default rules with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read: if request.auth.uid == userId;
      allow write: if request.auth.uid == userId;
      allow create: if request.auth != null;
    }
    
    match /courses/{courseId} {
      allow read: if true;
      allow write: if get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'reseller';
    }
    
    match /enrollments/{enrollmentId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null;
    }
  }
}
```

### 6. Get Firebase Config

1. Go to Project Settings (gear icon)
2. Scroll to "Your apps"
3. Click "Reseller Panel" web app
4. Copy config:
   ```javascript
   {
     apiKey: "...",
     authDomain: "...",
     projectId: "...",
     storageBucket: "...",
     messagingSenderId: "...",
     appId: "..."
   }
   ```

### 7. Configure Environment Variables

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Update with your Firebase config:
   ```
   REACT_APP_FIREBASE_API_KEY=AIzaSy...
   REACT_APP_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
   REACT_APP_FIREBASE_PROJECT_ID=your-project-id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=123456789
   REACT_APP_FIREBASE_APP_ID=1:123456789:web:abc123
   ```

### 8. Install Firebase SDK

```bash
npm install firebase
```

### 9. Test Connection

Run this to verify configuration:
```bash
npm start
```

Navigate to login page and verify Firebase loads without errors.

## User Roles in Firestore

When a user registers, their profile is created in Firestore:

```javascript
{
  uid: "user123",
  email: "user@example.com",
  role: "reseller",  // "owner", "reseller", or "student"
  createdAt: Timestamp,
  businessName: "My Business" // for resellers
}
```

## API Reference

### FirebaseAuthService

```javascript
import {
  registerUser,
  loginUser,
  logoutUser,
  getUserRole,
  updateUserProfile
} from './api/FirebaseAuthService';

// Register
await registerUser(email, password, 'reseller', {
  businessName: 'My Business'
});

// Login
const { user, role } = await loginUser(email, password);

// Get role
const role = getUserRole();

// Logout
await logoutUser();

// Update profile
await updateUserProfile(userId, { businessName: 'New Name' });
```

## Troubleshooting

### "Firebase is not defined"
- Check `.env.local` has correct credentials
- Restart development server: `npm start`

### "Permission denied" errors
- Check Firestore security rules
- Verify user is authenticated
- Check user role is correct

### CORS errors
- Add your domain to Firebase console
- Ensure API key has correct restrictions

### Tests failing
- Set REACT_APP_FIREBASE_EMULATOR_HOST=localhost:9099 for testing
- Use Firebase Emulator Suite for local testing

## Next Steps

1. Update Login.js to use `loginUser()` function
2. Update Register.js to use `registerUser()` function
3. Add ProtectedRoute to your routing
4. Add LogoutButton to navbar
5. Create role-specific dashboard components

## Resources

- [Firebase Documentation](https://firebase.google.com/docs)
- [Firebase Authentication Guide](https://firebase.google.com/docs/auth)
- [Firestore Documentation](https://firebase.google.com/docs/firestore)
- [Firebase Security Rules](https://firebase.google.com/docs/firestore/security/get-started)
