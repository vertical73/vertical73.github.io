var $$__Channels = new Map();

function renderChannel(value, key, map) {
	console.log("Writing channel box for " + key);
	let modelBox = createChannelBox(value);
	let tvBox = document.getElementById("main");
	tvBox.appendChild(modelBox);
}

$$__Models.forEach(renderChannel);

