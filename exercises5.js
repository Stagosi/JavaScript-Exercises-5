/*january-sunday*/

for (var year = 2015; year <= 2085; year++){
  var d = new Date(year, 0, 1);
   if (d.getDay() === 0){    
     document.getElementById("result").innerHTML += `1st January is being a Sunday ${year}  <br>`;
   }
   };

/*guess number between 1-10*/

function guessNumber(){
  var randomN = Math.floor(Math.random() * 10) + 1;
  var usersN = parseInt(document.getElementById("guessN").value);
  if(randomN === usersN){
    alert("Good Work!");
  } else {
    var notM = document.getElementById("text");
    notM.innerHTML ="Not matched. Try again!";
    notM.style.color="coral";
  }
};
