const quizData = [
    {
        question: 'who are you ?',
        a: 'Front-end',
        b: 'Back-end',
        c: 'fullstack',
        d: 'database engineer',
        correct: 'c',
    }, {
        question: 'which language you will learn in 2023?',
        a: 'Javascript',
        b: 'Python',
        c: 'C',
        d: 'C++',
        correct: 'a',
    }, {
        question: 'what is your hobby?',
        a: 'video games',
        b: 'teenpatti',
        c: 'coding',
        d: 'reading books',
        correct: 'c',
    }, {
        question: 'who are you?',
        a: 'Machine',
        b: 'Bug',
        c: 'Human',
        d: 'idc',
        correct: 'b',
    }
];

const questionE1 = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('quiz-submit');
let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];

    questionE1.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}
     submitBtn.addEventListener('click', () => {
         currentQuiz ++;
         
         if (currentQuiz < quizData.length){
             loadQuiz();
         }else{ 
                alert("Congratulation Master , You finish the game ");
         }

     });
 
