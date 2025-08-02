document.getElementById('contactForm').addEventListener('submit', async function(e) {
  e.preventDefault();

  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  const responseBox = document.getElementById('formResponse');
  responseBox.textContent = "Sending message...";

  try {
    const response = await fetch('https://contact-app-backend-ivhu.onrender.com/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ firstName, lastName, email, message })
    });

    if (response.ok) {
      responseBox.textContent = "Message sent successfully!";
      document.getElementById('contactForm').reset();
    } else {
      responseBox.textContent = "Failed to send message. Please try again.";
    }
  } catch (error) {
    console.error('Error:', error);
    responseBox.textContent = "Something went wrong. Please try again.";
  }
});
