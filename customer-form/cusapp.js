function showpass() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  
  function onSignup() {
      // get input values
      var resturant = document.getElementById("resturant")
      var email = document.getElementById("email");
      var password = document.getElementById("password");
      var country = document.getElementById("country")
      var tel = document.getElementById("tel")
      var message = document.getElementById("message");
  
      var user = {
        resturant: resturant.value,
          email: email.value,
          password: password.value,
          country: country.value,
        
          
  
      }
  
      firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      console.log(user)
      message.innerHTML = "Signup Successfully "
      setTimeout(() => {
          message.innerHTML = "";
          location.href = "cuslogin.html";
      }, 3000);
  
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      message.innerHTML =  errorMessage
      setTimeout(() => {
          message.innerHTML = "";
          
      }, 2000);
      // console.log(errorCode)
      // console.log(errorMessage)
      // ..
    });
  
      // var users = JSON.parse(localStorage.getItem("users")) || [];
      // // get indx
      // var userIdx = users.findIndex(function (val) {
      //     return val.email.toLowerCase() === user.email.toLowerCase()
      // });
  
      // if (userIdx === -1 ) {
      //     // this user is not exist
      //     users.push(user);
      //     // store in storage
      //     localStorage.setItem("users", JSON.stringify(users));
      //     // redirect to login page
      //     location.href = "login.html";
      // } else {
      //     message.innerHTML = user.email + " use in another account";
      // }
      // clear state
  
      // setTimeout(() => {
      //     message.innerHTML = "";
      //     location.href = "login.html";
      // }, 2000);
  
  
      // console.log(user);
  
  
  }
  
  // function onLogin() {
  //     // get input values
  //     var email = document.getElementById("email");
  //     var password = document.getElementById("password");
  //     var message = document.getElementById("message");
  
  //     var user = {
  //         email: email.value,
  //         password: password.value,
  //     }
  
  //     var users = JSON.parse(localStorage.getItem("users")) || [];
  //     // get indx
  //     var currentUser = users.find(function (val) {
  //         return val.email.toLowerCase() === user.email.toLowerCase() && val.password === user.password;
  //     });
  
  //     if (currentUser) {
  //         localStorage.setItem("user", JSON.stringify(currentUser));
  //         // user login
  //         location.href = "index.html";
  //     } else {
        
  //         message.innerHTML = "Invalid credentials";
  //     }
  //     // clear state
  //     setTimeout(() => {
  //         message.innerHTML = "";
  //     }, 2000);
  // }
  
  
  function login(){
      let email = document.getElementById("email")
      let password = document.getElementById("password")
    
      firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log("successfully login")
      console.log(user);
      window.location= "maincustomer.html"
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
    });
    
    }
  
  // function onLogout() {
  //     var message = document.getElementById("message");
  //     localStorage.removeItem("user");
  //     // message.innerHTML = "Good Bye.!";
  //     // clear state
  //     setTimeout(() => {
  //         location.href = "login.html";
  //     }, 1000);
  // }
  
  // function getCurrentUser() {
  //     var detial = document.getElementById("detial");
  //     var user = JSON.parse(localStorage.getItem("user"));
  //     detial.innerHTML = user.email;
  
  // }
  
  // var list = document.getElementById("list");
  
  // function getDetail() {
  //     var title = document.getElementById("title").value;
  //     var description = document.getElementById("description").value;
  //     if (title != "" && description != "") {
  //         var li = document.createElement("li");
  //         li.innerHTML = `
  //     <div class="card" style="width: 18rem;">
  //   <img src="https://image.freepik.com/free-vector/paper-style-luxury-background_52683-64817.jpg" class="card-img-top" alt="...">
  //   <div class="card-body">
  //     <h5 class="card-title">${title}</h5>
  //     <p class="card-text">${description}</p>
  //   </div>
  // </div>
  //     `;
  //         list.appendChild(li);
  //         document.getElementsByClassName("center")[0].children[1].value = ""
  //         document.getElementsByClassName("target")[0].children[1].value = "";
  
  //     } else {
  //         alert("Please Enter Right Information! ")
  //     }
  
  
  
  
  // }

  function post() {




    var category = document.getElementById('category');
    var itemName = document.getElementById('itemName');
    var price = document.getElementById('price');
    var free = document.getElementById('free');

    var post = document.getElementById('postItem');
    var divMain = document.createElement('div');
    var h5 = document.createElement('h5');
    var divInner = document.createElement('div');
    var image = document.createElement('img');
    var para = document.createElement('p')
    var tit = document.createElement('h2')
    var des = document.createElement('h2')





    // var tit3 = document.createTextNode('Item Name')
    var tit2 = document.createTextNode('itemName')
    var des2 = document.createTextNode('free')


    divMain.setAttribute("class", "card")
    divMain.setAttribute("style", "width: 18rem;")
    image.setAttribute("class", "card-img-top")
    image.setAttribute("src", "1.jpg")
    divInner.setAttribute("class", "card-body")
    h5.setAttribute("class", "card-title")
    para.setAttribute("class", "card-text")




    var h5Text = document.createTextNode(category.value);
    h5.appendChild(h5Text)
    
    var h5Text = document.createTextNode(itemName.value);
    h5.appendChild(h5Text)
    



    var h5Text = document.createTextNode(price.value);
    h5.appendChild(h5Text)

    var paraText = document.createTextNode(free.value);
    para.appendChild(paraText)

    // tit.appendChild(tit3)



    tit.appendChild(tit2)
    divInner.appendChild(tit)

    divInner.appendChild(h5)


    des.appendChild(des2)
    divInner.appendChild(des)


    divInner.appendChild(para)
    divMain.appendChild(image)
    divMain.appendChild(divInner);
    post.appendChild(divMain);

}
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  