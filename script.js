document.addEventListener("DOMContentLoaded", function () {

  document.querySelector(".contact-form").addEventListener("submit", function(e){
    e.preventDefault();

    alert("Form submitted"); // test

    fetch("https://harshita-r-backend.onrender.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: document.querySelector("[name='name']").value,
        email: document.querySelector("[name='email']").value,
        message: document.querySelector("[name='message']").value
      })
    })
    .then(res => res.text())
    .then(data => alert(data))
    .catch(err => {
      alert("Error connecting to backend");
      console.log(err);
    });

  });

});