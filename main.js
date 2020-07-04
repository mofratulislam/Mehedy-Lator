


function insertNumber(number){

    var exitingNumbers =  $('#result').val() ;
    $('#result').val(exitingNumbers + number)
}

function clearResult(){

    $('#result').val('')
}

function calculate(){
    
    var mainResult = eval($('#result').val()) ;
   
    $('#result').val(mainResult)

}

 function deleteNumber(){

    var presentValue  = $('#result').val(); 
    if(presentValue!=''){
        $('#result').val(presentValue.slice(0,-1));
    }

} 

