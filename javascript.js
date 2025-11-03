/**
 * Form Validation and Submission Handler
 * Handles form submission, data collection, and field clearing
 */

// Select form element and all input fields
const formElement = document.querySelector("form");
const formInputs = document.querySelectorAll("form input");

/**
 * Handle form submission
 * Prevents default form submission, collects data, logs to console, and clears fields
 */
formElement.addEventListener("submit", (event) => {
    // Prevent default form submission behavior (page reload)
    event.preventDefault();
    
    // Array to store collected form data
    const formData = [];
    
    // Collect values from all input fields
    formInputs.forEach((input) => {
        formData.push(input.value);
    });

    // Clear all input fields after data collection
    formInputs.forEach((input) => {
        const inputType = input.type.toLowerCase();
        
        // Clear text-based input fields
        if (inputType === "text" || 
            inputType === "password" || 
            inputType === "email" || 
            inputType === "number") {
            input.value = "";
        }
    });

    // Handle textarea separately
    const textareaElement = document.querySelector("form textarea");
    formData.push(textareaElement.value);
    textareaElement.value = "";

    // Log collected data to console for debugging
    console.log("Form Data Submitted:", formData);
    
    // Optional: Show success message to user
    alert("Form submitted successfully! Check the console for details.");
});