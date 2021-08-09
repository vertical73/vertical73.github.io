var $$__Channels = new Map(); // model.name -> channelBox
var $$__Images = new Map(); // model.name -> img
var $$__Active = new Map(); // model.name -> img
var $$__Offline = new Map(); // model.name -> img

var $$__ImgSizeHistory = new Map(); // model.name -> [imgSize]

function scanChannel(modelName, imgBox) {	
	let imgScan = fetch(channelActiveUrl(modelName))
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
				console.log("[" + Date.now() + "] " + modelName + " -> " + imgSize);
				$$__ImgSizeHistory.set(modelName, [imgSize]);
				if (! isOfflineImage(imgSize)) {
					$$__Active.set(modelName, imgBox);
					$$__Offline.delete(modelName);
					turnOn($$__Channels.get(modelName));
				} else {
					$$__Offline.set(modelName, imgBox);
					$$__Active.delete(modelName);
					turnOff($$__Channels.get(modelName));
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

function check(img, modelName, imgMap) {
	scanChannel(modelName, img);
}

function checking(map) {
	map.forEach(check);
}

function renderChannel(model, modelName, models) {
	console.log("Writing channel box for " + modelName);

	let tvBox = document.getElementById("main");
	let channelBox = createChannelBox(model);
	let anchor = createAnchor(model);
	let img = tuneChannel(model);

	anchor.appendChild(img);
	channelBox.appendChild(anchor);
	tvBox.appendChild(channelBox);

	$$__Channels.set(modelName, channelBox);
	$$__Images.set(modelName, img);
	
	scanChannel(modelName, img);
}

$$__Models.forEach(renderChannel);

setInterval(refreshing, 250);

setInterval(checking, 5000, $$__Active);

setInterval(checking, 30000, $$__Offline);

