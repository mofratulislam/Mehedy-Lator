

function popUp(){
    alert("We love Mehedy Sir")
}


function insertNumber(number){

   document.getElementById('result').value = document.getElementById('result').value + number ;
}

function clearResult(){

    document.getElementById('result').value = '' ;
}

function calculate(){
   
    document.getElementById('result').value = eval(document.getElementById('result').value) ;
}


function deleteNumber(){

    var presentValue = document.getElementById('result').value ;
    if(presentValue!=''){
        document.getElementById('result').value = presentValue.slice(0,-1) ;
    }
}



