day = 08;
month = 03;
year = 2002;

step1 = 02;
step2 = parseInt(step1/4); //0
step3 = step2 + step1; //2
step4 = 3; //February number on table
step6 = step3 + step4; //5
step7 = step6 + day; //13
step8 = step7 - 1 ; //not a leap year, 12
step9 = step8 % 7; //remainder of 12/7
console.log(step9); //0