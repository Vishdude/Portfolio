var index = 0;
const contents = ['#about-me', '#projects','#skills', '#experience'];
const contentname = ['About Me', 'Projects','Skills', 'Experience'];

for (let i = 1; i < 4; i++){
	document.querySelector(contents[i]).style.display = "none";
}

document.querySelector("#back").addEventListener("click", function(){
	document.querySelector(contents[index]).style.display = "none";
	if (index == 0){
		index = 3;
	}
	else{
		index--;
	}
	document.querySelector(contents[index]).style.display = "";
	document.querySelector("#heading").innerText = contentname[index];

});

document.querySelector("#next").addEventListener("click", function(){
	document.querySelector(contents[index]).style.display = "none";
	if (index == 3){
		index = 0;
	}
	else{
		index++;
	}
	document.querySelector(contents[index]).style.display = "";
	document.querySelector("#heading").innerText = contentname[index];

});
