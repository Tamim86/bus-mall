'use strict'

let leftImage = document.getElementById('left-image');
let midImage = document.getElementById('middle-image');
let rightImage = document.getElementById('right-image');
let leftIndex;
let midIndex;
let rightIndex;
let favourit =0;
let picks = 25;


function product(name,imgPath){
    this.productName=name;
    this.source= imgPath;
    this.vote=0;
    product.items.push(this);
}
product.items=[];
new product('bags', 'images/lab 11/bag.jpg');
new product('banana', 'images/lab 11/banana.jpg');
new product('toilet stand', 'images/lab 11/bathroom.jpg');
new product('boots','images/lab 11/boots.jpg');
new product('breakfast machine', 'images/lab 11/breakfast.jpg');
new product('bubble gum','images/lab 11/bubblegum.jpg');
new product('chair','images/lab 11/chair.jpg');
new product('cthulhu','images/lab 11/cthulhu.jpg');
new product('dog-duck','images/lab 11/dog-duck.jpg');
new product('dragon-meat','images/lab 11/dragon.jpg');
new product('pen','images/lab 11/pen.jpg');
new product('pet-sweep','images/lab 11/pet-sweep.jpg');
new product('scissors','images/lab 11/scissors.jpg');
new product('shark-sleep','images/lab 11/shark.jpg');
new product('sweep','images/lab 11/sweep.png');
new product('tauntaun','images/lab 11/tauntaun.jpg');
new product('unicorn','images/lab 11/unicorn.jpg');
new product('usb','images/lab 11/usb.gif');
new product('water-can','images/lab 11/water-can.jpg');
new product('wine-glass', 'images/lab 11/wine-glass.jpg');

console.log(product.items);
function randImage(){
    let rand = Math.floor(Math.random()*product.items.length);
    return rand;

}



function display3Images(){
    leftIndex=randImage();
    midIndex=randImage();
    rightIndex=randImage();

    while(rightIndex===midIndex || leftIndex===midIndex){
        midIndex=randImage();
        if(rightIndex===leftIndex){
            leftIndex=randImage();
        }
    }
    rightImage.src = product.items[rightIndex].source;
    
    leftImage.src = product.items[leftIndex].source;
    midImage.src = product.items[midIndex].source;
    
}

display3Images();


leftImage.addEventListener('click', choosing);
rightImage.addEventListener('click', choosing);
midImage.addEventListener('click', choosing);
 function choosing(event){
    //  console.log(event.target.id);
    
    favourit++;
    if(picks>=favourit){
        if(event.target.id==='left-image'){
            product.items[leftIndex].vote++;
            console.log(product.items);
        }else if(event.target.id==='right-image'){
            product.items[rightIndex].vote++;

        }else if(event.target.id==='middle-image'){
            product.items[midIndex].vote++;
        }
    

        display3Images()
    }else{ 
      clickDisplay();
      leftImage.removeEventListener('click', choosing);
      midImage.removeEventListener('click', choosing);
      rightImage.removeEventListener('click', choosing);
    }
 }  

 function clickDisplay(){
    let btn = document.getElementById('btn');
    let favList = document.getElementById('picks');
    for(let i = 0 ; i <product.items.length; i++ ){
        let li = document.createElement('li');
        favList.appendChild(li);
        li.textContent = `${product.items[i].productName} has ${product.items[i].vote} Votes`;

    }
 }


//choosing(event);



//     for(let i=0; i<=picks;i++){
//         favourit++
//         if(event.target.id === 'leftImage'){
//             product.items[i].vote++;
//         }else if(event.target.id === 'rightImage'){
//             product.items[i].vote++;
//         }else if(event.target.id==='midImage'){
//             product.items[i].vote++;
//         }
//     }
// }
//function clockToShow(){
    // let btn = document.getElementById('btn');
    // let favList = document.getElementById('picks');
    // for(let i = 0 ; i <product.items.length; i++ ){
    //     let li = document.createElement('li');
    //     favourit.appendChild(li);
    //     li.textContent = `${product.items[i].productName} has ${productName.items[i].votes} Votes`;
//     }
// }