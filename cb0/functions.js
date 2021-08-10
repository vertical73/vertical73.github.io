
function channelId(modelName) {
	return "channel$" + modelName;
}

function channelImgId(modelName) {
	return "img$" + modelName;
}

function channelImgUrl(modelName) {
	return "https://roomimg.stream.highwebmedia.com/ri/" + modelName + ".jpg";
}

function channelActiveUrl(modelName) {
	return "https://cbjpeg.stream.highwebmedia.com/minifwap/" + modelName + ".jpg?f=" + Math.random();
}

function chaturbateUrl(modelName) {
	return "https://m.chaturbate.com/" + modelName + "/";
}

function createChannelBox(model, priorityOverride) {
	const channelBox = document.createElement('div');
	channelBox.id = channelId(model.name);
	channelBox.className = "model";
	
	let priority;
	if (priorityOverride === undefined) {
		priority = model.priority;
	} else {
		console.log(model.name + " -> " + priorityOverride);
		priority = priorityOverride;
	}
	channelBox.style.order = priority;

	channelBox.style.display = 'none';
	
	return channelBox;
}

function createAnchor(model) {
	const anchor = document.createElement('a');
	anchor.href = chaturbateUrl(model.name);
	anchor.target = "_blank";
	
	return anchor;
}

function createImg(modelName) {
	const img = new Image();
	img.id = channelImgId(modelName);
	img.src = channelActiveUrl(modelName);
	
	return img;
}

function turnOn(modelName, channelBox) {
	channelBox.style.display = 'inline';
	document.getElementById(channelImgId(modelName)).src = channelImgUrl(modelName);
}

function turnOff(channelBox) {
	channelBox.style.display = 'none';
}

function isOfflineImage(imgSize) {
	return (imgSize == 0 || imgSize == 4456 || imgSize == 7442 || imgSize == 21971 || imgSize == 4824 || imgSize == 6778 || imgSize == 6734);
}

