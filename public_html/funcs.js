// getting label variable
var label = document.getElementById('lbl');

// getting numbers variables
var num7 = document.getElementById('7');
var num8 = document.getElementById('8');
var num9 = document.getElementById('9');

var num4 = document.getElementById('4');
var num5 = document.getElementById('5');
var num6 = document.getElementById('6');

var num1 = document.getElementById('1');
var num2 = document.getElementById('2');
var num3 = document.getElementById('3');

// getting sympols variables
var minus = document.getElementById('minusSympol');
var plus = document.getElementById('plusSympol');
var equal = document.getElementById('equlaSympol');

// getting zero and comma variables 
var zero = document.getElementById('zero');
var point = document.getElementById('point');

// writing to label function
function writeToLabel(num) {
    return function () {
        label.innerHTML += num;
    };
}

// writing numbers to the label
num7.onclick = writeToLabel(7);
num8.onclick = writeToLabel(8);
num9.onclick = writeToLabel(9);

num4.onclick = writeToLabel(4);
num5.onclick = writeToLabel(5);
num6.onclick = writeToLabel(6);

num1.onclick = writeToLabel(1);
num2.onclick = writeToLabel(2);
num3.onclick = writeToLabel(3);

// writing sympols to the label
minus.onclick = writeToLabel('-');
plus.onclick = writeToLabel('+');

// writing zero and point to the label
zero.onclick = writeToLabel(0);
point.onclick = writeToLabel('.');

// calculating and writing result function        
function eq() {
    return function e() {
        // first and socend number 
        var firstNumber, socendNumber;
        var ledText = label.textContent.toString();
        for (i = 0; i < ledText.length; i++) {
            if ((ledText[i] === '+') || (ledText[i] === '-')) {
                firstNumber = ledText.substring(0, i);
                socendNumber = ledText.substring(i + 1, ledText.length);
                break;
            }
        }
        if (ledText[i] === '+') {
            if (isNaN(parseFloat(firstNumber) + parseFloat(socendNumber))){
                label.style.color = '#FF0000';
                label.style.fontSize = '26px';
                label.innerHTML = 'Please enter a correct expression';
            }
                
            else
                label.innerHTML = parseFloat(firstNumber) + parseFloat(socendNumber);
        } else {
            if (isNaN(parseFloat(firstNumber) - parseFloat(socendNumber))){
                label.style.color = '#FF0000';
                label.style.fontSize = '26px';
                label.innerHTML = 'Please enter a correct expression';
            }
                
            else
                label.innerHTML = parseFloat(firstNumber) - parseFloat(socendNumber);
        }
    };
}

// calling calculating function on pressing equal
equal.onclick = eq();


// Make the div element draggable
dragElement(document.getElementById('wholeCalculator'));

function dragElement(elmnt){
    var startupMouseX = 0, startupMouseY = 0, currentMouseX = 0, currentMouseY = 0;
    if (document.getElementById('wholeCalculator')){
        document.getElementById('wholeCalculator').onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }
}
function dragMouseDown(e){
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor at startup :
    startupMouseX = e.clientX;
    startupMouseY = e.clientY;
    doucument.onmouseup = closeDragElement;
    // call the function where ever the cursor move
    document.onmousemove = elementDrag;
}

function elementDrag(e){
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position 
    currentMouseX = startupMouseX - e.clientX;
    currentMouseY = startupMouseY - e.clientY;
    startupMouseX = e.clientX;
    startupMouseY = e.clientY;
    // set the element new position 
    elmnt.style.top = (elmnt.offsetTop - currentMouseX)+"px";
    elmnt.style.left = (elmnt.offsetLeft - currentMouseY)+"px";
}

function closeDragElement (){
    // stop moving when mouse button is realesed 
    document.onmouseup = null;
    document.onmousemove = null;
}

// this method for tests 
const calc = document.querySelector('.calculatorBorder');
calc.addEventListener('mousedown',(e)=>{
    
});

