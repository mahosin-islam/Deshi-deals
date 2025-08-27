const arra = [];
let totalAmount = 0;
const Kitchen1 = document.getElementById('kitchen-btn1');

Kitchen1.addEventListener('click', function () {
    totalAmount = Number(this.value);
console.log(totalAmount)
    const add = {
        nam: 'K. Accesabe',
        price: 100,
    };
    arra.push(add);
})

const Kitchen2 = document.getElementById('kitchen-btn2');

Kitchen2.addEventListener('click', function () {
    totalAmount += Number(this.value);
    console.log(totalAmount)
    const add = {
        nam: ' Accessories',
        price: 200,
    };
    arra.push(add);
})

const Kitchen3 = document.getElementById('kitchen-btn3');

Kitchen3.addEventListener('click', function () {
    totalAmount += Number(this.value);
    console.log(totalAmount)
    const add = {
        nam: ' Home',
        price: 300,
    };
    arra.push(add);
})
const resum=document.getElementById('card-btn');
const creat = document.getElementById('hero-btn');
document.getElementById('aside-btn').addEventListener('click', function () {
const p=document.createElement('p');
p.innerText= "Total" + totalAmount +"tk";

resum.appendChild(p);
    const div = document.createElement('div');
    for (const add of arra) {
        div.innerHTML = `
                    <div >
              <h2>Total quntity <span id="total-quntity">${add.nam}</span>item</h2>
              <h2>Total price <span id="total-price">${add.price}</span>tk</h2>
            </div>
        `
    }
    creat.appendChild(div);
})  
