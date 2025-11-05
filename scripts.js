/* Add your JavaScript to this file */

document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.querySelector('.newsletter form');
    const emailInput = document.getElementById('email');
    const messageDiv = document.querySelector('.message');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const email = emailInput.value.trim();
            
            if (email === '') {
                // Display error message if no email entered
                messageDiv.textContent = 'Please enter a valid email address.';
                messageDiv.style.color = '#E53E3E';
                messageDiv.style.backgroundColor = '#FED7D7';
                messageDiv.style.padding = '10px';
                messageDiv.style.borderRadius = '5px';
                messageDiv.style.marginTop = '15px';
            } else {
                // Display success message with the entered email
                messageDiv.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
                messageDiv.style.color = '#276749';
                messageDiv.style.backgroundColor = '#C6F6D5';
                messageDiv.style.padding = '10px';
                messageDiv.style.borderRadius = '5px';
                messageDiv.style.marginTop = '15px';
                
                // Clear the input field
                emailInput.value = '';
            }
        });
    }
});