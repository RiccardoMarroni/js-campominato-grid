
const mainGrid = document.querySelector('#grid');


const mainButton = document.querySelector('#btn');
console.log(mainButton)
mainButton.addEventListener('click', function() {
    this.classList.toggle('blue');
    document.getElementById("btn").disabled = true;
    for(let i = 1; i < 100; i++) {
    const newSquare = generateSquare(i);
    mainGrid.append(newSquare);
}
});

function generateSquare(number) {
    const newSquare = document.createElement('div');
    newSquare.classList.add('square');
    newSquare.innerHTML = `<span>${number}</span>`;

    newSquare.addEventListener('click', function() {
    this.classList.add('blue');
    });

    return newSquare;
};




// classe123


// document.quarySelector('button#play-button').addEventListener('click', function() {
//     const cellnumber = parseInt (document.quaryselector('select#play-select').value);
//     newgame (cellnumber)
// })


// function newgame(numberofsquares){
//   const grid = document.getElementById('grid');
//     grid.innerHTML;

//     for (let index = 0; index < numberofsquares; index++) {
//         const newsquare = document.createElement('article');
//         if (numberofsquares === 81){
//            newsquare.classList.add('square','medium');
//            else if (numberofsquares === 49){
//             newsquare.classList.add('square','hard');
//            }
//            else {
//             newsquare.classList.add('square');
//            }
//         }
    
//     }
    
//     newsquare.addEventListener('click' , function(){
//         newsquare.classList.toggle('clicked')
//     })

//     const spancontent = document.createElement('article')
//     spancontent.append(index + 1)


//     newsquare.appendChild(spancontent);
//     grid.appendChild(newsquare)
// }



// generare numero random fuori dall'array

const list = [1,2,3,5,6,8,10]
generateUniqueRandomNumber (1, 10, list)

function generateUniqueRandomNumber (min, max, blacklist){
    let isFound = false;
    let randomNumber;

    while(!isFound){

        if (!blacklist.includes(randomNumber)){
            isFound = true;
        }
    }

    return randomNumber;
}





function getRndInteger(mininum , maxinum) {
    return Math.floor(Math.random() * (maxinum - mininum+ 1) ) + min;
}

