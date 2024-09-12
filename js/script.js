let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle("active");
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove("active");
}

const bookingForm = document.getElementById('bookingForm');

bookingForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const nameInput = document.getElementById('name');
  const dateInput = document.getElementById('appointmentDate');

  const name = nameInput.value.trim(); // Remove leading/trailing whitespace
  const date = dateInput.value;

  if (name && date) { // Check if both fields are filled
    const message = `Thank you Mr./Ms. ${name} for booking the appointment on ${date}. For more details connect us at +91-741-258-0963`;
    alert(message); // Display the message using alert

    // You can also display the message in a dedicated HTML element:
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    document.body.appendChild(messageElement); // Append the message to the body
  } else {
    alert('Please enter your name and select a date.');
  }
});