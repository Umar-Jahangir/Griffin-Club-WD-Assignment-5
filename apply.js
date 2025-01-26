document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("application-form");
    const submitButton = document.getElementById("submit-button");
    const output = document.getElementById("output");

    submitButton.addEventListener("click", function () {
        // Accepting data
        const name = document.getElementById("name").value;
        const year = document.getElementById("year").value;
        const branch = document.getElementById("branch").value;
        const domain = document.getElementById("domain").value;

        //empty form warning
        if (!name || !year || !branch || !domain) {
            alert("Please fill out all the details!");
            return;
        }

        // Displaying submitted data
        output.innerHTML = `
            <h3>Submitted Data:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Year:</strong> ${year}</p>
            <p><strong>Branch:</strong> ${branch}</p>
            <p><strong>Domain:</strong> ${domain}</p>
        `;

        //store data in localStorage is optional
        const applicationData = { name, year, branch, domain };
        localStorage.setItem("applicationData", JSON.stringify(applicationData));

        // Reset the form
        form.reset();
    });
});
