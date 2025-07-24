document.addEventListener("keydown",(e)=>{
            if(e.key == "Enter"){
                myFunction();
                document.getElementById('input1').value = "";
                  document.getElementById('input2').value = "";
            }
        })
 
        function myFunction() {
            let input1 = Number(document.getElementById("input1").value);
            let input2 = Number(document.getElementById("input2").value);
            let input3 = Number(document.getElementById("input3").value);
            let result;
            if (input1 > input2 && input1 > input3) {
                result = "Input1 " + input1 + " is Greate than Input2 " + input2 + " and input3 " + input2;
            }
            else if (input2 > input1 && input2 > input3) {
                result = "Input2 " + input2 + " is Greate than Input1 " + input1 + " and input3 " + input3
            }
            else {
                result = " Input3 " + input3 + " is Greate than Input1 " + input1 + " and Input2 " + input2
            }

            if (input1 >= input2 && input1 >= input3) {
                document.getElementById("output").style.display = "flex"
                document.getElementById("output").style.background = "Yellow"
            }
            else if (input2 >= input1 && input2 >= input3) {
                document.getElementById("output").style.display = "flex"
                document.getElementById("output").style.background = "green"
            }
            else {
                document.getElementById("output").style.display = "flex";

            }
            document.getElementById("output").innerHTML = result;
        }    
   