document.getElementById('tourForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const companyName = "Event Horizon"
    const destination = document.getElementById('destination').value;
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const boarding = document.getElementById('boarding').value;
    const contact = document.getElementById('contact').value;

    // Construct receipt message
    const receiptMessage = `
        
        Company : ${companyName}
        Destination: ${destination}
        Name: ${name}
        Date: ${date}
        Time: ${time}
        Boarding Location: ${boarding}
        Contact Details: ${contact}
    `;
    const receiptWindow = window.open('', 'Receipt', 'width=600,height=400');
    receiptWindow.document.body.innerHTML = `<pre>${receiptMessage}</pre>`;
});