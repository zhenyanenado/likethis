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


function m(){


				grids[4].addEventListener('touchmove', function(){



					var clX = event.touches[0].pageX;
						
						if(clX > 50 && clX < 510){
							document.getElementById('grid5').style.width = clX + 'px';
						}

						if(clX < 300){

							slideGrids[3].style.opacity = 1;

							number-=0.03;
							document.getElementById('grid5').style.opacity = number;
						}

						if(clX > 200){
							number+=0.08;
							document.getElementById('grid5').style.opacity = number;
						}


				})


			}

m();

var int1 = setTimeout(function(){
	for(var o = 0; o<=4; o++){
		grids[o].style.opacity=1;
	}
}, 1000)

var int2 = setTimeout(()=>{
	for(var q = 0; q<4; q++){
		slideGrids[q].style.opacity=0.3;
	}
}, 1000)