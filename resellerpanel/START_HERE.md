# 🚀 Firebase + Docker + CI/CD Integration - START HERE

## Overview
This project integrates Firebase authentication (with role-based access control), Docker containerization, and GitHub Actions CI/CD pipeline into the reseller panel.

## 🎯 What Was Added

### 1. **Firebase Authentication**
- Role-based access control: Owner, Reseller, Student
- Email/Password authentication
- Firestore database for user profiles
- Secure logout with session cleanup

### 2. **Docker Containerization**
- Multi-stage build for optimized images
- docker-compose for local development
- Health checks included
- Environment variable support

### 3. **GitHub Actions CI/CD**
- Automated testing (Jest) on every push
- ESLint code quality checks
- Docker image build and push to GitHub Container Registry
- Multi-node version testing (18.x, 20.x)

## 🔧 Quick Setup

### Step 1: Get Firebase Credentials
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or use existing one
3. Go to Project Settings → Service Accounts
4. Copy credentials for Web App

### Step 2: Configure Environment
```bash
cp .env.example .env.local
```
Update `.env.local` with your Firebase credentials:
```
REACT_APP_FIREBASE_API_KEY=your_key_here
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

### Step 3: Install Firebase
```bash
npm install firebase
```

### Step 4: Run with Docker
```bash
docker-compose up
```
App will be available at `http://localhost:3000`

## 📁 New Files Created

### Authentication
- `src/Utils/firebase.js` - Firebase initialization
- `src/api/FirebaseAuthService.js` - Authentication functions
- `src/Components/ProtectedRoute.js` - Role-based route protection
- `src/Components/LogoutButton.js` - Logout component

### Docker & Deployment
- `Dockerfile` - Multi-stage build configuration
- `docker-compose.yml` - Local development orchestration
- `.github/workflows/deploy.yml` - CI/CD pipeline

### Configuration
- `.env.example` - Environment template
- `.env.local` - Development environment
- `.gitignore` - Git ignore rules

### Documentation
- `FIREBASE_SETUP.md` - Detailed Firebase setup
- `INTEGRATION_GUIDE.md` - Integration instructions
- `QUICK_REFERENCE.md` - Quick command reference

## 🔐 Authentication Roles

### Owner
- Full administrative access
- Can manage resellers and students
- Dashboard: `/owner/dashboard`

### Reseller
- Can manage their own students and courses
- Can set pricing for courses
- Dashboard: `/` (home/reseller dashboard)

### Student
- Can enroll in courses
- Can view purchased courses
- Dashboard: `/student/dashboard`

## 🧪 Testing
```bash
npm test
```

## 🐳 Docker Commands

### Build locally
```bash
docker build -t reseller-panel:latest .
```

### Run with docker-compose
```bash
docker-compose up --build
```

### Push to GitHub Container Registry
```bash
docker tag reseller-panel:latest ghcr.io/yourusername/reseller_panel:latest
docker push ghcr.io/yourusername/reseller_panel:latest
```

## 📚 Integration Points

### Login Flow
1. User enters email/password on Login page
2. `FirebaseAuthService.loginUser()` authenticates via Firebase
3. User role fetched from Firestore and stored in localStorage
4. User redirected to role-specific dashboard

### Protected Routes
```javascript
<ProtectedRoute allowedRoles={['reseller']}>
  <ResellerDashboard />
</ProtectedRoute>
```

### Logout
```javascript
import LogoutButton from './Components/LogoutButton';

// In your navbar/header
<LogoutButton />
```

## 🚀 GitHub Actions Workflow

On every push to main/develop:
1. ✅ Run tests on Node 18.x & 20.x
2. ✅ Run ESLint checks
3. 🐳 Build Docker image
4. 📤 Push to GitHub Container Registry
5. 📊 Upload coverage reports

View status: GitHub repo → Actions tab

## 📖 Next Steps

1. Read `FIREBASE_SETUP.md` for detailed Firebase configuration
2. Read `INTEGRATION_GUIDE.md` for step-by-step integration
3. Update Login.js and Register.js to use Firebase services
4. Configure GitHub secrets for CI/CD (if needed)
5. Deploy Docker image to your hosting platform

## 🆘 Troubleshooting

**Firebase not initializing?**
- Check `.env.local` has correct Firebase credentials
- Ensure Firebase SDK is installed: `npm list firebase`

**Docker build fails?**
- Clear cache: `docker system prune -a`
- Rebuild: `docker-compose up --build`

**Tests failing?**
- Clear node_modules: `rm -rf node_modules && npm ci`
- Run: `npm test`

## 📞 Support
For Firebase issues: Check [Firebase Documentation](https://firebase.google.com/docs)
For Docker issues: Check [Docker Documentation](https://docs.docker.com)
