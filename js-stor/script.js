//function 
function conver(id) {
    const valu = Number(document.getElementById(id).innerText);
    return valu;
}
// sum aray
let priceTotal = 0;
let items = 0;
let add = [];
//kichen area /////////////
const kitchen1 = document.getElementById('kitchen-btn1').addEventListener('click', function () {
    resul1 = conver('pric-btn1');
    priceTotal += resul1;
    items++;
    const history = {
        nam: 'K. Accessories',
        date: new Date().toLocaleString()
    }
    add.push(history);
    console.log(add)
})

const kitchen2 = document.getElementById('kitchen-btn2').addEventListener('click', function () {
    resul2 = conver('pric-btn2');

    priceTotal += resul2;
    items++;
    const history = {
        nam: 'k. Chamuj',
        date: new Date().toLocaleString()
    }
    add.push(history);
    console.log(add)
})

const kitchen3 = document.getElementById('kitchen-btn3').addEventListener('click', function () {
    resul3 = conver('pric-btn3');
    priceTotal += resul3;
    items++;
    const history = {
        nam: 'Home Cooker',
        date: new Date().toLocaleString(),

    }
    add.push(history);
})

// spartswear area
const kitchen4 = document.getElementById('kitchen-btn4').addEventListener('click', function () {
    resul4 = conver('pric-btn4');
    priceTotal += resul4;
    items++;
    const history = {
        nam: 'sports cap',
        date: new Date().toLocaleString(),

    }
    add.push(history);
})
const kitchen5 = document.getElementById('kitchen-btn5').addEventListener('click', function () {
    resul5 = conver('pric-btn5');
    priceTotal += resul5;
    items++;
    const history = {
        nam: 'Full Jesey set',
        date: new Date().toLocaleString(),

    }
    add.push(history);
})

const kitchen6 = document.getElementById('kitchen-btn6').addEventListener('click', function () {
    resul6 = conver('pric-btn6');
    priceTotal += resul6;
    items++;
    const history = {
        nam: 'Spots cates',
        date: new Date().toLocaleString(),

    }
    add.push(history);
})

//Furnitur area 

const kitchen7 = document.getElementById('kitchen-btn7').addEventListener('click', function () {
    resul7 = conver('pric-btn7');
    priceTotal += resul7;
    items++;
    const history = {
        nam: 'Single Relax Chair',
        date: new Date().toLocaleString(),

    }
    add.push(history);
})
const kitchen8 = document.getElementById('kitchen-btn8').addEventListener('click', function () {
    resul8 = conver('pric-btn8');
    priceTotal += resul8;
    items++;
    const history = {
        nam: 'Children play',
        date: new Date().toLocaleString(),

    }
    add.push(history);
})

const kitchen9 = document.getElementById('kitchen-btn9').addEventListener('click', function () {
    resul9 = conver('pric-btn9');
    priceTotal += resul9;
    items++;
    const history = {
        nam: 'Flexible sofa',
        date: new Date().toLocaleString(),

    }
    add.push(history);
})





///asite area and main function
const total = document.getElementById('aside-btn').addEventListener('click', function () {


    const hero = document.getElementById('hero-btn');

    const div = document.createElement('div');
 console.log(add)
    for (const ad of add) {
        div.innerHTML = `
 <div class=" bg-white p-2 m-2">
                <h1 class='text-blue-500'><span>Name:</span> ${ad.nam}</h1>
                <P>${ad.date}</P>
              </div>
`;
    }
    hero.appendChild(div);

add=[];
console.log(add)

    document.getElementById('quate-btn').innerText = items;
  let resud = document.getElementById('totaPrice').innerText = priceTotal;


})

document.getElementById('Apply').addEventListener('click',function(){
    const manm=parseInt( document.getElementById('copun-btn').value)
 if(manm == 2468){
     let munm= document.getElementById('totaPrice').innerText =priceTotal;
     
   if(munm>200){
      pay =munm *10/100;
      bill=munm-pay;
document.getElementById('totaPrice').innerText =bill;
   alert('Thank 🧡🧡, you get 10% discund in this poduct,Next time again come my onlie shope');
   }
   else{
    alert('pleas Purchase above 200$, than you take discunt 10%');
   }
 }
 else{
    alert('cupon number is wrong pleas type 2468');
 }
})
document.getElementById('marker').addEventListener('mouseenter', function(){
  document.getElementById('bono').style.display='block';
})
document.getElementById('marker').addEventListener('mouseout', function(){
  document.getElementById('bono').style.display='none';
})


