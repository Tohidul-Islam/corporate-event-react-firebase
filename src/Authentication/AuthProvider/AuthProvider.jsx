import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../Firebase/firebase.config";




export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState();
    const [loader, setLoader] = useState(true);


    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoader(true)
        return signOut(auth);
    }

    const passwordReset = (email) => {
        setLoader(true)
        return sendPasswordResetEmail(auth, email);
    }


    const googleSignIn = () => {
        setLoader(true)
        return signInWithPopup(auth, googleProvider);
    }

    const githubSignIn = () => {
        setLoader(true);
        return signInWithPopup(auth, githubProvider)
    }




    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log(currentUser)
            setLoader(false)
        })
        return unSubscribe;
    }, [])

    const authValues = { createUser, user, loginUser, logOut, passwordReset, loader, googleSignIn, githubSignIn }
    return (
        <AuthContext.Provider value={authValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;


AuthProvider.propTypes = {
    children: PropTypes.node
}
