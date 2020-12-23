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
            display.textContent = ''
            break;
        case '=':
            display.textContent = eval(display.textContent)
            break;
        default:
            display.textContent += buttonText;
            break;
    }
}