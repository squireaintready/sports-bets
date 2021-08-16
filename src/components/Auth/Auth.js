import firebase from "firebase";

import { db } from "../../firebase";
import { auth, provider } from "../../firebase";
import { useDispatch } from "react-redux";
import {
  setActiveUser,
  setUserLogOutState,
} from "../../features/userSlice";
import { useAuthState } from "react-firebase-hooks/auth";

import Button from "@material-ui/core/Button";

import useStyles from "./styles";

const Auth = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [user] = useAuthState(auth);

  const handleSignIn = () => {
    auth.signInWithPopup(provider).then((res) => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          let uid = user.uid;
          let userRef = db.collection("users").doc(uid);
          userRef.get().then((doc) => {
            if (!doc.exists) {
              userRef
                .set({
                  uid: res.user.uid,
                  name: res.user.displayName,
                  email: res.user.email,
                  photoURL: res.user.photoURL
                })
                .then(() => {
                  console.log(`Added ${res.user.email} to the database`);
                })
                .catch((e) => console.log(e));
            }
          });
        }
      });

      dispatch(
        setActiveUser({
          userName: res.user.displayName,
          userEmail: res.user.email,
          uid: res.user.uid,
          photoURL: res.user.photoURL,
        })
      );
    });
  };

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(setUserLogOutState({
          userName: '',
          userEmail: '',
          uid: '',
          photoURL: '',
        }));
      })
      .catch((e) => console.log(e.message));
  };

  return (
    <div className={classes.root}>
      {user ? (
        <Button color="inherit" onClick={handleSignOut}>
          Log out
        </Button>
      ) : (
        <Button color="inherit" onClick={handleSignIn}>
          Log in
        </Button>
      )}
    </div>
  );
};

export default Auth;

// useEffect(() =>{
//   console.log(userEmail)
//   if(userName && userEmail){
//     firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//       let uid = user.uid;
//       let userRef = db.collection('users').doc(uid);
//       console.log(uid)
//       userRef.get().then(doc =>{
//         if(doc.exists){
//           // RETRIEVE COLLECTIONS -> DOCS for that ID, and dispatch that data into data.
//           // let collectionsRef = userRef.collection('daily-balances').get().then(doc =>{
//           //   console.log(doc)
//           // })
//           console.log(doc)
//         }else{
//           userRef.set({
//             name: userName,
//             email: userEmail
//           }).then(() =>{ console.log(`Added ${userEmail} to the database`)})
//           .catch(e => console.log(e))
//         }
//         // dispatch to users.
//       })
//     }
//     });
//   }
// }, [userEmail, userName])

// useEffect(() =>{
//     firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//       let uid = user.uid;
//       let userRef = db.collection('users').doc(uid);
//       userRef.get().then(doc =>{
//         if(!doc.exists){
//           userRef.set({
//             name: userName,
//             email: userEmail
//           }).then(() =>{ console.log(`Added ${userEmail} to the database`)})
//           .catch(e => console.log(e))
//         }

//         // dispatch to users.
//       })
//     }
//     });
// }, [userEmail, userName])
