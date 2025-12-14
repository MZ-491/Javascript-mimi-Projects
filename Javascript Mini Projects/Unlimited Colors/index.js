const randomcolor = () =>{

    const randomnumber = '123456789ABCDEF'
    let hex = '#'
    for (let i = 0; i<6; i++){
        hex += randomnumber[Math.floor(Math.random() * 16)];
    }
    return hex
}

let intervalId;

const startGeneratingColor = function(){
        intervalId = setInterval(generateRandomColor , 1000);

        function generateRandomColor(){
            document.body.style.background = randomcolor()
}
}

const stopGeneratingColor = function(){
    clearInterval(intervalId)
    intervalId = null
}



document.getElementById('start').addEventListener( 'click', startGeneratingColor)
document.getElementById('stop').addEventListener( 'click', stopGeneratingColor)