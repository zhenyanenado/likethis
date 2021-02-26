for(var i=1; i<=8; i++){

	var grids = document.createElement('div');
		grids.id = 'pod'+i;
		document.getElementById('grid1').append(grids);

		grids.style.position = 'relative';
		grids.style.marginTop='5px';
		grids.style.marginLeft = '5px';
		grids.style.transition = '0.3s all ease';
		grids.onclick = function(){
			this.style.opacity = 0;
			this.style.transform = 'rotate(90deg)';
		}
}

document.getElementById('pod1').onclick = function(){
	this.style.backgroundImage = 'url(2.jpg)';
}

document.getElementById('pod1').ondblclick = function(){
	this.style.backgroundImage = 'url(1.jpg)';
}
