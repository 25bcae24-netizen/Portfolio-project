document.addEventListener("DOMContentLoaded", function () {

  document.querySelector(".contact-form").addEventListener("submit", function(e){
    e.preventDefault();

    console.log("Submitting form...");

    fetch("https://harshita-backend-project.onrender.com/contact", {
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
    .then(res => {
      console.log("Response received:", res);
      if(!res.ok) throw new Error("Server error");
      return res.text();
    })
    .then(data => {
      console.log("Server says:", data);
      alert(data);
    })
    .catch(err => {
      console.log("Fetch error:", err);
      alert("Error connecting to backend");
    });

  });

});