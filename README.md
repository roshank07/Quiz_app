# Quiz App 

Welcome to my first development project! This Quiz app simplifies the process of conducting quizzes by providing a user-friendly interface for both the quiz creator and the candidates. The app displays scores upon completion and features an intuitive workflow.

## Workflow

1. **Client Input:**
   - The client enters questions, options, and correct answers into an Excel file.

2. **Data Transformation:**
   - A Python script (`pilot.py`) converts the Excel-based questions, options, and answers into a JSON format.

3. **JSON Processing:**
   - The resulting JSON file (`question.json`) is utilized by a JavaScript file (`quiz_app.js`).

4. **Data Retrieval:**
   - The JavaScript file fetches the questions, options, and answers from the JSON file, storing them into an object variable.

5. **User Interface:**
   - A function is created to display questions, options, and answers in the browser, providing an interactive experience for candidates.

6. **Scoring System:**
   - The application calculates the final score of the candidate. If the result is less than 40%, the score is displayed in red; otherwise, it is displayed in green.

## Prerequisite

1. Install VS code and respective extensions for Javascripts,HTML and CSS. You also need to install live server to host website locally 
2. You need to install Python library like pandas and openpyxl.

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/roshank07/Quiz_app.git
2. Run the Python script to transform Excel data. Change the excel file name if needed.

3. Open the HTML file using live server to start the quiz. 
