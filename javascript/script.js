document.quarySelector('button#play-button').addEventListener('click', function() {
    const cellnumber = parseInt (document.quaryselector('select#play-select').value);
    newgame (cellnumber)
})


function newgame(numberofsquares){
  const grid = document.getElementById('grid');
    grid.innerHTML;

    for (let index = 0; index < numberofsquares; index++) {
        const newsquare = document.createElement('article');
        if (numberofsquares === 81){
           newsquare.classList.add('square','medium');
           else if (numberofsquares === 49){
            newsquare.classList.add('square','hard');
           }
           else {
            newsquare.classList.add('square');
           }
        }
        
    }
    
    newsquare.addEventListener('click' , function(){
        newsquare.classList.toggle('clicked')
    })

    const spancontent = document.createElement('article')
    spancontent.append(index + 1)


    newsquare.appendChild(spancontent);
    grid.appendChild(newsquare)
}