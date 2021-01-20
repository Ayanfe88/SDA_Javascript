console.log('i am connected');

// window.onload = () =>{
//     console.log('Loaded')
//     var button = document.querySelector('#button');
//     console.log(button);  
// }
window.onload = ()=> {
    // let xhr = new XHLHttpRequest();

    // // we specify a request method and address
    // xhr.open('GET', 'remote/data.html');

    // //sending a request
    // xhr.send();
    
    // xhr.onreadystatechange = function (e) {
    //     if (xhr.status === 200) {
    //       //everything OK, do something with the data
    //       console.log(xhr.responseText);
    //     } else {
    //       //some error occurred, log it in the console
    //       console.log('Error', xhr.statusText);
    //     }
    //   };

    // xhr.onload = (data)=> {
    //     console.log(data);
    //     let result = data.target.response;
    //     document.querySelector('#test1').innerHTML =result;
    // }

   let data = {
       name: "Femi",
       age: '11'
   };
    //we build an object, containing parameters for our request
    let options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    };
    // fetch('remote/data.html')
    fetch('https://api.github.com')
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      document.querySelector('#test1').innerHTML = JSON.stringify(data);
    });
}
 