document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault(); 
            
            const data = {
                name: form.querySelector("[name='name']").value,
                email: form.querySelector("[name='email']").value,
                message: form.querySelector("[name='message']").value
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
                alert("The server is waking up. Please wait 30 seconds and try again.");
            });
        });
    }
});
