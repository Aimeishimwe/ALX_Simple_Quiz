// Function to check the user's answer
function checkAnswer() {
    // Define the correct answer as a string
    const correctAnswer = "4";
    
    // Get the selected answer (radio button that is checked)
    const userAnswer = document.querySelector('input[name="quiz"]:checked');
    
    // Get the feedback element
    const feedback = document.getElementById('feedback');
    
    // Check if an answer is selected
    if (userAnswer) {
        // Compare the selected answer's value with the correct answer
        if (userAnswer.value === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
            feedback.style.color = "green";
        } else {
            feedback.textContent = "That's incorrect. Try again!";
            feedback.style.color = "red";
        }
    } else {
        feedback.textContent = "Please select an answer!";
        feedback.style.color = "orange";
    }
}

// Add an event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
