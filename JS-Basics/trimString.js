// trim given characters for both ends of a string 
function trimSpecial(strValue, charToTrim){  
  if(!strValue) return "";
  const pattern  = new RegExp(`^\\${charToTrim}+|\\${charToTrim}+$`,"g");

  return strValue.replace(pattern, '');  
}
