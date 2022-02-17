function myExpanse(){
     const income = document.getElementById('income-input').value;
     const salary = parseFloat(income);
     const foodAmount  = document.getElementById('food-Number').value;
     const foodName = parseFloat(foodAmount );
     const RentAmount  = document.getElementById('rent-Number').value;
     const rentName = parseFloat(RentAmount  );
     const clothesAmount = document.getElementById('clothes-number').value;
     const clothes = parseFloat(clothesAmount);
     const expanseTotal =  document.getElementById('expanse-total').innerHTML=(foodName+rentName+clothes);
     const salaryRange = document.getElementById('balance-total').innerHTML=(salary- expanseTotal);
     return salaryRange;

}


