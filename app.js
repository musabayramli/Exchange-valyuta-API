const curencyFirt = document.querySelector('#curencyFirt')
const curencySecond = document.querySelector('#curencySecond')
const count = document.querySelector('#count')
const equal = document.querySelector('#equal')
const excageRete = document.querySelector('.excageRete');


updateRate();


function updateRate(){
    fetch(`https://v6.exchangerate-api.com/v6/0f0ef791d09490b59db0ff74/latest/${curencyFirt.value}`
    ).then((res)=>res.json()).then((data)=>{
        const rate = data.conversion_rates[curencySecond.value];
        excageRete.textContent = `1 ${curencyFirt.value} = ${rate}  ${curencySecond.value}`
        equal.textContent= (count.value * rate).toFixed(2);
    });

}

curencyFirt.addEventListener('change',updateRate)
curencySecond.addEventListener('change',updateRate)
count.addEventListener('input',updateRate)