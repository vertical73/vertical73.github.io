var $$__Channels = new Map();
var $$__Images = new Map();

function renderChannel(value, key, map) {
	console.log("Writing channel box for " + key);

	let tvBox = document.getElementById("main");
	let channelBox = createChannelBox(value);
	let anchor = createAnchor(value);
	let img = tuneChannel(value);

	anchor.appendChild(img);
	channelBox.appendChild(anchor);
	tvBox.appendChild(channelBox);

	$$__Channels.set(key, channelBox);
	$$__Images.set(key, img);
}

$$__Models.forEach(renderChannel);

