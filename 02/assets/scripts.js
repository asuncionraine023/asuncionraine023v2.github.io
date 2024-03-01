let English = document.getElementById("eng");
let Mathematics = document.getElementById("math");
let dataStructure = document.getElementById("data");
let computerPrograming = document.getElementById("com");
let webProgramming = document.getElementById("web");

English.addEventListener('keyup', function() {
    let total = parseFloat(English.value) + parseFloat(Mathematics.value) + parseFloat(dataStructure.value) + parseFloat(computerPrograming.value) + parseFloat(webProgramming.value);

document.getElementById("total-grades").value = total;
let average = total / 5;
document.getElementById("ave").value = average;

})

Mathematics.addEventListener('keyup', function() {
  let total = parseFloat(English.value) + parseFloat(Mathematics.value) + parseFloat(dataStructure.value) + parseFloat(computerPrograming.value) + parseFloat(webProgramming.value);

    document.getElementById("total-grades").value = total;
    let average = total / 5;
    document.getElementById("ave").value = average;

    
    })

    dataStructure.addEventListener('keyup', function() {
        let total = parseFloat(English.value) + parseFloat(Mathematics.value) + parseFloat(dataStructure.value) + parseFloat(computerPrograming.value) + parseFloat(webProgramming.value);
      
          document.getElementById("total-grades").value = total;
          let average = total / 5;
          document.getElementById("ave").value = average;
          
    })

    computerPrograming.addEventListener('keyup', function() {
        let total = parseFloat(English.value) + parseFloat(Mathematics.value) + parseFloat(dataStructure.value) + parseFloat(computerPrograming.value) + parseFloat(webProgramming.value);
      
          document.getElementById("total-grades").value = total;
          let average = total / 5;
          document.getElementById("ave").value = average;
          
    })

    computerPrograming.addEventListener('keyup', function() {
        let total = parseFloat(English.value) + parseFloat(Mathematics.value) + parseFloat(dataStructure.value) + parseFloat(computerPrograming.value) + parseFloat(webProgramming.value);
      
          document.getElementById("total-grades").value = total;
          let average = total / 5;
          document.getElementById("ave").value = average;
          
    })

    webProgramming.addEventListener('keyup', function() {
        let total = parseFloat(English.value) + parseFloat(Mathematics.value) + parseFloat(dataStructure.value) + parseFloat(computerPrograming.value) + parseFloat(webProgramming.value);
      
          document.getElementById("total-grades").value = total;
          let average = total / 5;
          document.getElementById("ave").value = average;
          
    })

