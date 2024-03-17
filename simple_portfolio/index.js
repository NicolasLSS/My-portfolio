const Letters="ABCDEFGHIJKLMNOPQRSTUVHXYZ#@!/[]123456789";

var AnimInterval=0;

if(Letters != null && AnimInterval != null){

	AnimStart();
}
else{
	
}
function AnimStart (argument) {

	document.querySelector("h2").onmouseover = event =>{

	if(AnimInterval==0){
		AnimInterval+=1;


		let iterations = 0;

	const interval = setInterval(() => {
		event.target.innerText = event.target.innerText.split("").map((letter,index) => {
			if(index < iterations){
				return event.target.dataset.value[index];
			}
			return Letters[Math.floor(Math.random() * 26)]
		}).join("");

		if(iterations>=event.target.dataset.value.length){
			clearInterval(interval);
			AnimInterval-=1;
		}
		iterations += 1/2;
	},30);


	}
}
}
