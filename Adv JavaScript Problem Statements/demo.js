//alert("outside function code");

function info() {
   // alert("Welcome");
   // reading the value of text field using id attribute 
  var fname = document.getElementById("n1").value;
   // alert("using id attribute "+fname);
   // reading the value of text field using name attribute 

   var fullname = document.getElementsByName("user")[0].value;
   // alert("using name attribute "+fullname);
    document.getElementById("n2").value=fname;
    document.getElementById("n3").innerHTML=fname;
}

function add() {
    var a="10";
    var b = "20";
    var c = 10;
    var d = 20;
    alert(a+"+"+b)
    alert(eval(a+"+"+b))
    alert(a+b);
    alert(c+d);
}
add();
//info();