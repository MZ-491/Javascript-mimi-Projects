const getcolor = () => {

    const randomnumber = Math.floor(Math.random() * 16777215)
    const randomcode = "#" + randomnumber.toString(16)

    document.body.style.background = randomcode
    document.querySelector('#randomcode').innerHTML = randomcode
    navigator.clipboard.writeText = randomcode
}


document.querySelector('.btn').addEventListener( 'click', 
    getcolor
)

getcolor()