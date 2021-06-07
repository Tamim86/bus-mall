'use strict'
let sectionImg = document.getElementById('container');
let leftImage = document.getElementById('left-image');
let midImage = document.getElementById('middle-image');
let rightImage = document.getElementById('right-image');
let leftIndex;
let midIndex;
let rightIndex;
let favourit =0;
let picks = 25;
let arrOfNames=[];
let arrOfVotes=[];
let arrOfSeen=[];

function product(name,imgPath){
    this.productName=name;
    this.source= imgPath;
    this.vote=0;
    this.appear=0;
    product.items.push(this);
    arrOfNames.push(this.productName);
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

let noReapeat = [];


function display3Images(){
    
    leftIndex=randImage();
    midIndex=randImage();
    rightIndex=randImage();

    while(rightIndex===midIndex || leftIndex===midIndex || rightIndex===leftIndex){
        midIndex=randImage();
        leftIndex=randImage();
       
       
        
    }
    noReapeat.push([leftIndex,rightIndex,midIndex]);
    console.log(noReapeat);
    rightImage.src = product.items[rightIndex].source;
    product.items[rightIndex].appear++;
    leftImage.src = product.items[leftIndex].source;
    product.items[leftIndex].appear++;
    midImage.src = product.items[midIndex].source;
    product.items[midIndex].appear++;
  
        

        
    }

  


display3Images();
function changeRepeat(){
    for(let i=0;i<noReapeat.length;i++){
        if(noReapeat[i+1].includes(noReapeat[i])){
            noReapeat[i+1]=randImage();

        }
    }
}

sectionImg.addEventListener('click', choosing);
// leftImage.addEventListener('click', choosing);
// rightImage.addEventListener('click', choosing);
// midImage.addEventListener('click', choosing);

let btnEl;
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
      btnEl=document.getElementById('btn')
      btnEl.addEventListener('click', handleshowing);
      sectionImg.removeEventListener('click', choosing);
    //   leftImage.removeEventListener('click', choosing);
    //   midImage.removeEventListener('click', choosing);
    //   rightImage.removeEventListener('click', choosing);

    }
 }  
 
function handleshowing(){
    clickDisplay();
    chart1();
    btnEl.removeEventListener('click',handleshowing);
}
 
 function clickDisplay(){
    
    let favList = document.getElementById('picks');
    for(let i = 0 ; i <product.items.length; i++ ){
        arrOfVotes.push(product.items[i].vote);
        arrOfSeen.push(product.items[i].appear);
        let li = document.createElement('li');
        favList.appendChild(li);
        li.textContent = `${product.items[i].productName} has ${product.items[i].vote} Votes, and been shown ${product.items[i].appear}`;
    }        
    }
   



function chart1(){
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: arrOfNames,
        datasets: [{
            label: '# of Votes',
            data: arrOfVotes,
            backgroundColor: [
                
                'rgba(255, 159, 64, 0.5)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            
            borderWidth: 3
        },
        {
            label: '# of appearance',
            data: arrOfSeen,
            backgroundColor: [
                
                'rgba(255, 159, 64, 0.5)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            
            borderWidth: 3
        }
    ]
  },
});
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