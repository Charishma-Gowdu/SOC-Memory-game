document.addEventListener('DOMContentLoaded', (event) => {
    const buttons = document.querySelectorAll('.box,.wide');
    const display = document.getElementById('display');
    let lastClicked = false;
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const textButton = button.textContent;
            if(textButton === 'AC'){
                display.textContent = '';
            }
            else if(textButton === 'DE'){
                display.textContent = display.textContent.slice(0,-1);
            }
            else if(textButton === '='){
                try{
//The eval() function evaluates a string of JavaScript code and executes it. 

                    display.textContent = eval(display.textContent) || '';
                }catch{
                    display.textContent = 'Error';
                }
                lastClicked = true;
            }
            else{
                if(lastClicked && !isNaN(textButton)){
                    display.textContent = textButton;
                }
                else{
                display.textContent += textButton;
                }
                lastClicked = false;
            }
            });
        });
    });

