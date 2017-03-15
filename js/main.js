
function getInfo(){

var userChoice = document.getElementById('userChoice').value



	var zodiacArray = [
		{
			sign: "dog",
			image: "img/dog.jpg",
			warning: "Dont pee in the pool"
		},
			{
			sign: "dragon",
			image: "img/dragon.jpg",
			warning: "Dont pee in the pool"
		},
			{
			sign: "goat",
			image: "img/goat.jpg",
			warning: "Dont pee in the pool"
		},
			{
			sign: "horse",
			image: "img/horse.jpg",
			warning: "Dont pee in the pool"
		},
			{
			sign: "monkey",
			image: "img/monkey.jpg",
			warning: "Dont pee in the pool"
		},
			{
			sign: "ox",
			image: "img/ox.jpg",
			warning: "Dont pee in the pool"
		},
			{
			sign: "pig",
			image: "img/pig.jpg",
			warning: "Dont pee in the pool"
		},
			{
			sign: "rabbit",
			image: "img/rabbit.jpg",
			warning: "Dont pee in the pool"
		},
			{
			sign: "rat",
			image: "img/rat.jpg",
			warning: "Dont pee in the pool"
		},
			{
			sign: "rooster",
			image: "img/rooster.jpg",
			warning: "Dont pee in the pool"
		},
			{
			sign: "snake",
			image: "img/snake.jpg",
			warning: "Dont pee in the pool"
		},
			{
			sign: "tiger",
			image: "img/tiger.jpg",
			warning: "Dont pee in the pool"
		}

	]

	for(var i=0; i< zodiacArray.length; i++){
		if(zodiacArray[i].sign===userChoice){
			document.getElementById('img').src = zodiacArray[i].image
		}
	}
		
}
