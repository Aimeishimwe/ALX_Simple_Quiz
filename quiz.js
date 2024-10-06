// Function to check the user's answer
function checkAnswer() {
    // Declare the correct answer
    const correctAnswer = "4";
    
    // Retrieve the user's answer by selecting the checked radio button
    const userAnswerElement = document.querySelector('input[name="quiz"]:checked');

    // Check if the user has selected an answer
    if (userAnswerElement) {
        // Get the value of the selected answer
        const userAnswer = userAnswerElement.value; // Use userAnswerElement instead

        // Compare the user's answer with the correct answer
        if (userAnswer === correctAnswer) {
            // If correct, display a success message
            document.getElementById("feedback").textContent = "Correct! Well done.";
        } else {
            // If incorrect, display an error message
            document.getElementById("feedback").textContent = "That's incorrect. Try again!";
        }
    } else {
        // If no answer is selected, prompt the user to select one
        document.getElementById("feedback").textContent = "Please select an answer.";
    }
}

// Add event listener to the "Submit Answer" button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
