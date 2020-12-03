function calcCircumfrence(){
    let pi=22/7;
    let radius=document.getElementById('radius').value;
    let circumference=2*pi*radius;
    let result=`The circumference is ${circumference}`
    document.getElementById('circum').innerHTML=result;
}

function delResult(){
    document.getElementById('circum').innerHTML='';
    document.getElementById('radius').value='';
}