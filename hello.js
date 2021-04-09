// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDQoo_QYuNPwrrSX4tAhOHUf11XV8KUhp4",
    authDomain: "myinitial-78b3e.firebaseapp.com",
    projectId: "myinitial-78b3e",
    storageBucket: "myinitial-78b3e.appspot.com",
    messagingSenderId: "982307969916",
    appId: "1:982307969916:web:ac709d61705baf784e22f9",
    measurementId: "G-M4SNJ91GDH"
  };
  //Initialize Firebase
firebase.initializeApp(firebaseConfig);


function signUp() {
    
    
    debugger;
    var _email = document.getElementById("email");
    var _password = document.getElementById("password");
    

    firebase.database().ref("user").set({
        email: _email.value,
        password: _password.value
    });

    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(_email.value, _password.value);
    promise.catch(e => alert(e.message));

    alert("Signed Up");
}