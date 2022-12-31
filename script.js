const {body} = document;

function changeBackground(number) {
    // Check of backgroun already showing
    let previousBackdround;
    if(body.className) {
        previousBackdround = body.className;
    }
    // Reset css class body
    body.className = '';
    switch (number) {
        case '1':
            return (previousBackdround === 'background-1' ? false : body.classList.add('background-1'));
        case '2':
            return (previousBackdround === 'background-2' ? false : body.classList.add('background-2')); 
        case '3':
            return (previousBackdround === 'background-3' ? false : body.classList.add('background-3'));
        default:
        break    
    }
}