const input = document.getElementById('input');
const numberLetter = document.getElementById('number');

class counter{

    constructor(){

        
        this.addEventInput();
    }

    addEventInput(){

        input.addEventListener('input', this.letterCounter);
    }
    letterCounter(ev){

        this.string = ev.srcElement.value;
        numberLetter.innerHTML = `Letter Count: ${this.string.length}`;
    }
}

function startCounter() {
    
    this.counter = new counter();
}