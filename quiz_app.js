// Assume this code is running in a browser environment

const fetchDataAndManipulateDOM = () => {
    // Read the JSON file
    fetch('question.json')
      .then(response => response.json())
      .then(data => {
        // Parse the JSON data
        try {
            const questions = data;
  
            const questionsContainer=document.getElementById("set");
            const questionsdiv=document.querySelector(".questions");
            // const optionElement=document.getElementById("options");
            const submitElement=document.getElementById("Submit-button");
            const resultElement=document.getElementById("result");
            // const prevButton=document.querySelector(".prev-button");
            // const nextButton=document.querySelector(".next-button");

            // console.log(questionsdiv);

            function displayQuestion()
            {
                questions.forEach((data,index) =>{
                    const questionElement=document.createElement("div");
                    questionElement.innerHTML=`<p>${index+1}: ${data.question}</p>`;
                    const choicesElement = document.createElement("ul");
                    data.choices.forEach((choice,i) =>
                    {
                        const li=document.createElement("li");
                        li.innerHTML=`<input type="radio" name="choice${index}" value="${choice}">${choice}`;
                        choicesElement.appendChild(li);
                    });
                    questionElement.appendChild(choicesElement);
                    questionsContainer.appendChild(questionElement);
                });

            }

            function checkAnswer()
            {
                let score=0;
                questions.forEach((data,index) =>{
                    const selectedChoice= document.querySelector(`input[name="choice${index}"]:checked`);
                    if(selectedChoice)
                    {
                        if(selectedChoice.value==data.correctAnswer)
                        {
                            score++;
                        }
                    }
                });
                return score;

                // currentQuestion++;
                // if (currentQuestion < questions.length) {
                //     displayQuestion();
                // } else {
                //     showResult();
                // }
            }

            // function showResult(){
            //     questionElement.style.display="none";
            //     optionElement.style.display="none";
            //     submitElement.style.display="none";
            //     prevButton.style.display="none";
            //     nextButton.style.display="none";

            // function nextQuestion() {
            //     if (currentQuestion < questions.length-1) {
            //         currentQuestion++;
            //         displayQuestion();
            //     }
            // }

            // function previousQuestion() {
            //     if (currentQuestion > 0) {
            //         currentQuestion--;
            //         displayQuestion();
            //     }
            // }

            function showResult() {
                const score = checkAnswer();
                questionsdiv.style.display="none";
                const scorePercentage = (score / questions.length) * 100;

                const resultTitle = document.createElement("h1");
                resultTitle.innerHTML=`Result`;
                
                resultElement.appendChild(resultTitle);
                console.log(resultElement);

                if(scorePercentage<40)
                {
                    const li=document.createElement("div");
                    const spanElement = document.createElement('span');
                    spanElement.classList.add('highlight1');
                    spanElement.textContent = `${score}`;
                    li.innerHTML = `You Scored ${spanElement.outerHTML} out of ${questions.length}!`;
                    resultElement.appendChild(li);
                    
                }
                else
                {
                    const li=document.createElement("div");
                    const spanElement = document.createElement('span');
                    spanElement.classList.add('highlight2');
                    spanElement.textContent = `${score}`;
                    li.innerHTML = `You Scored ${spanElement.outerHTML} out of ${questions.length}!`;
                    resultElement.appendChild(li);
                }


            }
            displayQuestion();
            submitElement.addEventListener('click',showResult);

        } catch (jsonError) {
          console.error('Error parsing JSON:', jsonError);
        }
      })
      .catch(error => {
        console.error('Error fetching JSON:', error);
      });
  };
  
  // Call the function to fetch data and manipulate the DOM
  fetchDataAndManipulateDOM();
  