var leap = prompt("Ingrese el anio", "yyyy");
if(leap%4 && !leap%100 || leap%400){
    console.log("Es bisiesto")
}
else{
    console.log("No es bisiesto")
}