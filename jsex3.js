//part 1
var num=[2,4,6,8,10,12,14,16,18,20];
document.write(num + '<br>');

//part 2
document.write(num.length + '<br>');

//part 3
document.write(num[1]+','+num[3]+','+num[6]+'<br>');

//part 4
document.write(num.indexOf(10)+'<br>');

//part 5
num.splice(8,2);
document.write(num);

//part 6
var numname=[2,"two",4,"four",6,"six",10,"ten"];
document.write('<br>'+numname+'<br>');

//part 7
var students=["mazen","diana","aya"];

var mazen={
	eyesColor:"brown",
	name:"mazen",
	height:180+'cm',
};

var diana={
	eyesColor:"green",
	name:"diana",
	height:165+'cm',
};

var aya={
	eyesColor:"black",
	name:"aya",
	height:175+'cm',
};

document.write("mazen's eyes color is: "+ mazen.eyesColor + '<br>' + "mazen's height is: " + mazen.height + '<br>' + "my name is: "+mazen.name+'<br>');
document.write("diana's eyes color is: "+ diana.eyesColor + '<br>' + "diana's height is: " + diana.height + '<br>' + "her name is: "+diana.name+'<br>');
document.write("aya's eyes color is: "+aya.eyesColor + '<br>' + "aya's height is: " +aya.height + '<br>' + "her name is: "+aya.name+'<br>');

//part 8
students.shift();
document.write(students+'<br>');

//part 9
students.unshift("dotan");
document.write(students+'<br>');

//part 10
var dotan={
	name:"dotan",
	height:180+'cm',
	face:"",
};

var face={
	eyesColor:"gray"
};
	
