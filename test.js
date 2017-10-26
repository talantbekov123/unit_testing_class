var binary_search = require('./binary');

module.exports = function() {
	/* Test cases */
	var testOdd = function() {
		var lists = [[1,3,5,7,9,11,13,15],[15,13,13,43,1,-15],[231,321,231,231,321]];
		var values = [5,19,231];
		var result = [true,false,true];

		for(var i = 0; i < lists.length; i++) {
			var res = binary_search(lists[i],values[i])
			if(res == result[i]) {
				console.log('OK, test pass');
			} else {
				console.log('ERROR, wrong test. list, values, your result', lists[i],values[i],res);
			}
		}
	}

	var testEven = function() {
		var lists = [[2,4,4,90,8,12],[0,0,0,0,0,0,0,0,0,2]];
		var values = [6,3];
		var result = [false,false];

		for(var i = 0; i < lists.length; i++) {
			var res = binary_search(lists[i],values[i])
			if(res == result[i]) {
				console.log('OK, test pass');
			} else {
				console.log('ERROR, wrong test. list, values, your result', lists[i],values[i],res);
			}
		}
	}

	var testBoudaries = function(){
		var lists = [[2,4,4,90,8,12],[0,0,0,0,0,0,0,0,0,2]];
		var values = [12,0];
		var result = [true,true];

		for(var i = 0; i < lists.length; i++) {
			var res = binary_search(lists[i],values[i])
			if(res == result[i]) {
				console.log('OK, test pass');
			} else {
				console.log('ERROR, wrong test. list, values, your result', lists[i],values[i],res);
			}
		}
	}

	/* Main */
	testEven()
	testOdd()
	testBoudaries()
}