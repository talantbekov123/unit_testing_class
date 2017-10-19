

var list = [2,3,5,2,1];
var value = [5,1,2]

var binary_search = function (list, value) {

	list.sort();
	var l = 0, r = list.length;
	while(true) {
		console.log(l,r)
		if(r <= l) {
			break;
		}
		var mid = l + parseInt((r - l) / 2);
		if(list[mid] > value) {
			r -= mid
		} else {
			l += mid
		}
	}
	console.log(l,r);
	if(list[l] == value || list[r] == value) {
		return true
	} else {
		return false
	}
}


console.log(binary_search(list, value))