function christmasTree(n) {
    //to print numbers of rows or height
    for (var i = 1; i <= n; i++) {
        
        for (var j = i; j <= n; j++) {  
        }
        // buiding the tree pyramid
        for (var j = 1; j <=(2*i-1); j++) {
            document.write("*");
        }
         document.write("<br>");
    }
}
christmasTree(8)

