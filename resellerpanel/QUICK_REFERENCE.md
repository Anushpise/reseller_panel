# Quick Reference

## Commands

### Development
```bash
# Install dependencies
npm install

# Add Firebase
npm install firebase

# Start dev server
npm start

# Run tests
npm test

# Build for production
npm run build
```

### Docker
```bash
# Build image
docker build -t reseller-panel:latest .

# Run with docker-compose
docker-compose up

# Rebuild and restart
docker-compose up --build

# Stop containers
docker-compose down

# View logs
docker-compose logs -f frontend
```

### Git
```bash
# Check status
git status

# Add files
git add .

# Commit
git commit -m "message"

# Push
git push origin main

# View log
git log --oneline
```

## File Locations

```
resellerpanel/
├── src/
│   ├── Utils/
│   │   └── firebase.js                 # Firebase initialization
│   ├── api/
│   │   └── FirebaseAuthService.js      # Auth functions
│   ├── Components/
│   │   ├── ProtectedRoute.js           # Route protection
│   │   └── LogoutButton.js             # Logout button
│   ├── Pages/
│   │   ├── Login.js                    # Login page (update)
│   │   └── Register.js                 # Register page (update)
│   ├── App.js                          # Main app (add routes)
│   └── index.js                        # Entry point
├── Dockerfile                          # Docker config
├── docker-compose.yml                  # Docker compose
├── .env.example                        # Env template
├── .env.local                          # Dev environment
├── .gitignore                          # Git ignore rules
├── START_HERE.md                       # This file
├── FIREBASE_SETUP.md                   # Firebase guide
├── INTEGRATION_GUIDE.md                # Integration steps
└── QUICK_REFERENCE.md                  # Quick reference
```

## Environment Variables

```
REACT_APP_FIREBASE_API_KEY
REACT_APP_FIREBASE_AUTH_DOMAIN
REACT_APP_FIREBASE_PROJECT_ID
REACT_APP_FIREBASE_STORAGE_BUCKET
REACT_APP_FIREBASE_MESSAGING_SENDER_ID
REACT_APP_FIREBASE_APP_ID
```

## Functions

### Register
```javascript
import { registerUser } from './api/FirebaseAuthService';

await registerUser(email, password, role, {
  businessName: 'name'
});
```

### Login
```javascript
import { loginUser } from './api/FirebaseAuthService';

const { user, role } = await loginUser(email, password);
```

### Logout
```javascript
import { logoutUser } from './api/FirebaseAuthService';

await logoutUser();
```

### Get Role
```javascript
import { getUserRole } from './api/FirebaseAuthService';

const role = getUserRole();
```

### Protected Route
```javascript
import ProtectedRoute from './Components/ProtectedRoute';

<ProtectedRoute allowedRoles={['reseller']}>
  <YourComponent />
</ProtectedRoute>
```

### Logout Button
```javascript
import LogoutButton from './Components/LogoutButton';

<LogoutButton />
```

## User Roles

| Role | Dashboard | Permissions |
|------|-----------|-------------|
| **Owner** | /owner/dashboard | Manage all users, full access |
| **Reseller** | / | Manage students, set pricing |
| **Student** | /student/dashboard | Enroll in courses |

## Testing Users

Create these in Firebase for testing:

```
Owner:
Email: owner@test.com
Password: Test123!@

Reseller:
Email: reseller@test.com
Password: Test123!@

Student:
Email: student@test.com
Password: Test123!@
```

## GitHub Actions Workflow

| Trigger | Actions |
|---------|---------|
| Push to main | Test → Build → Push |
| Push to develop | Test → Build |
| Pull request | Test only |

## URLs

- Development: http://localhost:3000
- Firebase Console: https://console.firebase.google.com
- Docker Hub: https://hub.docker.com
- GitHub Actions: https://github.com/Anushpise/reseller_panel/actions

## Ports

- Frontend: 3000
- API (optional): 5000

## Firestore Collections

```
/users/{userId}
  - uid
  - email
  - role
  - createdAt
  - [additional fields]

/courses/{courseId}
  - title
  - description
  - price
  - createdBy

/enrollments/{enrollmentId}
  - studentId
  - courseId
  - enrolledAt
```

## Common Fixes

### Clear npm cache
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Clear Docker cache
```bash
docker system prune -a
```

### Clear browser cache
- DevTools → Application → Storage → Clear All

## Useful Links

- [Firebase Docs](https://firebase.google.com/docs)
- [React Docs](https://react.dev)
- [Docker Docs](https://docs.docker.com)
- [GitHub Actions](https://docs.github.com/en/actions)
- [npm Registry](https://www.npmjs.com)
