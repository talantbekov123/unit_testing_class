module.exports = function (list, value) {
	list.sort();
	var l = 0, r = list.length - 1;
	while(true) {
		if(Math.abs(r - l) == 1) {
			break;
		}
		var mid = l + parseInt((r - l) / 2);
		if(list[mid] > value) {
			r = mid
		} else {
			l = mid
		}
	}
	if(list[l] == value || list[r] == value) {
		return true
	} else {
		return false
	}
}