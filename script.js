$(document).ready(function() {
    $('#taxForm').submit(function(e) {
        e.preventDefault(); // Prevent form submission
        
        // Perform tax calculation
        let grossIncome = parseFloat($('#grossIncome').val()) || 0;
        let extraIncome = parseFloat($('#extraIncome').val()) || 0;
        let deductions = parseFloat($('#deductions').val()) || 0;
        let ageGroup = $('#ageGroup').val();
        
        let taxRate = 0;
        if (ageGroup === '<40') {
            taxRate = 0.3;
        } else if (ageGroup === '40-59') {
            taxRate = 0.4;
        } else if (ageGroup === '60+') {
            taxRate = 0.1;
        }
        
        let taxableIncome = grossIncome + extraIncome - deductions;
        let taxAmount = 0;
        if (taxableIncome > 800000) {
            taxAmount = (taxableIncome - 800000) * taxRate;
        }
        
        // Prepare modal content
        let modalContent = `
            <p><strong>Gross Annual Income:</strong> ₹${grossIncome.toFixed(2)}</p>
            <p><strong>Extra Income:</strong> ₹${extraIncome.toFixed(2)}</p>
            <p><strong>Deductions:</strong> ₹${deductions.toFixed(2)}</p>
            <p><strong>Age Group:</strong> ${ageGroup}</p>
            <hr>
            <p><strong>Taxable Income:</strong> ₹${taxableIncome.toFixed(2)}</p>
            <p><strong>Tax Amount:</strong> ₹${taxAmount.toFixed(2)}</p>
        `;
        
        // Show modal with calculated values
        showModal(modalContent);
    });
    
    // Function to show modal with custom content
    function showModal(content) {
        let modal = `
            <div class="modal">
                <div class="modal-content">
                    <span class="close">&times;</span>
                    ${content}
                </div>
            </div>
        `;
        
        $('body').append(modal); // Append modal to the body
        
        // Close modal when clicking on the close button or outside the modal
        $('.close, .modal').click(function() {
            $('.modal').remove(); // Remove modal from the DOM
        });
    }
});
function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16); // Generate random hex color code
}

document.documentElement.style.setProperty('--random-color', getRandomColor()); // Set initial random color

setInterval(function() {
    document.documentElement.style.setProperty('--random-color', getRandomColor()); // Change color every 5 seconds
}, 5000);
