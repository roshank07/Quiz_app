I am excited to share details about my inaugural development project, a simple Quiz app designed to streamline the quiz-conducting process. The application serves as an interface for both the client, who inputs questions and correct answers, and the candidates, who interact with the quiz and receive scores upon completion.

Here's a brief overview of the workflow:

Client Input:
The client enters questions, options, and correct answers into an Excel file.

Data Transformation:
A Python script (pilot.py) is employed to convert the Excel-based questions, options, and answers into a JSON format.

JSON Processing:
The resulting JSON file (question.json) is then utilized by a JavaScript file (quiz_app.js).

Data Retrieval:
The JavaScript file (quiz_app.js) fetches the questions, options, and answers from the JSON file, storing them into an object variable.

User Interface:
A function is created to display questions, options, and answers in the browser, providing an interactive experience for candidates.

Scoring System:
The application calculates the final score of the candidate. If the result is less than 40%, the score is displayed in red; otherwise, it is displayed in green.

Thanks!!!





