// Event to save data to local storage
document.getElementById("saveButton").addEventListener("click", () => {
    const nameInput = document.getElementById("name");
    const ageInput = document.getElementById("age");

    if (!nameInput || !ageInput) {
        console.error("The form elements do not exist.");
        return;
    }

    const name = nameInput.value.trim();
    const age = parseInt(ageInput.value);

    if (name && !isNaN(age)) {
        localStorage.setItem("userName", name);
        localStorage.setItem("userAge", age);
        displayData();
    } else {
        alert("Please enter a valid name and numerical age.");
    }
});

// Function to display the stored data
function displayData() {
    const name = localStorage.getItem("userName");
    const age = localStorage.getItem("userAge");
    const outputDiv = document.getElementById("output");
    if (!outputDiv) {
        console.error("Output element does not exist.");
        return;
    }
    if (name && age) {
        outputDiv.textContent = `Hello ${name}, you are ${age} years old.`;
    } else {
        outputDiv.textContent = "No data stored";
    }
}

// When loading the page, display the stored data
window.onload = displayData;

// Initialize interaction counter in session storage
if (!sessionStorage.getItem("interactionCount")) {
    sessionStorage.setItem("interactionCount", "0");
}

// Update interaction counter
function updateInteractionCount() {
    let count = parseInt(sessionStorage.getItem("interactionCount")) || 0;
    count++;
    sessionStorage.setItem("interactionCount", count);
    console.log(`Interactions in this session: ${count}`);
}

// Assign events to the counter
document.getElementById("saveButton").addEventListener("click", updateInteractionCount);
document.getElementById("clearButton").addEventListener("click", updateInteractionCount);

// Event to clean up data from local storage
document.getElementById("clearButton").addEventListener("click", () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("userAge");
    displayData();
});