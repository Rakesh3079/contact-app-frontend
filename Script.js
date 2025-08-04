document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const responseDiv = document.getElementById("formResponse");
  const loader = document.getElementById("loader");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = {
      firstName: form.firstName.value.trim(),
      lastName: form.lastName.value.trim(),
      email: form.email.value.trim(),
      message: form.message.value.trim()
    };

    // Show loader and clear previous response
    loader.style.display = "block";
    responseDiv.textContent = "";
    
    try {
      const res = await fetch("https://contact-app-backend-ivhu.onrender.com/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        responseDiv.textContent = "✅ Message sent successfully!";
        responseDiv.style.color = "green";
        form.reset();
      } else {
        throw new Error("Failed to send");
      }
    } catch (err) {
      responseDiv.textContent = "❌ Failed to send message. Try again.";
      responseDiv.style.color = "red";
    } finally {
      loader.style.display = "none"; // Hide loader after request completes
    }
  });
});
