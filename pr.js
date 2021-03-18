var number = 0;

var grids = [

	document.getElementById('grid1'),
	document.getElementById('grid2'),
	document.getElementById('grid3'),
	document.getElementById('grid4'),
	document.getElementById('grid5')

];

var slideGrids = [

	document.getElementById('grid6'),
	document.getElementById('grid7'),
	document.getElementById('grid8'),
	document.getElementById('grid9')

];

var inps = [

	document.getElementById('inp1'),
	document.getElementById('inp2')

];

function move(){

		var pos = event.touches[0].pageY;

		if(this == grids[4]){

				this.style.height = pos - 250 + 'px';

		}
		if(this == grids[3]){

				this.style.height = pos - 250 + 'px';
		}
		if(this == grids[2]){

				this.style.height = pos - 250 + 'px';

		}
		if(this == grids[1]){

				this.style.height = pos - 250 + 'px';

		}
}

		grids[4].addEventListener('touchmove', move);
		grids[3].addEventListener('touchmove', move);
		grids[2].addEventListener('touchmove', move);
		grids[1].addEventListener('touchmove', move);


for (var l=0; l<=1; l++){
	inps[l].onclick = function(){
		this.style.width = '170px';
		this.value = '';
	}
}
var int1 = setTimeout(function(){
	for(var o = 0; o<=4; o++){
		grids[o].style.opacity=1;
	}
}, 1000);

var link = setTimeout(function(){
	for(var p=1; p<=4; p++){
		document.getElementById('l'+p).style.opacity=1;
	}
}, 2000)

var int3 = setTimeout(function(){
	for(var gr = 0; gr<5; gr++){
		grids[gr].style.height = null;
		grids[gr].style.opacity = 1;

		for(var bok = 1; bok<=4; bok++){
			document.getElementById('blok'+bok).style.height = null;
		}
	}
}, 15000);

var hello = setTimeout(function(){
	document.getElementById('hello').style.opacity = 1;
}, 2000);

var buy = setTimeout(function(){
	document.getElementById('hello').style.opacity = 0;
}, 4000);

function nope(){

		for(var k = 0; k<=1; k++){
			inps[k].value = '';
			inps[k].style.width = null;
	}
}

document.getElementById('b1').onclick = nope;
document.getElementById('b2').onclick = nope;

