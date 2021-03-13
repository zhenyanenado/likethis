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

				grids[4].addEventListener('touchmove', function(){

					var clX = event.touches[0].pageX;
						
						if(clX > 50 && clX < 520){
							obj1.name.width = clX + 'px';
						}

				})
			}
		}




obj1.funcTouch();


var int1 = setTimeout(function(){
	for(var o = 0; o<4; o++){
		grids[o].style.opacity=1;
	}
}, 1000)

var int2 = setTimeout(()=>{
	for(var q = 0; q<4; q++){
		slideGrids[o].style.opacity=1;
	}
}, 1000)