/*
Завдання 2.

Необхідно реалізувати наступний функціонал як на відео signUp, а саме:

заповнити всі поля форми: first name, second name, email
вибрати стать: man, woman
вибрати position: Fronted, Backend, QC/QA
поставити галочку навпроти пункту: I agree…
після чого клікаємо на кнопку Sign Up і переходимо до блоку профайлу користувача (примітка: без галочки напроти I agree… кнопка має бути не активна)
на блоці профайлу має бути вся інформація яку ми заповнювали,
 а також картинка чоловіча чи жіноча відносно статі яку ми обирали
при кліку на Sign Out ми повертаємося на блок створення акаунту,
 поля в блоці мають бути зачищені
------------------------------------------------------------------------------------------
*/
const signupButton = document.getElementById("signupButton");
const agreeCheckbox = document.getElementById("agreeCheckbox");

agreeCheckbox.addEventListener("click", function () {
  if (this.checked) {
    signupButton.disabled = false;
    signupButton.style.backgroundColor = "green";
  } else {
    signupButton.disabled = true;
    signupButton.style.backgroundColor = "limegreen";
  }
});

signupContainer.style.display = "block";
profileContainer.style.display = "none";

signupButton.addEventListener("click", function (event) {

event.preventDefault();
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("emailAddress").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const position = document.getElementById("position").value;
  const image = document.getElementById("box-image");
  const profileInfo = document.getElementById("profileInfo");

  if (firstName === "" || lastName === "" || email === "" || !agreeCheckbox) {
    alert("Please fill in all required fields and agree to the terms.");
    return;
  }
  const signupContainer = document.getElementById("signupContainer");
  const profileContainer = document.getElementById("profileContainer");

 signupContainer.style.display = "none";
 profileContainer.style.display = "flex";
 

  if (gender === "man") {
    image.style.backgroundPosition = " 160px 0px";
  } else if (gender === "woman") {
    image.style.backgroundPosition = "-25px 0px";
  }

  profileInfo.innerHTML = `
    <h2> ${firstName} ${lastName}</h2>
    <p> ${email}</p>
    <p> ${position}</p>
  `;


  
  signupForm.reset();
});

const signupForm = document.getElementById("signupForm");
const signoutButton = document.getElementById("signoutButton");

signoutButton.addEventListener("click", function () {
  signupContainer.style.display = "block";
  profileContainer.style.display = "none";
  signupForm.reset();
});
