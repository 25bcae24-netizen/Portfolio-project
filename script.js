document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault(); 
            
            const nameVal = form.querySelector("[name='name']").value;
            const emailVal = form.querySelector("[name='email']").value;
            const messageVal = form.querySelector("[name='message']").value;

            const data = {
                name: nameVal,
                email: emailVal,
                message: messageVal
            };

            fetch("https://harshita-backend-project.onrender.com/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(result => {
                alert("Message sent successfully!");
                form.reset();
            })
            .catch(err => {
                console.error("Fetch error:", err);
                alert("Error sending message. Check console.");
            });
        });
    }
}); // Ensure these closing brackets are here!
