// let v;
// var y
// const z;

// var x  = document.getElementById
// ("my_id_1")
// var y  = document.getElementById
// ("my_id_2")
// var name = document.getElementsByName
// ("my_name")
//  x.innerHTML = 
//  "<h1>hello world </h1>";




//  function my_function_1 () {
// console.error("here is my function")
// return "hello ..."

//  }
//  function my_function_2 (name) {
//   console.error("here is my function" + name)
  
  
//    }

//      const random_int = () => {
//        console.error ("here my_function random_int");
//      }

//      my_function_1();

function multiply(){
  a=Number(document.my_cal.first.value);
  b=Number(document.my_cal.second.value);
  c=a*b;
  document.my_cal.total.value=c;
}

function addition(){
  a=Number(document.my_cal.first.value);
  b=Number(document.my_cal.second.value);
  c=a+b;
  document.my_cal.total.value=c;
}

function subtraction(){
  a=Number(document.my_cal.first.value);
  b=Number(document.my_cal.second.value);
  c=a-b;
  document.my_cal.total.value=c;
}

function division(){
  a=Number(document.my_cal.first.value);
  b=Number(document.my_cal.second.value);
  c=a/b;
  document.my_cal.total.value=c;
}

function modulus(){
  a=Number(document.my_cal.first.value);
  b=Number(document.my_cal.second.value);
  c=a%b;
  document.my_cal.total.value=c;
}