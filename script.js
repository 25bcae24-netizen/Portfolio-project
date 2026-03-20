// This ensures the code runs only AFTER the page is fully loaded
window.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector("form");
    
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault(); // This stops the URL from changing/refreshing
            console.log("Form submission intercepted!");

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
            .then(response => {
                if (response.ok) {
                    alert("Message sent successfully!");
                    form.reset();
                } else {
                    alert("Server error: " + response.status);
                }
            })
            .catch(error => {
                console.error("Fetch error:", error);
                alert("Error: Could not reach the server.");
            });
        });
    }
});
