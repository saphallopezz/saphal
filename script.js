$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });


    // Get references to the login and signup forms
var loginForm = document.getElementById('login-form');
var signupForm = document.getElementById('signup-form');

// Add event listener for login form submission
loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting

  // Get user credentials from login form
  var email = document.getElementById('login-email').value;
  var password = document.getElementById('login-password').value;

  // Sign in with email and password
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Login successful
      var user = userCredential.user;
      // Redirect to your website or handle successful login
    })
    .catch((error) => {
      // Login error
      var errorCode = error.code;
      var errorMessage = error.message;
      // Handle login error
    });
});

// Add event listener for signup form submission
signupForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting

  // Get user credentials from signup form
  var email = document.getElementById('signup-email').value;
  var password = document.getElementById('signup-password').value;

  // Sign up with email and password
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signup successful
      var user = userCredential.user;
      // Redirect to your website or handle successful signup
    })
    .catch((error) => {
      // Signup error
      var errorCode = error.code;
      var errorMessage = error.message;
      // Handle signup error
    });
});

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });


    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
