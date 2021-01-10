console.log('i am connected');

// window.onload = () =>{
//     console.log('Loaded')
//     var button = document.querySelector('#button');
//     console.log(button);  
// }
window.onload = ()=> {
    let xhr = new XHLHttpRequest();

    // we specify a request metyhod and address
    xhr.open('GET', 'remote/data.html');

    //sending a request
    xhr.send();
    
    xhr.onreadystatechange = function (e) {
        if (xhr.status === 200) {
          //everything OK, do something with the data
          console.log(xhr.responseText);
        } else {
          //some error occured, log it in the console
          console.log('Error', xhr.statusText);
        }
      };

    xhr.onload = (data)=> {
        console.log(data);
        let result = data.target.response;
        document.querySelector('#test1').innerHTML =result;
    }
}
 