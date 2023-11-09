# Projects

Hi, This is my first Development project. It is a simple Quiz app which takes questions,options/correct answers from a client(one who wants to conduct the quiz) and provides a web interface for the candidate. It displays the score after submitting the quiz. 


Workflow:

1.Client enters his/her questions along with the options and its correct answer in an excel file.
2.We will feed this excel file to pilot.py script. It will basically convert questions/options/answer(which is in excel) into JSON format.
3.question.json file which we obtained from previous step is fed to javascript file(quiz_app.js)
4.quiz_app file will fetch the question/options/answers and store it into an object variable.
5.Finally, we will create  functionto display questions/options/answer in the browser and also calculate the final score of the candidate.
6.If the Candidate result is less than 40%, score will be displayed in red or else in green.






