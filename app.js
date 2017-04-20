/********Mohammad Khalid , Batch 4.1 , Section:Orange ********/

/********Task 1******/

// for (var i = 0; i < 5 ; i++){
//     document.write("hello World" +"<br>");
// }

/********Task 2 ******/
// for (var i = 1; i <=10 ; i++){
//     document.write(i+"<br>");
// }

/********Task 3******/

// var tableNumber = parseInt(prompt("Enter the Table Number"));
// if (isNaN(tableNumber)) {
//                 document.write("Please Make Sure You Entered a number ")
// } else if (tableNumber >= 1) {
//     var tableLimit = parseInt(prompt("Please Enter Limit ", 10));
//         if (isNaN(tableLimit)) {
//                 document.write("Please Make Sure You Entered a number ")
//         } else if (tableLimit >= 1){
//             for ( var i = 1 ; i <=tableLimit ; i++ ){
//                 document.write(tableNumber+" x "+i+" = "+(tableNumber*i)+"<br>")

//             }

//         }else {
//                 document.write("Please Make Sure Your Entered number is positive table Limit ")

//         }
// }else {
//               document.write("Please Make Sure Your Entered number is positive table Number ")

// }


/********Task 4******/
// var mobile = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];

//     for (var i = 0; i <mobile.length ; i++){
//      document.write(mobile[i]+"<br>");
//     }


/********Task 5******/
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for (var i = 0; i < fruits.length; i++) {
//     document.write("Element at index "+i+" is "+fruits[i] + "<br>");
// }


/********Task 6******/

// var numberOfItems = parseInt(prompt("Enter number of Items"));
// var items = [];
// if (isNaN(numberOfItems) || numberOfItems <= 0) {
//     document.write("Please!! make sure you entered correct Number of Items")

// } else {
//     for ( var i = 0 ; i < numberOfItems ; i++){
//         items[i]= prompt("Please!! Your Items");

//     }
// }

// document.write("Number of Items is "+numberOfItems+"<br>");
// document.write("Items :"+"<br><br>");
//   for ( var j = 0 ; j < items.length ; j++){

//         document.write(items[j]+"<br>")
//     }



/********Task 7******/

// document.write("Counting :") // (a)
// for (var i = 1; i <=15 ; i++){
//     document.write(i);
//     document.write(" , ");

// }
// document.write("<br>");


// document.write("Reverse Counting :") // (b)
// for (var j = 10; j >=1 ; j--){
//     document.write(j);
//     document.write(" , ");

// }
// document.write("<br>");


// document.write("Even:")     // (c)
// for (var k = 0; k <=20 ; k+=2){
//     document.write(k);
//     document.write(" , ");

// }
// document.write("<br>");

// document.write("Odd:")  // (d)
// for (var l = 1; l <=20 ; l+=2){
//     document.write(l);
//     document.write(" , ");

// }
// document.write("<br>");


// document.write("Series :")  // (e)
// for (var m = 2; m <=20 ; m+=2){
//     document.write(m+"k");
//     document.write(" , ");

// }



/********Task 8******/
// var bakeryItem = ["cookie", "cake", "nimko", "pastry"];

// var searchItem = prompt("Welcome to My Bakery , please Enter What Do you want.")
// var check = false;

// if (isNaN(searchItem)){
// for (var i = 0; i < bakeryItem.length; i++) {

//     if (bakeryItem[i] === searchItem) {
//         check = true;
//         document.write(searchItem + " is available in the List at Index " + i + " in our Bakery")
//         break;
//     }
//  } 
// } else {
//     document.write ("Please make sure You Entered bakery Item");
//     check = null;
// }
// if (check === false) {

//     document.write("Sorry!! " + searchItem + " is not present  in our bakery");
// }

/********Task 9******/

// var arr = [34, 42, 2, 143, 45454, 76];

// var largestNumber = arr[0];

// for (var i = 1; i < arr.length; i++) {
//     if (arr[i] > largestNumber) {
//             largestNumber = arr[i];
//     }
// }

// document.write("Array item :"+arr+"<br>");

// document.write("Largest Number in Array :"+ largestNumber);



/********Task 10******/

// var arr = [34, 42, 2, 1, 45454, 76];

// var smallestNumber = arr[0];

// for (var i = 1; i < arr.length; i++) {
//     if (arr[i] < smallestNumber) {
//         smallestNumber = arr[i];
//     }
// }

// document.write("Array item : " + arr + "<br>");

// document.write("Smallest Number in Array : " + smallestNumber);



/********Task 11******/
// var arr = [34, 42, -24234, 1, 454, 76];

// var smallestNumber = arr[0];
// var largestNumber = arr[0];


// for (var i = 1; i < arr.length; i++) {
//     if (arr[i] < smallestNumber) {
//         smallestNumber = arr[i];
//     }
//     if (arr[i] > largestNumber) {
//         largestNumber = arr[i] ;
//     }

// }

// document.write("Array item : " + arr + "<br><br>");

// document.write("Smallest Number in Array : " + smallestNumber + "<br><br>");
// document.write("Largest Number in Array : " + largestNumber);



/********Task 12******/
// for( var i =1 ; i <= 20 ; i++  ){

//  document.write ((i * 5)+" ,");
// }



/********Task 13******/

/********Task 14******/

// var arr1 = [23, 43, 2, 4, 12, 54];
// document.write("Original array " + arr1 + "<br>");
// var check = false;

// var userInput = parseInt(prompt("Enter a number "));

// for (var i = 0; i < arr1.length; i++) {

//     if (arr1[i] === userInput) {
//         arr1 = arr1.slice(0, i + 1);
//         check = true;
//     }
// }
// if (check === false) {

//     document.write("Sorry " + userInput + " is not present in array")
// } else {
//     document.write("Changed array :" + arr1);

// }

/********Task 15******/

// var A = [ [1,2,3] ,[4,5,6] ,[7,8,9]]
// // document.write("Multli Dimensional Array : "+A+"<br>");
// for ( var i =0 ; i < A.length ; i++){

//     document.write(A[i]+"<br>");

// }


/********Task 16******/

// var num = [];
// for (var i = 0; i <= 5; i++) {
//     var x  = parseFloat ( prompt ( "Enter a number"));

//     if ( x < 0 || isNaN(x)) {
//        break ;
//     }else {
//         num[i] = x;
//     }
// }
// console.log(num);
/********Task 17******/

// for (var i = 0; i <= 20; i++) {

//     if (i % 2 === 0) {

//         console.log(i + " is Even");
//     } else if (i % 2 === 1) {

//         console.log(i + " is Odd");

//     }


// }

/********Task 18******/
// var x = 1;
// for (var i = 1; i <= 7; i++) {

//     if (i % 2 === 1) {
//             x= x*i;

//     }

// }
// console.log(x);

/********Task 19******/
// var userInput = parseInt(prompt("Enter initial Stars :", 3));

// for (var i = userInput; i >= 1; i--) {
//     // document.write(" ");
//     for (var j = 1; j <= i; j++) {

//         document.write("* ");
//     }
//     document.write("<br>");

// }

/********Task 20******/


// var userInput = parseInt(prompt("Enter initial Stars :", 3));

// for (var i = 1; i <= userInput; i++) {
//     // document.write(" ");
//     for (var j = 1; j <= userInput; j++) {

//         document.write("* ");
//     }
//     document.write("<br>");

// }


// var userInput = parseInt(prompt("Enter initial Stars :", 3));

// for (var i = 1; i <= userInput; i++) {
//     for (var j = 1; j <= i; j++) {

//         document.write("* ");
//     }
//     document.write("<br>");

// }



// var userInput = parseInt(prompt("Enter initial Stars :", 3));

// for (var i = userInput; i >= 1; i--) {

//     for (var j = 1; j <= i; j++) {

//         document.write("* ");
//     }
//     document.write("<br>");

// }

