let element=document.getElementById('input-box')


function display(number){
    element.value += number
    
}

function remove(){
    element.value = ''
     
}
function minus(){
    element.value =element.value.slice(0,-1)
}
function validation()   
{
        try{

            element.value=eval(element.value)
        }
        catch
        {
            element.value="error"
        }
    
}