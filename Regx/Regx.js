
//https://codepen.io/FlorinPop17/pen/OJJKQeK
function isEmail(email) {
	/*another one
	 const reg = /\b[\w.%+-]+@[\w.-]+\.[A-z]{2,6}\b/
        */
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


//regx thousand comma separator
function thousandSeparator(num,separator = ',') {
	const reg = /(?=(\B)(\d{3})+$)/g;
	return num.replace(reg,separator);	 
}
 

