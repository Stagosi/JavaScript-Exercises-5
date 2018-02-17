for (var year = 2015; year <= 2085; year++){
  var d = new Date(year, 0, 1);
   if (d.getDay() === 0){    
     document.getElementById("result").innerHTML += `1st January is being a Sunday ${year}  <br>`;
   }
   };



