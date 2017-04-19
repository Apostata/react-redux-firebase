import firebase from 'firebase';

try{
	let config = {
		apiKey: "AIzaSyB0h3CJjkfwgaR7jgNGDXu2Mk88hpeNTdw",
		authDomain: "react-todoapp-c88e2.firebaseapp.com",
		databaseURL: "https://react-todoapp-c88e2.firebaseio.com",
		projectId: "react-todoapp-c88e2",
		storageBucket: "react-todoapp-c88e2.appspot.com",
		messagingSenderId: "1068990235559"
	};

	firebase.initializeApp(config);
}
catch(e){

}

export var firebaseRef = firebase.database().ref();
export default firebase;