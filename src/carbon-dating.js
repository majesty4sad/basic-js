const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;


module.exports = function dateSample(sampleActivity) {
	if("string" != typeof(sampleActivity) || isNaN(parseFloat(sampleActivity))) {
		return false;
	}
	var result = 0;
	result = Math.ceil(HALF_LIFE_PERIOD * Math.log(MODERN_ACTIVITY/parseFloat(sampleActivity))/0.693);
	if (result > 0 && result != Infinity)
		return result;
	else 
		return false;
};
