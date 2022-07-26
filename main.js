function calculate(){
    numbers= document.getElementById("size_entry").value;
    area= numbers * numbers;
    document.getElementById("area").innerHTML= area;
    perimeter= numbers * 4;
    document.getElementById("perimeter").innerHTML= perimeter;
}