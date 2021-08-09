var $$__Channels = new Map(); // model.name -> channelBox
var $$__Images = new Map(); // model.name -> img
var $$__Active = new Map(); // model.name -> img
var $$__Offline = new Map(); // model.name -> img

var $$__ImgSizeHistory = new Map();

function scanChannel(model, imgBox) {
	
	// let imgScan = fetch(channelImgUrl(model.name), {method: 'HEAD'})
	// 	.then(
	// 		function(response) {
	// 			return response.headers.get("content-length");
	// 		}
	// 	);

	let imgScan = fetch(channelActiveUrl(model.name))
		.then(
			function(response) {
				return response.blob();
			}
		).then(
			function(blob) {
				return blob.size;
			}
		);
	
	return imgScan.then(
			function(imgSize) {
				console.log(model.name + " -> " + imgSize);
				if (! isOfflineImage(imgSize)) {
					$$__Active.set(model.name, imgBox);
					turnOn($$__Channels.get(model.name));
				} else {
					$$__Offline.set(model.name, imgBox);
					turnOff($$__Channels.get(model.name));
				}
			}
		);
}

function refreshChannel(value, key, map) {
	value.src = channelActiveUrl(key);
}

function refreshing() {
	$$__Active.forEach(refreshChannel);
}

function checking() {
	// todo
}

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
	
	scanChannel(value, img);
}

$$__Models.forEach(renderChannel);

setInterval(refreshing, 250);
