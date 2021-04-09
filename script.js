
 const firebaseConfig = {
    apiKey: "AIzaSyDQoo_QYuNPwrrSX4tAhOHUf11XV8KUhp4",
    authDomain: "myinitial-78b3e.firebaseapp.com",
    projectId: "myinitial-78b3e",
    storageBucket: "myinitial-78b3e.appspot.com",
    messagingSenderId: "982307969916",
    appId: "1:982307969916:web:ac709d61705baf784e22f9",
    measurementId: "G-M4SNJ91GDH"
  };
 
  firebase.initializeApp(firebaseConfig);
  
  
 function login(){
    debugger;
    var _email = document.getElementById("email");
    var _password = document.getElementById("password");
    
    
    const auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(_email.value,_password.value);
     promise.catch(e => alert(e.message));
     alert("signed in " +  email.value);
window.location.href = "Comingsoon.html";    
}
  function goingback(){
    window.location='index.html';
  }
  function newWeb(){
    window.location='https://www.bonjourquebec.com/en-ca';
  }