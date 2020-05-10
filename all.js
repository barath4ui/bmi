"use strict";


(function(){
    
    const userName =  document.getElementById("userName");
    const userHeight =  document.getElementById("userHeight");
    const userWeight = document.getElementById("userWeight");
    

    const next01 = document.getElementById("next01");
    const calculateBtn =  document.getElementById("calculateBtn");
    const reCalculate = document.getElementById("reCalculate");

    const usName = document.getElementById("usName");
    const resultDiv = document.getElementById("result");

   

    var header = document.getElementById("genders");
    var btns = header.getElementsByClassName("custom-control");

    for(let i=0; i<btns.length; i++){
      btns[i].classList.remove("active-gender");

      btns[i].addEventListener("click", function(){
        this.classList.add("active-gender");
      });
    }

    next01.addEventListener("click", showformDetails);
    calculateBtn.addEventListener("click", calculateResult);
    reCalculate.addEventListener("click", reloadPage);

    function showformDetails(){
        if(userName.value ==="" ){
            console.log("Value is Empty!");
        }
        else{
            console.log(userName.value);
            welcomeDetails.classList.add("d-none");
            formDetails.classList.add("d-block");
            formDetails.classList.remove("d-none");
        }
    }

    function calculateResult(){
        if(userHeight.value ==="" || userWeight.value ==="" ){
            console.log("Value is Empty!");
        }
        else{
            const finalHeight = Math.pow(userHeight.value, 2);
            const bmi = (userWeight.value / finalHeight) * 10000;
            const result = bmi.toFixed(1);
            const caseResult = parseFloat(result);

            formDetails.classList.add("d-none");
            formDetails.classList.remove("d-block");
            resultDetails.classList.remove("d-none");

            console.log("Weight:", userWeight.value, "Height:", userHeight.value, "BMI:", bmi)
            console.log("Result:", result);
            console.log("CaseResult",caseResult);

            let weightResult ;

           
            if (caseResult < 18.4){
              console.log( 'Underweight' );
              weightResult = 'Underweight';
              resultDiv.classList.add("under")
            } 
            else if (caseResult > 18.5 && caseResult < 24.9){
              console.log( 'Normal Weight' );
              weightResult = 'Normal Weight';
              resultDiv.classList.add("normal")
            }
            else if (caseResult > 25 && caseResult < 29.9 ){
              console.log( 'Overweight' );
              weightResult = 'Overweight';
              resultDiv.classList.add("over")
            }
            else{
              console.log( "Obesity" );
              weightResult = "Obesity";
              resultDiv.classList.add("Obesity")
            }
                  
            
            


            usName.innerHTML = `${userName.value}`;
            resultDiv.innerHTML = `
            <h1>${result}</h1>
            <h3>${weightResult}</h3>
            <p>BMI weight range for the height</p>
            `;
        }
    }

    function reloadPage(){
      location.reload();
    }

})();