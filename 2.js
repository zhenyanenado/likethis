document.addEventListener('DOMContentLoaded', function(){

	const main = document.getElementById('grid');
	const grids = [];

	function create(){

		for(let a = 1; a<=3; a++){
			let all = document.createElement('div');
				all.id='grid'+a;
				main.append(all);
				grids.push(document.getElementById('grid'+a))

				
		}

	}

	create();


			document.getElementById('grid3').addEventListener('touchstart', function(){
		
			let position = event.touches[0].pageX;

				this.style.height = 0 + 'px';

			})
		
			document.getElementById('grid2').addEventListener('touchstart', function(){
		
			let position = event.touches[0].pageX;

				this.style.height = 0 + 'px';

			})

			document.getElementById('grid1').addEventListener('touchstart', function(){
		
			let position = event.touches[0].pageX;

				this.style.height = 0 + 'px';

			})




})

