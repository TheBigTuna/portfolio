$(document).ready(function(){
var memory = [];
var totalString;

var nine = $(".nine").click(function(){
memory.push(9);
$(".display").append('9');
});

var eight = $(".eight").click(function(){
memory.push(8);
$(".display").append('8');

});

var seven = $(".seven").click(function(){
memory.push(7);
$(".display").append('7');

});


var six = $(".six").click(function(){
memory.push(6);
$(".display").append('6');

});


var five = $(".five").click(function(){
memory.push(5);
$(".display").append('5');

});

var four = $(".four").click(function(){
memory.push(4);
$(".display").append('4');

});

var four = $(".three").click(function(){
memory.push(3);
$(".display").append('3');

});

var two = $(".two").click(function(){
memory.push(2);
$(".display").append('2');

});

var one = $(".one").click(function(){
memory.push(1);
$(".display").append('1');

});

var zero = $(".zero").click(function(){
memory.push(0);
$(".display").append('0');

});

var decimal = $(".decimal").click(function(){
memory.push('.');
$(".display").append('.');
});

var clear = $(".clear").click(function(){
$(".display").html('');
return memory = [];
});

var divide = $(".divide").click(function(){
memory.push('/');
$(".display").append('÷');

});

var multiply = $(".multiply").click(function(){
memory.push('*');
$(".display").append('*');

});

var minus = $(".minus").click(function(){
memory.push('-');
$(".display").append('-');

});

var plus = $(".plus").click(function(){
memory.push('+');
$(".display").append('+');

});

var equals = $(".equals").click(function(){
totalString = memory.join('');
$(".display").text(eval(totalString));
});
});