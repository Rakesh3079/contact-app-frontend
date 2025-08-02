const form = document.getElementById("contactForm");
const formResponse = document.getElementById("formResponse");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const data = { firstName, lastName, email, message };

  try {
    const res = await fetch("https://contact-app-backend-ivhu.onrender.com/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (res.ok) {
      formResponse.style.color = "green";
      formResponse.textContent = "✅ Message sent successfully!";
      form.reset();
    } else {
      formResponse.style.color = "red";
      formResponse.textContent = "❌ Failed to send. Please try again.";
    }
  } catch (error) {
    formResponse.style.color = "red";
    formResponse.textContent = "❌ Something went wrong. Please check your connection.";
  }
});
