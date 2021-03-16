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

		if(this == grids[4]){
			this.style.height = 50 + 'px';
			this.style.opacity = 0.3;

			document.getElementById('blok4').style.height= 0 + 'px';
		}
		if(this == grids[3]){
			this.style.height = 100 + 'px';
			this.style.opacity = 0.3;

			document.getElementById('blok3').style.height= 0 + 'px';
		}
		if(this == grids[2]){
			this.style.height = 150 + 'px';
			this.style.opacity = 0.3;

			document.getElementById('blok2').style.height= 0 + 'px';

		}
		if(this == grids[1]){
			this.style.height = 200 + 'px';
			this.style.opacity = 0.3;

			document.getElementById('blok1').style.height= 0 + 'px';

		}
}

		grids[4].addEventListener('touchstart', move);
		grids[3].addEventListener('touchstart', move);
		grids[2].addEventListener('touchstart', move);
		grids[1].addEventListener('touchstart', move);


for (var l=0; l<=1; l++){
	inps[l].onclick = function(){
		this.style.width = '250px';
		this.value = '';
	}
}

var int1 = setTimeout(function(){
	for(var o = 0; o<=4; o++){

		grids[o].style.opacity=1;

	}
}, 1000);

var int3 = setTimeout(function(){

	for(var gr = 0; gr<5; gr++){

		grids[gr].style.height = null;
		grids[gr].style.opacity = 1;

		for(var bok = 1; bok<=4; bok++){
			document.getElementById('blok'+bok).style.height = null;
		}
	}

}, 5000);

var hello = setTimeout(function(){

	document.getElementById('hello').style.opacity = 1;

}, 2000)

var buy = setTimeout(function(){
	document.getElementById('hello').style.opacity = 0;
}, 4000)