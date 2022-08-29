//refer to https://youtu.be/4Ej0LwjCDZQ?t=1078
const deepClone =(obj)=>{
  if(typeof obj !=="object" || obj ===null) return obj;
  
  const newObject = Array.isArray(obj)? [] : {};
  
  for(const key in obj){
    const value = obj[key];    
    newObject[key] = deepClone(value);
  }
  return newObject;
}


//solution two, https://javascript.info/prototype-methods
let clone = Object.create(
  Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj)
);
