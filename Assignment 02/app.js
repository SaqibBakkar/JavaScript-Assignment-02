// Chapter 05 (MATH EXPRESSIONS)

// Q1)
// var num_1 = 3;
// var num_2 = 5;
// var result = num_1 + num_2
// document.write("Sum of", " ", num_1, " ", "and", " ", num_2, " ", "is", " ", result);

// Q2)
    // (subtraction)

// var num_1 = 5;
// var num_2 = 3;
// console.log(num_1 - num_2);

//     // multiplication

// var num_1 = 5;
// var num_2 = 3;
// console.log(num_1 * num_2);

//     // division

// var num_1 = 5;
// var num_2 = 3;
// console.log(num_1 / num_2);

//     // modulus

// var num_1 = 5;
// var num_2 = 3;
// console.log(num_1 % num_2);

// Q3)
// document.write("Value after variable declaration is Undefined");
// var num_1 = 5;
// document.write("</br>,Initial Value:", " ", num_1);
// var num_2 = ++num_1;
// document.write("</br>,Value after increment is:", " ", num_2);
// var num_3 = ++num_2 + num_1;
// document.write("</br>,Value after addition is:", " ", num_3);
// var num_4 = --num_3;
// document.write("</br>,Value after decrement is:", " ", num_4);
// document.write("</br>,Value after increment is:", " ", num_4%3);

// Q4)
// var ticket_price = 600;
// var num = 5;
// document.write("Total cost to buy", " ", num, " ", "tickets to a movie is", " ", ticket_price*num, " ", "PKR")

// Q5)
// var num = +prompt("Enter the table")
// document.write("<h1>able of", " ", num,"</h1>");
// document.write(num, " ", "x 1 =", " ", num*1,"<br>",num, " ", "x 2 =", " ", num*2, "<br>",num, " ", "x 3 =", " ", num*3, "<br>",num, " ", "x 4 =", " ", num*4, "<br>",num, " ", "x 5 =", " ", num*5, "<br>",num, " ", "x 6 =", " ", num*6, "<br>",num, " ", "x 7 =", " ", num*7, "<br>",num, " ", "x 8 =", " ", num*8, "<br>",num, " ", "x 9 =", " ", num*9, "<br>",num, " ", "x 10 =", " ", num*10)

// Q6)
// var num_1 = 25;
// var num_2 = 77;
// var num_3 = 70;
// document.write(num_1, "<sup>o</sup>C", " ", "is", " ", num_2, "<sup>o</sup>F")
// document.write("<br>", num_3, "<sup>o</sup>F", " ", "is", " ", 21.11111111111, "<sup>o</sup>C")

// Q7)
// var item1 = 650;
// var quantity = 3;
// var item2 = 100;
// var quantity2 = 7;
// var charges = 100;
// document.write("<h1>Shopping Cart</h1>")
// document.write("Price of item 1 is", " ", item1);
// document.write("<br>Quantity of item 1 is", " ", quantity);
// document.write("<br>Price of item 2 is", " ", item2);
// document.write("<br>Quantity of item 2 is", " ", quantity2);
// document.write("<br>Shopping Charges", " ", charges);
// document.write("<br>Total cost of your order is", " ", item1*quantity + item2*quantity2 + charges);

// Q8)
// var total = 980;
// var obtained = 804;
// document.write("<h1>Mark Sheet</h1>")
// document.write("Total Marks", " ", total);
// document.write("<br>Obtained Marks", " ", obtained);
// document.write("<br>Percentage", " ", total/obtained*100,"%");

// Q9)
// var dolar = 1;
// var rupee_1 = 104.80;
// var riyal = 1;
// var rupee_2 = 38;
// document.write("<h1>Currency of APK</h1>")
// document.write("<br>Total Currency of APK", " ", dolar*rupee_1 + riyal*rupee_2);

// Q10)
// var num = 5;
// document.write("Result", " ", num+num*10/num);

// Q11)
// var year = 2025;
// var birth = 2009;
// document.write("<h1>Age Calculater</h1>")
// document.write("Current Year", " ",year);
// document.write("<br>Birth Year", " ",birth);
// document.write("<br>Your Age", " ", year-birth);

// Q12)
// var num = 20;
// document.write("<h1>The Geometrizer</h1>")
// document.write("Radius", " ",num);
// document.write("<br>The circumference is", " ",2*3.142*num);
// document.write("<br>The area is", " ", 3.142*num*num);

// Q13)
// var snack = "Chocolate Chips";
// var num_1 = 25;
// var num_2 = 65;
// var num_3 = 3;
// document.write("<h1>The Lifetime Supply Calculator</h1>");
// document.write("Favorite Snack", " ",snake);
// document.write("<br>Current Age", " ",num_1);
// document.write("<br>Maximum Age", " ", num_2);
// document.write("<br>Amount of snake per day", " ", num_3);
// document.write("<br> You will need 150 to last you until the ripe old age of", " ", num_2);

// Chapter 06 - 09 (MATH EXPRESSIONS)

// Q1)
// var num_1 = 10;
// var num_2 = ++num_1;
// var num_3 = num_1++;
// var num_4 = --num_1;
// var num_5 = num_1--;
// document.write("Result: <br> The value of a is:", " ", num_1);
// document.write("<br> <br> The value of ++a is:", " ", num_2, "<br> Now the value of a is:", " ", ++num_1);
// document.write("<br> <br> The value of a++ is:", " ", num_3, "<br> Now the value of a is:", " ", num_2++);
// document.write("<br> <br> The value of --a is:", " ", num_4, "<br> Now the value of a is:", " ", --num_3);
// document.write("<br> <br> The value of a-- is:", " ", num_5, "<br> Now the value of a is:", " ", num_4);

// Q2)
// var a = 2 , b = 1;
// var num_1 = 1;
// var num_2 = --a - --b;
// var num_3 = --a - --b + ++b;
// var num_4 =--a - --b + ++b + b--;
// var result= --a - --b + ++b + b--;
// document.write("<br> The value of a is:"," ",num_3);
// document.write("<br> The value of b is:"," ",num_4);
// document.write("<br> The result is:",num_2);

// Q3)
// var name = "User Name?";
// var Answer = "Muhammad Saqib";
// var spec = prompt(name, Answer);

// Q5)
// var num_1 = +prompt("Multiply the first number");
// var num_2 = +prompt("Multiply the second number");
// console.log("Result", " ", num_1*num_2);

// Q6)

// Home Assignment:
// Chapter 6 (Math Expression II)

// Q1)
// var num = 5;
// console.log(++num);
// console.log(num++);

// Q2)
// var a = 100;
// console.log(--a);

// Q3)
// var x = 50; 
// var y = x++;
// console.log(y);

// Q4)
// var y = 50; 
// var z = --y;
// console.log(z);

// Q5)
// var a = 10; 
// var b = --a;
// console.log(b);

// Q6)
// var new_value = 10; 
// var result = ++new_value;
// console.log(result);

// Q7)
// var num = 10; 
// var result = num++;
// console.log(result);

// Chapter 7 (Math Expression III)

// Q1)
// var calculatedNum = 2 + (2 * 6);
// console.log(calculatedNum);

// Q2)
// var calculatedNum = (2 + 2) * 6;
// console.log(calculatedNum);

// Q3)
// var calculatedNum = (2 + 2) * (4 + 2);
// console.log(calculatedNum);

// Q4)
// var calculatedNum = ((2 + 2) * 4) + 2;
// console.log(calculatedNum);

// Q5)
// var Num = (2 + 2) * (4 + 10);
// console.log(Num);

// Q6)
// var Num = (2 + 2) * (4 + 10);
// console.log(Num);

// Q7)
// var Num = (4 / 2) * 4;
// console.log(Num);

// Chapter 8 (Concatenating Text Strings)

// Q1)
// var num = "2" + "2";
// console.log(num,"?");

// Q2)
// var num = ("Hello" + "Dolly");
// alert(num,"?");

// Q3)
// alert("33" + 3);

// Q4)
// var num_1 = "Pakistan"
// var num_2 = "Zindabad"
// alert(num_1 + num_2)

// Q4)
// var num_1 = "Karachi"
// var num_2 = 123
// consol.log(num_1 + num_2)

// Q4)
// var num_1 = "Hello";
// var num_2 = "World";
// var result = console.log(num_1 + num_2);

// Chapter 9 (Prompts)

// Q1)
// var firstName = prompt("Enter first name");

// Q2)
// var country = prompt("Country Name", "China");

// Q3)
// var Name = prompt("Enter your name")

// Q4)
// var color = prompt("Please enter your favorite color:", "Black");

// Q5)
// var message = "What is your favorite fruit?";
// var default_response = "Apple";
// var result = prompt(message, default_response);

// Q6)
// var age = prompt("Enter your age:", "16");
