function showpass() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

// function signup() {
//   // get input values
//   var resturant = document.getElementById("resturant")
//   var email = document.getElementById("email");
//   var password = document.getElementById("password");
//   var country = document.getElementById("country")
//   var city = document.getElementById("city")
  

//   var user = {
//     resturant: resturant.value,
//       email: email.value,
//       password: password.value,
//       country: country.value,
//       city: city.value,
//       MobileNumber: MobileNumber.value
      

//   }

//   firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
// .then((userCredential) => {
//   // Signed in 
//   var user = userCredential.user;
//   console.log(user)
//   message.innerHTML = "Signup Successfully "
//   setTimeout(() => {
//       message.innerHTML = "";
//       location.href = "login.html";
//   }, 3000);

//   // ...
// })
// .catch((error) => {
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   message.innerHTML =  errorMessage
//   setTimeout(() => {
//       message.innerHTML = "";
      
//   }, 2000);
//   // console.log(errorCode)
//   // console.log(errorMessage)
//   // ..
// });
// }
// function login(){
//   let email = document.getElementById("email")
//   let password = document.getElementById("password")

//   firebase.auth().signInWithEmailAndPassword(email.value, password.value)
// .then((userCredential) => {
//   // Signed in
//   var user = userCredential.user;
//   console.log("successfully login")
//   console.log(user);
//   window.location= "mainrestaurant.html"
//   // ...
// })
// .catch((error) => {
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   alert(errorMessage);
// });

// }




// let submit = () => {
//     let resturantname = document.getElementById("resturantname");
//     let email = document.getElementById("email");
//     let password = document.getElementById("password");


// console.log(resturantname.value)   
// console.log(email.value)
// }

// let signup = () => {
//   let resturant = document.getElementById("resturant");
//   let email = document.getElementById("email");
//   let password = document.getElementById("password");

//   firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
//       .then((res) => {
//           let user = {
//             resturant: resturant.value,
//               email: email.value,
//               password: password.value
//           }

//           firebase.database().ref(`users/${res.user.uid}`).set(user)
//               .then(() => {
//                   alert("User register hogaya")
//                   console.log(user)
//                   window.location = "login.html"
//               })

//       })
//       .catch((err) => {
//           console.log("err=>", err)
//       })
// }

// function signup() {
//   // get input values
//   var resturant = document.getElementById("resturant")
//   var email = document.getElementById("email");
//   var country = document.getElementById("country")    
//   var city = document.getElementById("city")
//   var password = document.getElementById("password");


//   var user = {
//     resturant: resturant.value,
//     email: email.value,
//     country: country.value,
//     city: city.value,
//     password: password.value,


//   }

//   firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
//     .then((userCredential) => {
//       // Signed in 
//       var user = userCredential.user;
//       console.log(user)
//       message.innerHTML = "Signup Successfully "
//       setTimeout(() => {
//         message.innerHTML = "";
//         location.href = "login.html";
//       }, 3000);

//       // ...
//     })
//     .catch((error) => {
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       message.innerHTML = errorMessage
//       setTimeout(() => {
//         message.innerHTML = "";

//       }, 2000);
//       // console.log(errorCode)
//       // console.log(errorMessage)
//       // ..
//     });
// }

// var MobileNumber = document.getElementById("MobileNumber")
// var message = document.getElementById("message");