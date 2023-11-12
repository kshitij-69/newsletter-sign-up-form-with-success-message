const continerForm = document.querySelector(".main");
const continerMessage = document.querySelector(".message");
continerForm.classList.add("active");
const form = document.querySelector("form");
document.querySelector("#email-add").addEventListener("focus", (e) => {
  form.classList.remove("error");
});
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  continerForm.classList.add("active");
  continerMessage.classList.remove("active");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inp = document.querySelector("#email-add");
  const inputValue = inp.value;
  const emailPattern = /^[^@\s]+@[^.\s]+\.[a-zA-Z]{2,4}$/;

  if (emailPattern.test(inputValue)) {
    continerForm.classList.remove("active");
    continerMessage.classList.add("active");
    document.querySelector(".email").textContent = `${inputValue}`;
  } else {
    form.classList.add("error");
    setTimeout(() => {
      form.classList.remove("error");
    }, 8000);
  }
});
