
function channelId(modelName) {
	return "channel-" + modelName;
}

function channelImgUrl(modelName) {
	return "https://roomimg.stream.highwebmedia.com/ri/" + modelName + ".jpg";
}

function channelActiveUrl(modelName) {
	return "https://cbjpeg.stream.highwebmedia.com/minifwap/" + modelName + ".jpg?f=" + Math.random();
}

function refreshChannel(model) {
	// todo
}

function initChannel(model, priority) {
	// todo
}

function updateChannel(model, priority) {
	// todo
}

function isOfflineImage(imgSize) {
	return (imgSize == 0 || imgSize == 7442 || imgSize == 21971 || imgSize == 4824 || imgSize == 6778 || imgSize == 6734);
}

