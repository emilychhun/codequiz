     //grab the element by element ID 
     
     let boxStartEl = document.getElementById("container1");
     let boxQuestionEl = document.getElementById("body-question");
   
     //assign array for questions 
      let QuestionStart = 0
      let arrayQuestions
      let beganQuiz = function() {
        
      //add classes to show/hide start and quiz screen
        boxStartEl.classList.add('hide');
        boxQuestionEl.classList.remove('hide');
        boxStartEl.classList.remove('show');
        boxQuestionEl.classList.add('show');
       
        //make random order question
        arrayQuestions = questions.sort(() => Math.random() - 0.5)
        setTime()
        setQuestion()
      }
    
      //grab the element by CSS selector
      let clickStartEl = document.querySelector("#startquiz");

      //on start click, began quiz
       clickStartEl.addEventListener("click", beganQuiz)

       //create array for questions/answer.
  
     let questions = [
        { q: 'In HTML, use the __________ property/attribute to set a default value that displays in an input box when the form is initially displayed.', 
          a: '2. Value', 
          choices: [{choice: '1. Default'}, {choice: '2. Value'}, {choice: '3. Form'}, {choice: '4. None of the above'}]
        },
        { q: 'How can you add a comment in a JavaScript?', 
          a: '3. //This is a comment', 
          choices: [{choice: '1. <h1>'}, {choice: '2. <js>'}, {choice: '3. //This is a comment'}, {choice: '4. <head>'}]
        },
        { q: 'A named elemet in a JavaScript program that is used to store and retrieve data is a __________', 
          a: '3. Variable', 
          choices: [{choice: '1. Method'}, {choice: '2. assignment operator'}, {choice: '3. Variable'}, {choice: '4. String'}]
        },
        { q: 'What syntax would call a function?', 
          a: '4. function()', 
          choices: [{choice: '1. var function'}, {choice: '2. function'}, {choice: '3. call function'}, {choice: '4. function()'}]
        },
        { q: 'When did javascript first appear?', 
          a: '1. 1995', 
          choices: [{choice: '1. 1995'}, {choice: '2. Roaring twenties'}, {choice: '3. 2005'}, {choice: '4. 2000'}]
        },
        { q: 'Inside which HTML element do we put the JavaScript?', 
          a: '3. <script>', 
          choices: [{choice: '1. <javscript>'}, {choice: '2. <js>'}, {choice: '3. <script>'}, {choice: '4. <scripting'}]
        },
        { q: 'Alert(message), close() and reset() are JavaScript:', 
          a: '2. Methods', 
          choices: [{choice: '1. Objects'}, {choice: '2. Methods'}, {choice: '3. Properties'}, {choice: '4. Commands'}]
        },
      ];
     
     //organize questions/answers and show answer
    let showQuestion = function(index) {
        questionEl.innerText = index.q
        for (let i = 0; i < index.choices.length; i++) {
        let answerbutton = document.createElement('button')
            answerbutton.innerText = index.choices[i].choice
            answerbutton.classList.add('btn')
            answerbuttonsEl.appendChild(answerbutton)
            answerbutton.addEventListener("click", answerGrade)
            answerbutton.classList.add('answerbtn')
             }
        };
    //show correct if answe correct
       let answerRight = function() {
        if (rightEl.className = "hide") {
            rightEl.classList.remove("hide")
            sorryEl.classList.remove("banner")
            sorryEl.classList.add("hide")
            rightEl.classList.add("banner")
           }
        }  
    //show sorry, try again if answer incorrect.
    let answerWrong = function() {
        if (sorryEl.className = "hide") {
            rightEl.classList.remove("banner")
            rightEl.classList.add("hide")
            sorryEl.classList.remove("hide")
            sorryEl.classList.add("banner")
         
        }
    }

    //set up reward point for correct answers and reduce point and time for incorrect answers.
    let answerGrade = function(event) {
        let selectedanswer = event.target
            if (arrayQuestions[QuestionStart].a === selectedanswer.innerText){
                answerRight()
                score = score + 5
            }

            else {
              answerWrong()
              score = score - 1;
              timeleft = timeleft - 3;
          };

        //go to next question, check if there is more questions
          QuestionStart++
            if  (arrayQuestions.length > QuestionStart + 1) {
                setQuestion()
            }   
            else {
               gameover = "true";
               showScore();
                }
    }
       //questions/answers element
       let questionEl = document.getElementById("test")
       let answerbuttonsEl = document.getElementById("answer-buttons")
       let timerEl = document.querySelector("#timer");
       let score = 0;
       let timeleft;
       let gameover
       timerEl.innerText = 0;
     
     //every second, check if game-over is true, or if there is time left. Start time at 30. 
     let setTime = function () {
        timeleft = 30;

    let timercheck = setInterval(function() {
        timerEl.innerText = timeleft;
        timeleft--

        if (gameover) {
            clearInterval(timercheck)
        }
       
        if (timeleft < 0) {
            showScore()
            timerEl.innerText = 0
            clearInterval(timercheck)
        }

        }, 1000)
    }

    //set next question for quiz
    let setQuestion = function() {
        resetAnswers()
        showQuestion(arrayQuestions[QuestionStart])
    }

    //remove answer buttons
    let resetAnswers = function() {
        while (answerbuttonsEl.firstChild) {
            answerbuttonsEl.removeChild(answerbuttonsEl.firstChild)
        };
    };
    
    let boxEndEl = document.getElementById("container2")
     

    //Display total score screen at end of game
    let showScore = function () {
        boxQuestionEl.classList.add("hide");
        boxEndEl.classList.remove("hide");
        boxEndEl.classList.add("show");

        var scoreDisplay = document.createElement("p");
        scoreDisplay.innerText = ("Your final score is " + score + "!");
        boxScoreEl.appendChild(scoreDisplay);
    }       
     
    let rightEl = document.getElementById("Right")
    let sorryEl = document.getElementById("Sorry")
    let boxScoreEl = document.getElementById("score")
    let boxHighScoresEl = document.getElementById("container3")
        
    //if go back button is hit on high score page
        let containerStart = function () {
            boxStartEl.classList.remove("hide")
            boxStartEl.classList.add("show")
            boxHighScoresEl.classList.add("hide")
            boxHighScoresEl.classList.remove("show")
            boxScoreEl.removeChild(boxScoreEl.lastChild)
            QuestionStart = 0
            gameover = ""
            timerEl.textContent = 0 
            score = 0
    
            if (rightEl.className = "show") {
                rightEl.classList.remove("show");
                rightEl.classList.add("hide")
            }
            if (sorryEl.className = "show") {
                sorryEl.classList.remove("show");
                sorryEl.classList.add("hide");
            }
        }
        let formInitials = document.getElementById("initials-form")
     
       formInitials.reset();
      
      
       // Array score
       let btnClearScoresEl = document.querySelector("#clear-high-scores")
       let ViewScoreEl = document.getElementById("your-scores")
       let btnGoBackEl = document.querySelector("#restart")
       let listScoreEl = document.getElementById("high-score-list")
       let HighScores = [];
    

    
        //create high score values
    let createHighScore = function(event) { 
        event.preventDefault() 
        let initials = document.querySelector("#initials").value;
        if (!initials) {
          alert("Enter your intials!");
          return;
        }

     let HighScore = {
      initials: initials,
      score: score
      } 
      //push and sort scores
      HighScores.push(HighScore);
      HighScores.sort((a, b) => {return b.score-a.score});

    //clear visibile list to resort
    while (listScoreEl.firstChild) {
       listScoreEl.removeChild(listScoreEl.firstChild)
    }
    //create elements in order of high scores
    for (let i = 0; i < HighScores.length; i++) {
      let highscoreEl = document.createElement("li");
      highscoreEl.ClassName = "high-score";
      highscoreEl.innerHTML = HighScores[i].initials + " - " + HighScores[i].score;
      listScoreEl.appendChild(highscoreEl);
    }

      savePoint();
      showyourPoint();

    }
    //save high score
    let savePoint = function () {
        localStorage.setItem("HighScores", JSON.stringify(HighScores))
            
    }

    //organize score
    let viweYourScore = function () {
        let LoadedHighScores = localStorage.getItem("HighScores")
            if (!LoadedHighScores) {
            return false;
        }

        LoadedHighScores = JSON.parse(LoadedHighScores);
        LoadedHighScores.sort((a, b) => {return b.score-a.score})
 

        for (let i = 0; i < LoadedHighScores.length; i++) {
            let highscoreEl = document.createElement("li");
            highscoreEl.ClassName = "high-score";
            highscoreEl.innerText = LoadedHighScores[i].initials + " - " + LoadedHighScores[i].score;
            listScoreEl.appendChild(highscoreEl);

            HighScores.push(LoadedHighScores[i]);
            
        }
    }  

    //show score when intiials entered
    let showyourPoint = function() {

        boxHighScoresEl.classList.remove("hide");
        boxHighScoresEl.classList.add("show");
        gameover = "true"

        if (boxEndEl.className = "show") {
            boxEndEl.classList.remove("show");
            boxEndEl.classList.add("hide");
            }
        if (boxStartEl.className = "show") {
            boxStartEl.classList.remove("show");
            boxStartEl.classList.add("hide");
            }
            
        if (boxQuestionEl.className = "show") {
            boxQuestionEl.classList.remove("show");
            boxQuestionEl.classList.add("hide");
            }

        if (rightEl.className = "show") {
            rightEl.classList.remove("show");
            rightEl.classList.add("hide");
        }

        if (sorryEl.className = "show") {
            sorryEl.classList.remove("show");
            sorryEl.classList.add("hide");
            }
        
    }
    //reset score
    let resetScores = function () {
        HighScores = [];

        while (listScoreEl.firstChild) {
            listScoreEl.removeChild(listScoreEl.firstChild);
        }

        localStorage.clear(HighScores);

    } 

    viweYourScore()
      //set up btn
      formInitials.addEventListener("submit", createHighScore)
      btnClearScoresEl.addEventListener("click", resetScores)
      ViewScoreEl.addEventListener("click", showyourPoint)
      btnGoBackEl.addEventListener("click", containerStart)