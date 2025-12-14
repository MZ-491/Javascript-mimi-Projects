const buttons = document.querySelectorAll('.btn')

buttons.forEach( function (button){

    button.addEventListener('click', function(e){

        if(e.target.id === 'grey'){
            document.body.style.background = e.target.id
        }

        else if (e.target.id === 'white'){
            document.body.style.background = e.target.id
        }
        else if (e.target.id === 'blue'){
            document.body.style.background= e.target.id
        }
        else if (e.target.id === 'yellow'){
            document.body.style.background= e.target.id
        }
    })
})