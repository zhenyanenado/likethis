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


	var obj1 = {

		name: document.getElementById('grid5').style,

			funcTouch: function(){

				grids[i].addEventListener('touchmove', function(){

					var clX = event.touches[0].pageX;
						
						if(clX > 50 && clX < 520){
							obj1.name.width = clX + 'px';
						}

				})
			}
		}




obj1.funcTouch();

var hello = setTimeout(function(){
	document.getElementById('grid10').style.opacity = 1;
}, 500)


var int2 = setTimeout(function(){
	for(var o = 0; o<=4; o++){
		grids[o].style.opacity=1;
}
}, 1000)

var int4 = setTimeout(function(){

	for(var li = 0; li<4; li++){
		slideGrids[li].style.opacity = 0.3;
	}

}, 5000)

var int3 = setTimeout(function(){
	for(var m = 0; m<4; m++){
		slideGrids[m].style.opacity = 0.3;
	}
})

