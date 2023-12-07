let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


// valdimi i SignUp//
function validateForm() {

  let NameRegex = /^[A-Z][a-z]{3,9}$/;
  let LastnameRegex = /^[A-Z][a-z]{3,9}$/;
  let EmailRegex = /[a-zA-Z.-_]+@+[a-z]+\.+[a-z]{2,3}$/;
  let PasswordRegex = /^[A-Z].*\d$/;


  let NameInput = document.getElementById('Name');
  let NameError = document.getElementById('nameError');
  let LastnameInput = document.getElementById('Last-name');
  let LastnameError = document.getElementById('Last-nameError');
  let EmailInput = document.getElementById('Email');
  let EmailError = document.getElementById('EmailError');
  let PasswordInput = document.getElementById('Password');
  let PasswordError = document.getElementById('passwordError');

  NameError.innerText = '';
  LastnameError.innerText = '';
  EmailError.innerText = '';
  PasswordError.innerText = '';

  if (!NameRegex.test(NameInput.value)) {
    NameError.innerText = 'Invalid Name';
    return;
  }
  if (!LastnameRegex.test(LastnameInput.value)) {
    LastnameError.innerText = 'Invalid Lastname';
    return;
  }
  if (!EmailRegex.test(EmailInput.value)) {
    EmailError.innerText = 'Invalid Email';
    return;
  }
  if (!PasswordRegex.test(PasswordInput.value)) {
    PasswordError.innerText = 'Invalid password';
    return;
  }

  alert('Form submitted successfully!');
}
