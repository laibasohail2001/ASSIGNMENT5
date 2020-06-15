//chapter 1
//**task 1**
// alert("hello visitors")
// **task 2**
// alert("Error! Please enter the valid password")
// **task3**
// alert("Welcome to JS Land \n Happy Coding!")
// **task 4**
// alert("Welcome to JS Land")
// alert("Happy Coding!\n Prevent this page from creating additional dialogues")
//  **task 5**
// alert("Hello.... I can run JS through my web browser's console")

//chapter 2
//**task 1**
// var a="username";
// document.write(a);
// **task 2**
// var myname="LAIBA SOHAIL";
// document.write(myname);
// **task 3**
// var message="HELLO WORLD";
// alert(message);
// **task 4**
// var student1="JOHNE DOE"
// var student2="15 years old"
// var student3="Certified Mobile Application Development"
// alert(student1);
// alert( student2);
// alert( student3);
// **task 5**
// alert("PIZZA \n PIZZ \n PIZ \n PI \n P")
// **task 6**
// var email="laibasohail4466@gmail.com"
// alert("My email address is "+email);
// **task 7**
// var book="A smarter way to learn Java Scrpit"
// alert("Iam trying to learn from the book " + book);
// **task 8**
// document.write("Yah! I can write HTML content through JAVASCRIPT")
// **task 9**
// alert("“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”");


// CHAPTER 3
// **task 1**
// var age="15"
// alert("I am " + age +" years old");
// ** task 2**
// var i=prompt("enter the no of times you visited the website")
// alert("you have visited my webpage "+ i + " times")
// **task 3**
// var birthyear="2001"
// document.write("My birth year is " + birthyear +" \n Data Type of my declared variable is Number" );
// **task 4**
// var name=prompt("enter your name")
// var title=prompt("enter  your product title")
// var quantity=prompt("enter the quantity you want to order")
// document.write(name + " odered " + quantity + title + " from XYZ Clothing Store")



// CHAPTER 4
// **task 1**
// var x,y,z;
// **task 2**
//  5 legal variables;
//  var name;
//  var title;
//  var dog;
//  var fruit;
//  var food;
// 5 illegal variables;
// var 1girl;
// var -boy;
// var 23;
// var 2lady;
// var +apple;
// **task 3 **
// document.write("<h1> Rules for naming JS Variables </h1> \n\n" )
// document.write("variables names can only contains,numbers,$ and _. for example: $my_first variable \n\n" )
// document.write(" Variable must begin with a letter,$ or _. for example:$name,_name or name.\n\n" )
// document.write("Variable names are case sensitive")
// document.write("Variable names should not JS keywords")



// CHAPTER 5
// **task 1,task 2**
// var a=+prompt("Enter a number")
// var b=+prompt("Enter a number")
// var c=prompt("enter the operator")
// var d;
// if(c==='+')
// {
//     d=a+b;
//     document.write("The sum of " + a + " and " + b + " is " + d)
// }
// else if(c==='-')
// {
//     d=a-b;
//     document.write("The difference of " + a + " and " + b + " is " + d)
// }
// else if(c==='*')
// {
//     d=a*b;
//     document.write("The multiplication of " + a + " and " + b + " is " + d)
// }
// else if(c==='/')
// {
//     d=a/b;
//     document.write("The division of " + a + " and " + b + " is " + d)
// }
// **task 3*
// var a;
// document.write("<h3>The value of the variable is undefined</h3>\n\n");
// var a=5;
// document.write("<br>The initial value of the variable is: " + a );
// ++a;
// document.write("<br><br>The value of the variable is now: " + a);
// a=a+7;
// document.write("<br><br>Value after addition is : " + a);
// --a;
// document.write("<br><br>Value after decreament is : " + a);
// a=a%3;
// document.write("<br><br>The remainder  is : " + a);
// **task 4**
// var price=600;
// price =price*5;
// document.write("The cost of 5 movie tickets is " + price + "PKR");
// **task 5**
// var a=prompt("enter a number");
// var i;
// var b;
// document.write("TABLE OF " + a + "<br>");
// for(i=1;i<=10;i++)
// {
//     b=a*i;
//     document.write(+ a + " * " + i + " = " + b + "<br>");
// }
// **task 6**

// var celcius=prompt("enter the temp in fareheit")
// var fareheit=prompt("enter the temp in celcius")
// celcius=(fareheit-32)*5/9;
// document.write(fareheit + "°F is " +  celcius + "°C <br>")

// fareheit=(celcius * 9/5) + 32;
// document.write(celcius + "°C is " + fareheit + "°F");
// **task 7**
// var price1=+prompt("enter the price of first item")
// var price2=+prompt("enter the price of second item")
// var quantity1=+prompt("enter the quantity of first item")
// var quantity2=+prompt("enter the quantity of second item")
// var shipping=+prompt("enter the shipping charges")
// var total;
// document.write("<h1> SHOPPING CART </h1><br>")
// document.write("price of first item is: " + price1 + "<br>")
// document.write("price of second item is: " + price2 + "<br>")
// document.write("quantity of first item is: " + quantity1 + "<br>")
// document.write("quantity of second item is: " + quantity2 + "<br>")
// document.write("price of shipping charges is: " + shipping + "<br>")
// total=(price1*quantity1)+(price2*quantity2)+shipping;
// document.write("total cost is: " + total + "<br>")
// **task 8**
// var totalmarks=+prompt("enter the total marks ")
// var obtained=+prompt("enter the marks obtained by the student")
// var percentage;
// document.write("<h1> MARK SHEET</h1><br><br><br>");
// document.write("total marks:" + totalmarks + "<br>");
// document.write("marks obtained:" + obtained + "<br>");
// percentage=(obtained/totalmarks)*100;
// document.write("percentage is:" + percentage);
// ** task 9**
// var dollars=10;
// var riyals=25;
// var total;
// dollars=dollars*104.80;
// riyals=riyals*28;
// total=dollars+riyals;
// document.write("<h1>THE CURRENCY IN PKR</h1><br><br>");
// document.write("the total amount of curreny in PKR is " + total + "PKR");
// **task 10 **
// var a=5;
// var b;
// b=(a+5)*10/2;
// document.write(b);
// **task 11**
// var a=prompt("enter the current year")
// var b=prompt("enter the birth year")
// var c;
// document.write("<h1>AGE CALCULATOR</h1><br><br>");
// c=a-b;
// document.write("current year:" + a + "<br>");
// document.write("birth year is:" + b + "<br>");

// document.write("Your age is:" + c);
// **task 12**
// var radius=prompt("enter the radius of circle")
// var cir;
// var area;
// cir=2*3.14*radius;
// area=3.14*radius*radius;
// document.write("<h1>THE GEOMETRIZER</h1><br>");
// document.write("the circumference is:" + cir +"<br>");
// document.write("the area of circle is :" + area +"<br>");
// **task 13**
// var a=prompt("enter your favourite snack")
// var b=prompt("current age")
// var c=prompt("estimated gae")
// var d=prompt("amount of snacks per day")
// var e;
// e=(c-b)*d;
// document.write("<h1>THE LIFETIME SUPPLY CALCULATOR</h1><br>");
// document.write("favourite snack:" + a +"<br>");
// document.write("current age:" + b +"<br>");
// document.write("estimated age:" + c +"<br>");
// document.write("amount of snacks per day:" + d + "<br>");
// document.write("you will need " + e + a + "to last you unitl ripe old age of " + c);



// CHAPTER # 6-9
// **task 1**
// var a=prompt("enter the value of a number")
// document.write("<h1>RESULTS</h1><br>")
// document.write("The value of a is:" + a +"<br>");
// document.write("..........................................<br>");
// ++a;
// document.write("The value of ++a is: " + a + "<br>");
// document.write("Now the value of a is:" + a + "<br>");
// document.write("The value of a++ is: " + a + "<br>");
// a++;

// document.write("Now the value of a is:" + a + "<br>");
// --a;
// document.write("The value of --a is: " + a + "<br>");
// document.write("Now the value of a is:" + a + "<br>");
// document.write("The value of a-- is: " + a + "<br>");
// a--;
// document.write("Now the value of a is:" + a + "<br>");
// **task 2**
// var a=2;
// var b=1;
// var c;
// var d;
// var result;
// --a;
// document.write("--a;" + a + "<br>");
// c=a- --b;
// document.write("--a - --b;" + c +"<br>");
// d=c+ ++b;
// document.write("--a - --b + ++b; " + d+ "<br>");
// result=d+b--;
// document.write("--a - --b + ++b + b--; " + result + "<br>");
// **task 3**
// var name=prompt("enter your name")
// alert("hello " + name)
// **task 5**
// var a=prompt("enter a number");
// var i;
// var b;
// document.write("TABLE OF " + a + "<br>");
// for(i=1;i<=10;i++)
// {
//     b=a*i;
//     document.write(+ a + " * " + i + " = " + b + "<br>");
// }
// **task 6**
// var sub1=+prompt("enter your first subject")
// var sub2=+prompt("enter second subject")
// var sub3=+prompt("enter third subject")
// var total=100;
// var total1=300;
// var marks1=+prompt("enter the marks of first subject")
// var marks2=+prompt("enter the marks of second subject")
// var marks3=+prompt("enter the marks of third subject")
// var sub1per=(marks1/total)*100;
// var sub2per=(marks2/total)*100;
// var sub3per=(marks3/total)*100;
// var obtained=marks1+marks2+marks3;
// var totalper=(obtained/total1)*100;
// document.write("<table><tr><td>Subjects &nbsp;</td><td>Total Marks &nbsp</td> <td>Obtained Marks &nbsp</td><td>Percentage &nbsp</td></tr><tr><td>"+sub1+"&nbsp</td><td>"+total+"&nbsp</td><td>"+marks1+"&nbsp</td><td>"+sub1per+"% &nbsp</td></tr><tr><td>"+sub2+"&nbsp</td><td>"+total+"&nbsp</td><td>"+marks2+"&nbsp</td><td>"+sub2per+"% &nbsp</td></tr><tr><td>"+sub3+"&nbsp</td><td>"+total+"&nbsp</td><td>"+marks3+"&nbsp</td><td>"+sub3per+"% &nbsp</td></tr><tr><td>"+"  " +"&nbsp</td><td>"+total1+"&nbsp</td><td>"+obtained+"&nbsp</td><td>"+totalper+"% &nbsp</td>")


// CHAPTER 9-11;
// **task 1**
// var city=prompt("enter city name")
// if(city=='karachi')
// {
//     alert("WELCOME TO CITY OF LIGHTS")
// }
// ** task 2**
// var gender=prompt("enter your gender")
// if(gender=='male'||gender=='MALE')
// {
//     alert("GOOD MORNING SIR!")

// }
// else if(gender=='female' || gender=='FEMALE')
// {
//     alert("GOOD MORNING MAA'M!")
// }
// ** task 3**
// var color=prompt("enter the color of traffic signal")
// if(color=='red' || color=='Red')
// {
//     alert("MUST STOP")
// }
// else if(color=='yellow' || color=='Yellow')
// {
//     alert("READY TO MOVE")
// }
// else if(color=='green' || color=='Green')
// {
//     alert("MOVE NOW")
// }
// ** task 4**
// var fuel=prompt("enter the remaining fuel")
// if(fuel<0.25)
// {
//     alert("PLEASE REFILL THE FUEL IN YOUR CAR")
// }
// **task 5(a)***/
// var a=4;
// if(++a===5)
// {
//     alert("given condition for variable a is true")
// }
// (b)//
// var b=82;
// if(b++===83)
// {
//     alert("given condition for variable b is true")
// }
// (c)
// var c=12;
// if(c++===13)
// {
//     alert("condition 1 is true")
// }
// if(c===13)
// {
//     alert("condition 2 is true")
// }
// if(++c<14)
// {
//     alert("condition 3 is true")
// }
// if(c===14)
// {
//     alert("condition4 is true")
// }
// (d)
// var materialcost=20000;
// var laborcost=2000;
// var totalcost=materialcost+laborcost;
// if(totalcost===laborcost+materialcost)
// {
//     alert(:the cost is equal)
// }
// (e)
// if(true)
// {
//     alert("true")
// }
// if(false)
// {
//     alert("false")
// }
// (f)
// if("car"<"cat")
// {
//     alert("car is smaller than cat")
// }
// **task 6**
// var totalmarks=prompt("enter the total marks")
// var obtained=prompt("enter the marks obtained")
// var per;
// var garde;
// var remarks;
// per=(obtained/totalmarks)*100;
// if(per>=80)
// {
//     garde='A-one'
//     remarks='Excellent'
// }
// else if(per>=70 && per<=80)
// {
//     garde='A'
//     remarks='Good'

// }
// else if(per>=60 && per<=70)
// {
//     garde='B'
//     remarks='YOU NEED TO IMPROVE'

// }
// else if(per<60)
// {
//     garde='Fail'
//     remarks='Sorry'
// }
// document.write(<"h1>MARKSHEET</h1><br>");
// document.write("total marks:" + totalmarks +"<br>");
// document.write("marks obtained:" + obtaine;d + "<br>");
// document.write("percentage:" + per +"< br>")
// document.write("grade:" + garde +"<br>");
// document.write("remarks:" + remarks + "<br>");
// **task 7** */
// var secret=7;
// var guess1;
// var guess=+prompt("guess the secret number")
// if(guess===secret)
// {
//     alert("BINGO!! CORRECT ANSWER");
// }
// guess1=guess+1;
// else if(guess1===secret)
// {
//     alert("close to the correct answer");
// }
// **task 8** */
// var number=+prompt("enter a number")
// if(number%3==0)
// {
//     alert("number is divisible by 3");
// }
// **task 9** */
// var number=+prompt("enter the number")
// if(number%2==0)
// {
//     alert("EVEN")
// }
// else
// {
//     alert("ODD")
// }
// **task 10 ** */
// var temp=+prompt("enter the temperature")
// if(temp>40)
// {
//     alert("too hot outside")
// }
// else if(temp>30)
// {
//     alert("wheather is normal")
// }
// else if(temp>20)
// {
//     alert("wheather is cool")
// }
// else if(temp>10)
// {
//     alert("OMG!! TODAY THE WHATHER IS VERY COOL")
// }
// **task 11** */
// var a=+prompt("Enter a number")
// var b=+prompt("Enter a number")
// var c=prompt("enter the operator")
// var d;
// if(c==='+')
// {
//     d=a+b;
//     document.write("The sum of " + a + " and " + b + " is " + d)
// }
// else if(c==='-')
// {
//     d=a-b;
//     document.write("The difference of " + a + " and " + b + " is " + d)
// }
// else if(c==='*')
// {
//     d=a*b;
//     document.write("The multiplication of " + a + " and " + b + " is " + d)
// }
// else if(c==='/')
// {
//     d=a/b;
//     document.write("The division of " + a + " and " + b + " is " + d)
// }
