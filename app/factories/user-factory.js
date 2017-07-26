'use strict';

todoApp.factory("user-factory", function($q, $http, FirebaseUrl, FBCreds) {
	
	var config = {
		apiKey: FBCreds.key,
		authDomain: FBCreds.authDomain
	};

	firebase.intitializeApp(config);

	let currentUser = null;

	firebase.auth().onAuthStateChanged( (user) => {
		if(user) {
			currentUser = user.currentUser.uid;
		} else {
			currentUser = null;
		}
	});

	let getUser = () => {
		return currentUser;
	};

	let createUser = (userObj) => {
		return firebase.auth().createUserWithEmailAndPassword(userObj.email, userObj.password)
		.catch( (err) => {
			console.log("error in login", err.message);
		});
	};

	let loginUser = (userObj) => {
		return firebase.auth().signInWithEmailAndPassword(userObj.email, userObj.password)
		.catch( (err) => {
			console.log("error in login", err.message);
		});
	};

	let logoutUser = () => {
		return firebase.auth().signOut()
		.catch( (err) => {
			console.log("error loggin' out, man", err.message);
		});
	};

	console.log("firebase", firebase);
});
