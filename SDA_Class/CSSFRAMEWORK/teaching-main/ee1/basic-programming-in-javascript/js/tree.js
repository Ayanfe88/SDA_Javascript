function christmasTree(n) {
  var txt = '';
  for (i = 1; i <= n; i++) {
    txt = '';
    for (j = i; j <= n; j++) {
      txt += '*';
    }
    for (k = 0; k < i * 2 - 1; k++) {
      txt += ' ';
    }
    for (j = i; j <= n; j++) {
      txt += '*';
    }

    console.log(txt);
  }
}

function tree(number) {
  var txt = '';
  for (i = 0; i <= number; i++) {
    txt = '';
    console.log(txt);
    console.log(`first loop: ${i}`);
    debugger;
    for (j = 0; j < number; j++) {
      txt += '*';
      console.log(txt);
      console.log(`second loop: ${j}`);
      debugger;
    }
    for (k = 0; k < i * 2 - 1; k++) {
      txt += ' ';
      console.log(txt);
      console.log(`smaller than: ${i * 2 - 1}`);
      console.log(`third loop ${k}`);
      debugger;
    }
    console.log(txt);
  }
}
christmasTree(6);
//  i = 1 first forloop
//  j = 1 < 6
//  k < 1 * 2 - 1 = 1
// xxxxx*

// i = 2 first forloop
// j = 2 < 6
// k < 2 * 2 - 1 = 3
// xxxx***

// i = 3 < number  first forloop
// j = 3 < 6    second forloop
// k < 3 * 2 - 1 = 5
// XXX*****
