'use strict';

todoApp.factory("UserFactory", function($q, $http, FirebaseUrl, FBCreds) {

  var config = {
    apiKey: FBCreds.key,
    authDomain: FBCreds.authDomain
  };

  firebase.initializeApp(config);

  let currentUser = null;

  let isAuthenticated = function() {
    console.log("isAuthenticated called");
    return new Promise( (resolve, reject) => {
      console.log("firing onAuthStateChanged");
      firebase.auth().onAuthStateChanged(function(user) {
        console.log("onAuthStateChanged finished");
        if (user) {
          console.log("user", user);
          currentUser = user.uid;
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  };

  let getUser = () => {
    return currentUser;
  };

  let createUser = (userObj) => {
    return firebase.auth().createUserWithEmailAndPassword(userObj.email, userObj.password)
    .catch( (err) => {
      console.log("error creating user", err.message);
    });
  };

  let loginUser = (userObj) => {
    return $q( (resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(userObj.email, userObj.password)
      .then( (user) => {
        // have to set the current user here because the controllers that call `getUser`
        // ( todo-controller, for example) are loading before the `onAuthStateChanged`
        // listener was kicking in and setting the user value
        currentUser = user.uid;
        resolve(user);
      })
      .catch( (err) => {
        console.log("error loggin in", err.message);
      });
    });
  };

  let logoutUser = () => {
    return firebase.auth().signOut()
    .catch( (err) => {
      console.log("error loggin' out, man", err.message);
    });
  };

  console.log("firebase", firebase );

  return {isAuthenticated, getUser, createUser, loginUser, logoutUser};
});
