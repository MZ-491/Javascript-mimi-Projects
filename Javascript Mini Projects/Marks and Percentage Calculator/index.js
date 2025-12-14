const formEl = document.getElementById('input-container');
const resultEl = document.getElementById('result');

const calculate = (event) =>{
    const totalMarks = 400;
    event.preventDefault();

    const formdata = new FormData(formEl);
    const data = {};

    formdata.forEach((value, key)=>{
        data[key] = parseInt(value);
    });

    const obtainMarks = data.english + data.science + data.maths + data.history;
    const percentage =  Math.round((obtainMarks / totalMarks) * 100);
    resultEl.innerHTML =  `You have got ${obtainMarks} marks out of ${totalMarks} and your Percentage is ${percentage}%` ;
}