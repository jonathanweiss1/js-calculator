const grid = document.querySelector('#grid');
const display = document.querySelector('#display');

grid.addEventListener('click', clicked);

function clicked(e){
    
    //check if click is a button
    if(e.target == e.currentTarget){
        return;
    }
    //stop looking for other event listeners on this event
    e.stopPropagation();
    //get clicked button
    var buttonText = e.target.textContent

    switch(buttonText){
        //delete current input
        case 'CE':
            display.firstChild.textContent = ''
            break;
        case '=':
            display.firstChild.textContent = eval(display.firstChild.textContent)
            break;
        default:
            display.firstChild.textContent += buttonText;
            break;
    }
}