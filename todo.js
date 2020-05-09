
const userName =  document.getElementById("userName");
const userAge =  document.getElementById("userAge");
const userHeight =  document.getElementById("userHeight");
const userWeight = document.getElementById("userWeight");
const resultDiv = document.getElementById("result");


export function addTodolist(){
 

    if(userHeight.value ==="" || userWeight.value ==="" || userName.value ==="" || userAge.value ===""){
      console.log("Value is Empty!");
    }
    else{
      const finalHeight = Math.pow(userHeight.value, 2);
      const bmi = (userWeight.value / finalHeight) * 10000;
  
      const result = bmi.toFixed(1);
  
      console.log(userWeight.value, userHeight.value, bmi)
      console.log(result)
  
      resultDiv.innerHTML = `<h1>Hi ${userName.value},</h1> Your BMI Result is ${result}. `;
    }
}