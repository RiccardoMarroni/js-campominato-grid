


function newgame(){
  const grid = document.getElementById('grid');
    grid.innerHTML;

    const newsquare = document.createElement('article')
    newsquare.classList.add('square')
    newsquare.addEventListener('click' , function(){
        newsquare.classList.toggle('clicked')
    })

    const spancontent = document.createElement('article')
    spancontent.append(index + 1)


    newsquare.appendChild(spancontent);
    grid.appendChild(newsquare)
}