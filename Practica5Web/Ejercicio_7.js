var leap = prompt("Ingrese el anio", "yyyy");
if(((leap%4)==0) && ((leap%100)!=0) || ((leap%400)==0)){
    console.log("Es bisiesto")
}
else{
    console.log("No es bisiesto")
}