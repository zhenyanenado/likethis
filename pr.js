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
	for(var o = 0; o<=4; o++){
		grids[o].style.opacity=1;
}
}, 1000)

var int3 = setTimeout(function(){
	for(var m = 0; m<=4; m++){
		slideGrids[m].style.opacity = 0.3;
	}
})

var int4 = setTimeout(function(){
	for(var q = 0; q<grids.length; q++){
		grids[q].style.width = null;
	}

}, 5000)