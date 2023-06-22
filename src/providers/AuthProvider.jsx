import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

export const authContext = createContext(null);
const auth = getAuth(app)
const googleAuthProvider = new GoogleAuthProvider()


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // // creating user ------------------------------------------------------
    // const createUser = (email, password) => {
    //     setLoading(true);
    //     return createUserWithEmailAndPassword(auth, email, password)
    // }
    const createUser = (email, password, name, photoUrl) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                // Set the user's display name and photo URL
                return updateProfile(user, { displayName: name, photoURL: photoUrl })
                    .then(() => {
                        setUser(user);
                        setLoading(false);
                        return result;
                    })
                    .catch((error) => {
                        setLoading(false);
                        throw error;
                    });
            })
            .catch((error) => {
                setLoading(false);
                throw error;
            });
    };

    // Sign in ------------------------------------------------------------
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Sign in with Google --------------------------------------------------
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleAuthProvider)
    }

    // Get user profile -----------------------------------------------------
    const getUserProfile = () => {

        const currentUser = auth.currentUser;
        if (currentUser) {
            const name = currentUser.displayName;
            const photoUrl = currentUser.photoURL;

        }

    };

    // Update user profile --------------------------------------------------
    const updateUserProfile = (name, photoUrl) => {
        const currentUser = auth.currentUser;

        if (currentUser) {
            updateProfile(currentUser, { displayName: name, photoURL: photoUrl })
                .then(() => {
                    console.log('User profile updated successfully');
                    getUserProfile(); // Refresh the user profile after update
                })
                .catch((error) => {
                    console.error('Error updating user profile:', error);
                });
        }
    };

    // logged user ----------------------------------------------------------
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            setLoading(false);
            setUser(loggedUser)
            if (loggedUser) {
                getUserProfile()
            }

        })

        return () => {
            unsubscribe();
        }
    }, [])

    // Log Out -------------------------------------------------------------
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    const authInfo = {
        user,
        createUser,
        updateUserProfile,
        signIn,
        signInWithGoogle,
        logOut,
        loading
    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;