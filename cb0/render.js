const $$__Channels = new Map(); // model.name -> channelBox
const $$__Active = new Map(); // model.name -> img
const $$__Offline = new Set(); // model.name

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
				
				let imgSizeArr;
				
				if ($$__ImgSizeHistory.has(modelName)) {
					imgSizeArr = $$__ImgSizeHistory.get(modelName);
					if (imgSizeArr.length >= 3) {
						imgSizeArr.shift();
					}
					imgSizeArr.push(imgSize);
				} else {
					imgSizeArr = [imgSize];
				}
				$$__ImgSizeHistory.set(modelName, imgSizeArr);
				
				console.log(modelName + " -> " + imgSizeArr);

				let isStreaming = (
					(imgSizeArr.length < 3)
					|| (! imgSizeArr.every(s => (s === imgSize)))
				);

				if (isStreaming && (! isOfflineImage(imgSize))) {
					$$__Active.set(modelName, imgBox);
					$$__Offline.delete(modelName);
					turnOn($$__Channels.get(modelName));
				} else {
					$$__Offline.add(modelName);
					$$__Active.delete(modelName);
					turnOff($$__Channels.get(modelName));
				}
			}
		);
}

function refreshChannel(img, modelName, map) {
	img.src = channelActiveUrl(modelName);
}

function getActiveMap() {
	return $$__Active;
}

function refreshing() {
	let activeMap = getActiveMap();
	activeMap.forEach(refreshChannel);
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
	let img = createImg(model.name);

	anchor.appendChild(img);
	channelBox.appendChild(anchor);
	tvBox.appendChild(channelBox);

	$$__Channels.set(modelName, channelBox);
	
	scanChannel(modelName, img);
}

$$__Models.forEach(renderChannel);

setInterval(refreshing, 256);

setInterval(checking, 8192, $$__Active);

setInterval(checking, 32768, $$__Offline);

