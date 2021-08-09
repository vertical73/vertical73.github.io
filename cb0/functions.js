
function channelId(modelName) {
	return "channel$" + modelName;
}

function channelImgUrl(modelName) {
	return "https://roomimg.stream.highwebmedia.com/ri/" + modelName + ".jpg";
}

function channelActiveUrl(modelName) {
	return "https://cbjpeg.stream.highwebmedia.com/minifwap/" + modelName + ".jpg?f=" + Math.random();
}

function createChannelBox(model) {
	const channelBox = tvBox.createElement('div');
	channelBox.id = channelId(model.name);
	channelBox.className = "model";
	channelBox.style.order = model.priority;
	channelBox.style.display = 'none';
	
	return channelBox;
}

function initChannel(model) {
	// todo
}

function refreshChannel(modelName) {
	// todo
}

// priority override optional
function updateChannel(model, priorityOveride) {
	// todo
}

function isOfflineImage(imgSize) {
	return (imgSize == 0 || imgSize == 7442 || imgSize == 21971 || imgSize == 4824 || imgSize == 6778 || imgSize == 6734);
}

