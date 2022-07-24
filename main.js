let counter = 0;

let plusBtn = document.querySelector('.plus')
let minusBtn = document.querySelector('.minus')
let podhodBtn = document.querySelector('.podhod')
let zapisBtn = document.querySelector('.zapis')
let ostaokPodhodov = document.querySelector('.ostatok-podhodov')
let counterNode = document.querySelector('.counter')

let colPodhod = prompt('Введите количество подоходов')

plusBtn.addEventListener('click', function(){
    counter++
    counterNode.innerHTML = counter

})

minusBtn.addEventListener('click', function(){
    counter--
    counterNode.innerHTML = counter
})

podhodBtn.addEventListener('click', function(){
    let podhpd1 = counterNode.textContent
})

for (let i = 0; i < +colPodhod; i++ ){

    
}






