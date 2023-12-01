//credit to codingnepal
const forms = document.querySelector(".forms"),
pwShowHide = document.querySelectorAll(".eye"),
links = document.querySelectorAll(".link");

pwShowHide.forEach((eye) => {
eye.addEventListener("click", () => {
let pwFields = eye.parentElement.parentElement.querySelectorAll(".password");
    // if the icon is hidden, change the icon to showing, which corresponds with the text in the password
    pwFields.forEach((password) => {
      if (password.type === "password") {
        password.type = "text";
        eye.classList.replace("bx-hide", "bx-show");
        return;
      }
      password.type = "password";
      eye.classList.replace("bx-show", "bx-hide");
    });
  });
});
