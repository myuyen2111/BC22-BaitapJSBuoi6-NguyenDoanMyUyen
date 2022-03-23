// Bài 1:
var i = 0;
var sum = 0;
while (sum < 10000) {
  i++;
  sum += i;
}
var result_ex1 =
  "<div class='alert alert-success'>Số nguyên dương nhỏ nhất là: " +
  i +
  "</div>";
document.getElementById("result_ex1").innerHTML = result_ex1;
// Bài 2:
function Calc_ex2() {
  var x = document.getElementById("txt_x").value * 1;
  var n = document.getElementById("txt_n").value * 1;
  var i = 1;
  var sum_xn = 0;
  var xn = 1;
  var sum_result = "";
  while (i <= n) {
    xn = xn * x;
    sum_xn = sum_xn + xn;
    i++;
  }
  sum_result = "<div class='alert alert-danger'>" + sum_xn + "</div>";
  document.getElementById("footer_ex2").innerHTML = sum_result;
};
// Bài 3:
function Calc_ex3() {
  var n = document.getElementById("txt_n2").value * 1;
  var i = 0;
  var T = 1;
  var T_result = "";
  while (i < n) {
    T = T * (i + 1);
    i++;
  }
  T_result = "<div class='alert alert-success'>" + T + "</div>";
  document.getElementById("footer_ex3").innerHTML = T_result;
};
// Bài 4:
function div_creator(){
  var div_element="";
  for (var i=1; i<=10; i++){
    if (i%2==0){div_element="<div class='bg-danger p-2 text-white'> Div chẵn "+i+"</div>";
  }
  else {div_element="<div class='bg-primary p-2 text-white'> Div lẻ "+i+"</div>";}
  document.getElementById("div_container").innerHTML+=div_element;

  }
}

