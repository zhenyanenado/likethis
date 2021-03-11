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

var hello = setTimeout(function(){
	document.getElementById('grid10').style.opacity = 1;
}, 500)

for(var i = 4; i>=1; i--){
		var num1 = 3;
		grids[i].ontouchstart = function(){

		var clX = event.touches[0].pageX;
			this.style.width = 0 + 'px';

				slideGrids[num1].style.opacity = 1;
				num1--;

		}
}

var int2 = setTimeout(function(){
	for(var o = 1; o<=9; o++){
		document.getElementById('grid'+o).style.opacity=1;
}
}, 1000)