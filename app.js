
let count = 0;







function seatIdClick(id){
    const perSeatPrice = document.getElementById('seatPrice')
    let perseatP = parseFloat(perSeatPrice.innerText)
    
    if(count < 4){
        
        const vist = document.getElementById(id)
        vist.style.backgroundColor = '#1DD100'
        
        const seatNo  =  document.getElementById(id).innerText;
            
        let ticList = document.getElementById('mainticList');
        
        const seatCon =  document.createElement('div');
        seatCon.classList.add('flex','justify-between')
        
        const seatName =  document.createElement('p');
        const seatClass =  document.createElement('p');
        const seatPrice =  document.createElement('p');
        
        seatClass.textContent = 'Economoy'
        seatPrice.textContent ='500'
        seatName.textContent =id
        
        ticList.appendChild(seatCon)
        seatCon.appendChild(seatName)
        seatCon.appendChild(seatClass)
        seatCon.appendChild(seatPrice)

       
        document.getElementById('sit').innerText = ++count
       perseatP = perseatP + 500;
     perSeatPrice.textContent = perseatP;
    
  

       
        
    }
    else{
     
        alert('maximam 4 seat buys one person')
    }
    
  
}



document.getElementById('applyDis')
.addEventListener('click',function(event){
    const totalPrice = document.getElementById('seatPrice').innerText;
    const totalPriceAmout =parseFloat(totalPrice);
    const finalPrice = document.getElementById('disPrice');

let disvalue =  document.getElementById('discountcopon');

if(disvalue.value =='new15'){
   const disprice =   totalPriceAmout *( 15 / 100);
   const mainPrice = totalPriceAmout - disprice;
   finalPrice.innerText = mainPrice;
   disvalue.value =  'copon has been used';
   disvalue.setAttribute('disabled',true)
}
else if(disvalue.value =='couple20'){
    const disprice =   totalPriceAmout *( 20 / 100);
    const mainPrice = totalPriceAmout - disprice;
    finalPrice.innerText = mainPrice;
    disvalue.value = 'copon has been used'
    disvalue.setAttribute('disabled',true)
    
}
else{
    finalPrice.innerText =totalPriceAmout ; 
    disvalue.value =  'this is not valid copon'
    disvalue.setAttribute('disabled',true)
}


})
