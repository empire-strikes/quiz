document.addEventListener('DOMContentLoaded', async () => {
    const quizContainer = document.getElementById('quiz-container');
    
    // Fetch questions from the repository
    const response = await fetch('questions.json');
    const questions = await response.json();
    
    // Render questions
    questions.forEach((question, index) => {
        const questionElement = document.createElement('div');
        questionElement.innerHTML = `
            <p>${index + 1}. ${question.question}</p>
            ${question.choices.map((choice, i) => `
                <label>
                    <input type="radio" name="question${index}" value="${i}">
                    ${choice}
                </label>
            `).join('')}
        `;
        quizContainer.appendChild(questionElement);
    });
});
