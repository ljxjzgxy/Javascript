
//https://codepen.io/FlorinPop17/pen/OJJKQeK
function isEmail(email) {
	/*another one
	 const reg = /\b[\w.%+-]+@[\w.-]+\.[A-z]{2,6}\b/
        */
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


//regx thousand comma separator
function thousandSeparator(num,separator = ',') {
	const regInteger = /(?=(\B)(\d{3})+$)/g;
        const regFloat = /(?=(\B)((\d{3})+(\.\d*){1}$))/g;
	let reg = null
	if (Number(item) === item) { 
	    if(item % 1 === 0){ //integer
	      	reg = regInteger;
	    } else { // float
		reg = regFloat;
	    }
	}

	if(reg === null) return num;
	
	return num.toString().replace(reg,separator);	 
}
 

