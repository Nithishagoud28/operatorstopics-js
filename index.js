//1.What is the result of 10 + '5'? 
let a=10;
let b='5';
let result = (10+'5')
console.log(result)//105

//2.What is the value of x after x = 10; x += 5;? 
let x=10;
x=x+5;
x+=5;
console.log(x)//20

//3.What is the result of 10 - null? 
let c=10;
let d=null;
let result1=(10-null)
 console.log(result1)//10

 //4. What is the value of x after x = 10; x *= 2;? 
 let x1=10;
 x1*=2;
 console.log(x1)//20

 //5. What is the result of 10 / '2'? 
 let a1=10;
 let b1='2';
 let result2=(10/'2')
 console.log(result2)//5

 //6.	What is the result of 10 % 3? 
 let c1=10;
 let d2=3;
 let result3=(10%3)
 console.log(result3)//1

 //7. What is the value of x after x = 10; x = x ** 2;? 
 let x11=10;
 x=x**2;
 console.log(x)//400

 //8. What is the result of 10 > 5 && 5 < 10? 
 let x22=10;
 let y22=5;
 console.log((10>5)&&(5<10))//true

 //9. What is the result of 10 === '10'? 
 let x21=10;
 let y21='10';
 console.log((10==='10'))//false

 //10.	What is the result of null ?? 'default'? 
 let x23=null;
 let y23='default';
 console.log((null??'default'))//default

 //11.	What is the result of 10 || 'default'? 
 let x24=null;
 let y24='default';
 console.log((null)||('default'))//default

 //12. What is the result of !true? 
 let x25=true
 console.log(!(true))//false

 //13. What is the result of 10 & 5? 
 let x26=10;
 let y26=5;
 console.log((10&5))//0

 //14.	What is the result of 10 | 5? 
 let x27=10;
 let y27=5;
 console.log((10|5))//15

 //15.	What is the result of 10 ^ 5? 
 let x28=10;
 let y28=5;
 console.log((10^5))//15

 //1. What is the result of x = 10; y = ++x;?  
//What are the values of x and y? 
let x3=10;
y3=++x3;
console.log(y3)
//the values of x and y are 10,11

//2.	What is the result of x = 10; y = x++;?  
//What are the values of x and y? 
let x31=10;
y31=x31++;
console.log(y31)
// the values of x any y are 10 ,10

//3. What is the result of x = 10; console.log(++x);? 
let x32=10;
console.log(++x32)//11

//4. What is the result of x = 10; console.log(x++);? 
let x34=10;
console.log(x34++)//10

//5.	What is the result of x = 10; y = --x;? 
 //What are the values of x and y? 
 let x35=10;
 y35=--x35;
 console.log(y35)//x=10,y=9

 //6.	What is the result of x = 10; y = x--;? 
 // What are the values of x and y? 
 let x4=10;
 y4=x4--
 console.log(y4)//x=10 y=10

 //Ternary Operators: 
 
//1.	What is the result of x = 10; y = x > 5 ? 'yes' : 'no';?  
//2.	What is the value of y? 
let x5=10;
y=x>5?console.log('yes'):console.log('no')//yes

//3.	What is the result of x = 10; y = x > 5 ? 'yes' : x > 3 ? 'maybe' : 'no';?
//4.	What is the value of y?  
let x6=10;
y=x>5?console.log('yes'):x>3?console.log('maybe'):console.log('no')//yes

//Optional Chaining: 
 
//1.	What is the result of const obj = { a: { b: 'c' } }; console.log(obj?.a?.b);? 
 const obj={
    a:{
        b:'c'
    }
}
console.log(obj?.a?.b)//c

//2.	What is the result of const obj = { a: { b: 'c' } }; console.log(obj?.a?.c);? 
const obj1={
    a:{
        b:'c'
    }
}
console.log(obj?.a?.c)//undefined

//3.	What is the result of const obj = { a: { b: 'c' } }; console.log(obj?.b?.c);? 
const obj2={
    a:{
        b:'c'
    }
}
console.log(obj?.b?.c)//undefined



