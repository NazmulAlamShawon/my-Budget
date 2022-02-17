
function myfoodfunction(){
    const foodInput = document.getElementById('food-input');
    const foodText = foodInput.value;
    const newFoodAmount = parseFloat(foodText);
    foodInput.value = '';
    
    return newFoodAmount
    
}
// function myRentfunction(){
//     const rentInput = document.getElementById('rent-input');
//     const rentText = rentInput.value;
//     const newRentAmount = parseFloat(rentText);
//      rentInput.value = '';
    
//     return newRentAmount
    
// }



document.getElementById('calculet-btn').addEventListener('click',function(){
    // get food amount set
     const myFoodToTal = myfoodfunction();
     
    // update  Food total
 const expanseTotal = document.getElementById('expanse-total');

 const previousFoodText = expanseTotal.innerText;
 const previousFoodAmount = parseFloat(previousFoodText);

 const newFoodTotal = previousFoodAmount + myFoodToTal;
 expanseTotal.innerText = newFoodTotal;
 
 })



// document.getElementById('calculet-btn').addEventListener('click',function(){
//       const myRentTotal = myRentfunction();
      
//       const RentTotal = document.getElementById('expanse-total');
//       const prevRentText = RentTotal.innerText;
//       const prevRentAmount= parseFloat(prevRentText) ;
      
//      const newRent = prevRentAmount + myRentTotal;
//      RentTotal.innerText=newRent;

//  })

 // update rent total
console.log()

