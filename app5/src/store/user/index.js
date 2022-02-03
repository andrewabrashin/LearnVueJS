import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

function isValidToken(token) {
    return token !== '';
}

export default {
    namespaced: true,
    state: {
        name: '',
        uid: '',
    },
    getters: {
        isAuth(state) {
            return isValidToken(state.uid);
        },
        name(state) {
            return state.name;
        }
    },
    mutations: {
        setUser(state, data) {
            state.name = data.email;
            state.uid = data.uid;
        }
    },
    actions: {
        doAuth(context, data) {
            const auth = getAuth();
            return signInWithEmailAndPassword(auth, data.login, data.password)
                .then((userCredential) => {
                    console.log(userCredential);
                    //   const user = userCredential.user;
                    context.state.name = userCredential.user.email;
                    context.state.uid = userCredential.user.uid;
                    return 'OK';
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.error(errorMessage);
                });
        },
        doSign(context, data) {
            const auth = getAuth();
            return createUserWithEmailAndPassword(auth, data.login, data.password)
                .then((userCredential) => {
                    console.log(userCredential);
                    //   const user = userCredential.user;
                    context.state.name = userCredential.user.email;
                    context.state.uid = userCredential.user.uid;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.error(errorMessage);
                });
        },
        logout(context) {
            const auth = getAuth();
            signOut(auth).then(() => {
                context.state.uid = '';
                context.state.name = '';
            });
        }
    },
}