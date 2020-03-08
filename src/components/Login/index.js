import React, { useContext } from 'react';
import googleAuthProvider from '../../utils/googleAuthProvider';
import firebaseContext from '../FirebaseProvider/context';
import { LoginContainer, LoginText, LoginButtonBox, LoginBox } from './styles';

export const Login = () => {
  const firebase = useContext(firebaseContext);

  function login() {
    firebase.auth().signInWithPopup(googleAuthProvider);
    //   .then(function(result) {
    //     // This gives you a Google Access Token. You can use it to access the Google API.
    //     const token = result.credential.accessToken;
    //     // The signed-in user info.
    //     const user = result.user;
    //     console.log(result);
    //     // ...
    //   })
    //   .catch(function(error) {
    //     // Handle Errors here.
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     // The email of the user's account used.
    //     const email = error.email;
    //     // The firebase.auth.AuthCredential type that was used.
    //     const credential = error.credential;
    //     // ...
    //   });
  }

  return (
    <LoginContainer>
      <LoginBox>
        <LoginText>
          Aliquip veniam do deserunt non consectetur magna excepteur in labore
          magna nostrud laborum veniam.
        </LoginText>
        <LoginButtonBox>
          <button type="button" onClick={login}>
            Login
          </button>
        </LoginButtonBox>
      </LoginBox>
    </LoginContainer>
  );
};
