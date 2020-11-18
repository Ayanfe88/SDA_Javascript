function pythagoreanTriple(x,y,z) {
    
    if (x * x == y * y + z * z) {
      console.log(" Yes "); 
    }
    else if (y * y == x * x + z * z) {
        console.log(" Yes ");
    } 
    else if (z * z == x * x + y * y) {
        console.log(" Yes ");
    }
     else{
        console.log(" No ");
     }  
    
}
pythagoreanTriple(4,5,3);