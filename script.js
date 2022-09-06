let c = true;

function loading() {
    alert('Loading weather report...');
}

function acceptCookies() { 
    document.querySelector('#cookies').remove();
}


// Convert daily highs
function conversion() {
    let inputVals = document.querySelectorAll('.high');
    if (c) {
        for (let i = 0; i < inputVals.length; i++) {
            let n = parseInt(inputVals[i].innerText, 10);
            n = Math.round((n * 1.8) + 32);
            inputVals[i].innerText = n + '°';
        }
        lowConversion();
    } else {
        for (let i = 0; i < inputVals.length; i++) {
            let n = parseInt(inputVals[i].innerText, 10);
            n = Math.round((n - 32) / 1.8);
            inputVals[i].innerText = n + '°';
        }
        lowConversion();
    }
};

//Convert daily lows
function lowConversion() {
    let inputVals = document.querySelectorAll('.low');
    if (c) { 
        for (let i = 0; i < inputVals.length; i++) {
            let n = parseInt(inputVals[i].innerText, 10);
            n = Math.round((n * 1.8) + 32);
            inputVals[i].innerText = n + '°';
            
        }
        c = false;
    } else {
        for (let i = 0; i < inputVals.length; i++) {
            let n = parseInt(inputVals[i].innerText, 10);
            n = Math.round((n - 32) / 1.8);
            inputVals[i].innerText = n + '°';
            
        }
        c = true;
    }
};