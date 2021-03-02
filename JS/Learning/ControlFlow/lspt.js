let layout = isLandscape(500,450)
console.log(layout);

function isLandscape(width, height){
   // if(width>height) return true;
   // return false;

   return (width>height) ? true : false;    
}