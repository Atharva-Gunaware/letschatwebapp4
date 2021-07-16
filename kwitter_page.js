var firebaseConfig = {
    apiKey: "AIzaSyDjKDeW0TnEWQx7nHCGNT1jXU972ZC0oMU",
    authDomain: "letschatwebapp-cf15a.firebaseapp.com",
    projectId: "letschatwebapp-cf15a",
    storageBucket: "letschatwebapp-cf15a.appspot.com",
    messagingSenderId: "631247834042",
    appId: "1:631247834042:web:9e5fc636b0a224aacf6b83"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send()
{
     msg = document.getElementById("msg").value;
     firebase.database().ref(room_name).push({
           name: user_name,
           message : msg,
           like : 0
     });
     document.getElementById("msg").value = "";
}

function logout2()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
      window.location = "index.html";

}

    } });  }); }
getData();
