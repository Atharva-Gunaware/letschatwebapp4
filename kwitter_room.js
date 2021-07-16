var firebaseConfig = {
    apiKey: "AIzaSyDjKDeW0TnEWQx7nHCGNT1jXU972ZC0oMU",
    authDomain: "letschatwebapp-cf15a.firebaseapp.com",
    databaseURL: "https://letschatwebapp-cf15a-default-rtdb.firebaseio.com",
    projectId: "letschatwebapp-cf15a",
    storageBucket: "letschatwebapp-cf15a.appspot.com",
    messagingSenderId: "631247834042",
    appId: "1:631247834042:web:9e5fc636b0a224aacf6b83"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name= localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML= "WELCOME "+ user_name + "!";



function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("room_name - " + Room_name);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>"
document.getElementById("output").innerHTML += row;

//End code
});});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;
  
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

user_name = localStorage.getItem("user_name");

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
        window.location = "index.html";

}