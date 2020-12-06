const count = (function () {
    var counter = 0;
    return function () {
      return (counter += 1);
    };
  })();
  console.log(count());
  console.log(count());
  console.log(count());