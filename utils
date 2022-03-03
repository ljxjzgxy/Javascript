const points = [40, 100, 1, 5, 25, 10]; 


//Random Array
function FisherYates() {
  for (let i = points.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * i)
    let k = points[i]
    points[i] = points[j]
    points[j] = k
  }
}

const generalRandom =()=>{
  points.sort((a,b)=>0.5-Math.random());
}
//----------End Random Array


// Random between min and max
//Max excluded
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

// Include max
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
//-------End Random between min and max



