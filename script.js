const result = document.getElementById('result');
const image = document.getElementById('image');
const answerInput = document.getElementById('answerInput');
const nextBtn = document.getElementById('nextBtn');
const restartBtn = document.getElementById('restartBtn');

const items = [
    {
        image: './images/cat.png',
        answers: ['cat', 'kitty']
    },
    {
        image: './images/dog.jpeg',
        answers: ['dog']
    },
    {
        image: './images/tree.png',
        answers: ['tree', 'scape']
    },
    {
        image: './images/laptop.webp',
        answers: ['laptop', 'computer']
    },
    {
        image: './images/bird.png',
        answers: ['bird', 'birds']
    }
];

let change = 0;
let points = 0;

window.addEventListener('load', () => {
    restartGame();
});

nextBtn.addEventListener('click', () => {
    checkAnswer();
});

restartBtn.addEventListener('click', () => {
    restartGame();
});

function checkAnswer(){

    let answer = answerInput.value;

    if(items[change].answers.includes(answer)){
        points ++;
    }

    if(change < items.length-1){
        change ++;
        image.src = items[change].image;
    } else{
        result.classList.remove('hide');
        result.innerText = `Broj osvojenih bodova je: ${points}.`;
    }
    
}

function restartGame(){
    change = 0;
    points = 0;
    result.classList.add('hide');
    image.src = items[0].image;
}