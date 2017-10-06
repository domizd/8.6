var a,
    b,
    value;
a = 0;
b = 0;
value = (a * a) - (2 * a * b) + (b * b);
if(value < 0) {
  console.log("wartość mniejsza od zera");
}
else if(value > 0) {
  console.log("wartosc wieksza od zera");
}    
else if(value == 0) {
  console.log("wartosc rowna zero")
}