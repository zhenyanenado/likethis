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

function move(){

		if(this == grids[4]){
			this.style.height = 50 + 'px';
		}
		if(this == grids[3]){
			this.style.height = 100 + 'px';
		}
		if(this == grids[2]){
			this.style.height = 150 + 'px';
		}
		if(this == grids[1]){
			this.style.height = 200 + 'px';
		}
}

		grids[4].addEventListener('touchstart', move);
		grids[3].addEventListener('touchstart', move);
		grids[2].addEventListener('touchstart', move);
		grids[1].addEventListener('touchstart', move);


var int1 = setTimeout(function(){
	for(var o = 0; o<=4; o++){
		grids[o].style.opacity=1;
	}
}, 1000);


var int3 = setTimeout(function(){

	for(var gr = 0; gr<5; gr++){

		grids[gr].style.height = null;
	}

}, 7000);

