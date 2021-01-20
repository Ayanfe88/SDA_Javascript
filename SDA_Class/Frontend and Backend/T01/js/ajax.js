// JavaScript Document

//a function to obtain a single item of data, under a given id
    const getId = (id) => {
    const url = 'https://jsonplaceholder.typicode.com/albums/' + id;
    fetch(url).then((response)=> {
            console.log(response);//TODO take JSON data from the response
            return response.json(); //or throw an error if necessary
        })
        .then((data) =>{
            document.querySelector("#test2").innerHTML = url;//TODO display data in console
            const putTest = document.getElementById('test2');//and put it somewhere in DOM
        })
        .catch((error) => {
            alert(error);
        });
}
const buttonGenerator = () => {
    let buttonDiv = document.querySelector('#buttonBody');
    for (let i = 1; i <=10; i++){
        let temp =  document.createElement('button');
            temp.addEventListener('click', () => getId(i));
            temp.textContent = i.toString();
        buttonDiv.appendChild(temp);
    }
}
//when window is loaded...
window.onload = ()=> {
buttonGenerator();
    //TODO create some event listeners that will call your function when user clicks something
}
