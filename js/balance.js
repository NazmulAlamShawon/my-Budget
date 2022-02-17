
function myfoodfunction(expanseId){
    const foodInput = document.getElementById(expanseId);
    const foodText = foodInput.value;
    const newFoodAmount = parseFloat(foodText);
    foodInput.value = '';
    
    return newFoodAmount
    
}

function myRentfunction(rentId){
    const rentInput = document.getElementById(rentId);
    const rentText = rentInput.value;
    const newRentAmount = parseFloat(rentText);
     rentInput.value = '';
    
    return newRentAmount
    
}


// update food

document.getElementById('calculet-btn').addEventListener('click',function(){
    // get food amount set
     const myFoodToTal = myfoodfunction('food-input');
    
     
    // update  Food total
 const expanseTotal = document.getElementById('expanse-total');

 const previousFoodText = expanseTotal.innerText;
 const previousFoodAmount = parseFloat(previousFoodText);

 const newFoodTotal = previousFoodAmount + myFoodToTal;
 expanseTotal.innerText = newFoodTotal;
 
 })

 //update rent
//  document.getElementById('calculet-btn').addEventListener('click',function(){
//      // get 
//      const myRentTotal = myRentfunction('rent-input');


//      //upda rent
//     const expanseTotal = document.getElementById('expanse-total');
//     const previousRentText = expanseTotal.innerText;
//     const previousRentAmount = parseFloat(previousRentText);
//     const newRentTotal = previousRentAmount + myRentTotal ;
//     expanseTotal.innerText=newRentTotal;
 
//   })





