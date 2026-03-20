const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const data = {
    name: form.querySelector("[name='name']").value,
    email: form.querySelector("[name='email']").value,
    message: form.querySelector("[name='message']").value
  };

  fetch("https://harshita-r-backend.onrender.com/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(() => {
    alert("Message sent successfully!");
    form.reset();
  })
  .catch(() => {
    alert("Error sending message");
  });
});