
var firebaseConfig = {
  apiKey: "AIzaSyA8r7j2Q1A4AqWx1XFf0C8_XThPZ_cuulo",
  authDomain: "covid-19bot-nmcl.firebaseapp.com",
  databaseURL: "https://covid-19bot-nmcl-default-rtdb.firebaseio.com",
  projectId: "covid-19bot-nmcl",
  storageBucket: "covid-19bot-nmcl.appspot.com",
  messagingSenderId: "575266603500",
  appId: "1:575266603500:web:1fddd991aef23dcf9dc0c9",
  measurementId: "G-66974H0DZ9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";
function addRoom(){
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });
    localStorage.setItem("room_name",room_name);
    window.location = "kwitter_page.html";
} 


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
console.log("Room name-" + Room_names);
row = "<div  class= 'room_name' id="+Room_names + "onclick = 'redirectToRoomName(this.id)'>#" + Room_names +    "</div><hr>";
document.getElementById("output").innerHTML += row;
  //End code
  });});}
getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}