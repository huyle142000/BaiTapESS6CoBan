let calcularAverage = (...markLists) => {
    let sum = 0;
    let avarage = 0;
    for (let markList of markLists) {
        for (let values of markList) {
            sum += Number(values.value)
        }
        // console.log(sum, markList.length)
        return avarage = (sum / Number(markList.length)).toFixed(2);
    }
}

let form1 = document.querySelectorAll('.form1');
let form2 = document.querySelectorAll('.form2');
let btnKhoi1 = document.getElementById('btnKhoi1');
let btnKhoi2 = document.getElementById('btnKhoi2');
let tbKhoi1 = document.getElementById('tbKhoi1');
let tbKhoi2 = document.getElementById('tbKhoi2');
//form1
btnKhoi1.addEventListener('click', function (e) {
    tbKhoi1.innerHTML = calcularAverage(form1)
})
//form2
btnKhoi2.addEventListener('click', function (e) {
    tbKhoi2.innerHTML = calcularAverage(form2)
})

