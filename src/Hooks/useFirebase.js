import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../pages/SignIN/firebase/firebase.init"

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [signInError, setSignInError] = useState('');
    const [admin, setAdmin] = useState(false);


    const auth = getAuth();
    const registerUser = (email, password, name, navigate) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {
                const newUser = { email, displayName: name };
                setUser(newUser)

                // save user to the database
                saveUser(email, name);
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name,
                }).then(() => {
                    // Profile updated!
                }).catch((error) => {
                    // An error occurred
                })
                navigate('/');
            })
            .catch((error) => {

            })
            .finally(() => setIsLoading(false));
    }

    const signinUser = (email, password, location, navigate) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                navigate(location?.state?.from || '/');
                setSignInError('')
            })
            .catch((error) => {
                setSignInError(error.message);
            })
            .finally(() => setIsLoading(false));
    }
    // it keeps all user changes sync
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                // Sign-out successful.
            })
            .finally(() => setIsLoading(false));
    };

    const saveUser = (email, displayName) => {
        const user = { email, displayName };
        fetch('https://calm-citadel-62315.herokuapp.com/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    useEffect(() => {
        fetch(`https://calm-citadel-62315.herokuapp.com/users?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    return {
        user,
        admin,
        isLoading,
        signInError,
        registerUser,
        signinUser,
        logOut

    }
}

export default useFirebase;