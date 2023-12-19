function area() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let area = (num1*num2)/2; 
    document.getElementById("sum").innerHTML = "The area of the triangle is :" +area;


}