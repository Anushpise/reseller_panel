import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { auth, db } from '../Utils/firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';

// Register user with role
export const registerUser = async (email, password, role, additionalData = {}) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Store user profile in Firestore with role
    const userRef = doc(db, 'users', user.uid);
    await setDoc(userRef, {
      uid: user.uid,
      email: user.email,
      role: role, // 'owner', 'reseller', or 'student'
      createdAt: new Date(),
      ...additionalData,
    });

    return { user, uid: user.uid };
  } catch (error) {
    throw new Error(`Registration failed: ${error.message}`);
  }
};

// Login user
export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Get user role from Firestore
    const userRef = doc(db, 'users', user.uid);
    const userDoc = await getDoc(userRef);
    const userRole = userDoc.data()?.role || 'student';

    // Store in localStorage
    localStorage.setItem('userToken', user.accessToken);
    localStorage.setItem('userRole', userRole);
    localStorage.setItem('userEmail', user.email);

    return { user, role: userRole };
  } catch (error) {
    throw new Error(`Login failed: ${error.message}`);
  }
};

// Logout user
export const logoutUser = async () => {
  try {
    await signOut(auth);
    // Clear localStorage
    localStorage.removeItem('userToken');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userEmail');
  } catch (error) {
    throw new Error(`Logout failed: ${error.message}`);
  }
};

// Get user role
export const getUserRole = () => {
  return localStorage.getItem('userRole') || 'student';
};

// Get user email
export const getUserEmail = () => {
  return localStorage.getItem('userEmail');
};

// Update user profile
export const updateUserProfile = async (userId, updates) => {
  try {
    const userRef = doc(db, 'users', userId);
    await setDoc(userRef, updates, { merge: true });
  } catch (error) {
    throw new Error(`Profile update failed: ${error.message}`);
  }
};
