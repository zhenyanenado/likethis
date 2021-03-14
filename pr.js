var number = 1;

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
		var clX = event.touches[0].pageX;
			
				this.style.width = clX + 'px';
			}
		

		grids[4].addEventListener('touchmove', move);
		grids[3].addEventListener('touchmove', move);
		grids[2].addEventListener('touchmove', move);
		grids[1].addEventListener('touchmove', move);




var int1 = setTimeout(function(){
	for(var o = 0; o<=4; o++){
		grids[o].style.opacity=1;
	}
}, 1000)

var int2 = setTimeout(()=>{
	for(var q = 0; q<4; q++){
		slideGrids[q].style.opacity=1;
	}
}, 1000)