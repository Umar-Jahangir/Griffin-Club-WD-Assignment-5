document.getElementById('registrationForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    // Individual field validation
    let isValid = true;

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const number = document.getElementById('number').value.trim();
    const year = document.getElementById('year').value;
    const branch = document.getElementById('branch').value;

    // Name validation
    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required.';
        isValid = false;
    } else {
        document.getElementById('nameError').textContent = '';
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        isValid = false;
    } else {
        document.getElementById('emailError').textContent = '';
    }

    // Number validation
    const numberPattern = /^[0-9]{10}$/;
    if (!numberPattern.test(number)) {
        document.getElementById('numberError').textContent = 'Please enter a valid 10-digit number.';
        isValid = false;
    } else {
        document.getElementById('numberError').textContent = '';
    }

    // Year validation
    if (!year) {
        document.getElementById('yearError').textContent = 'Please select a year.';
        isValid = false;
    } else {
        document.getElementById('yearError').textContent = '';
    }

    // Branch validation
    if (!branch) {
        document.getElementById('branchError').textContent = 'Please select a branch.';
        isValid = false;
    } else {
        document.getElementById('branchError').textContent = '';
    }

    // If validation passes, submit the form
    if (isValid) {
        const formData = { name, email, number, year, branch };

        try {
            const response = await fetch('http://localhost:5000/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const responseData = await response.text();

            if (response.ok) {
                // Success: Display success message
                document.getElementById('successMessage').style.display = 'block';
                setTimeout(() => {
                    document.getElementById('successMessage').style.display = 'none';
                }, 5000); // Hide success message after 5 seconds

                document.getElementById('registrationForm').reset();
            } else {
                // Failure: Display error message
                alert(`Error: ${responseData}`);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while submitting the form.');
        }
    }
});
