let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let Value = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttontext = e.target.innerText;
        if (buttontext == 'C') {
            Value = "";
            screen.value = Value;
            }
        else if (buttontext == 'X') {
            buttontext = '*';
            Value += buttontext;
            screen.value = Value;
            }
        else if (buttontext == '=') {
            screen.value = eval(Value);
        }
        else {
            Value += buttontext;
            screen.value = Value;
        }

    })
}
