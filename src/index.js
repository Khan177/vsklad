function toggleActive(i){
	const x = document.getElementsByClassName("second-nav-link");
	for(let j = 0;j<x.length;j++){
		x[j].classList.toggle("active",false);
	}
	x[i].classList.toggle("active",true);
}