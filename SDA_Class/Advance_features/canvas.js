// const canvas = document.getElementById('sad-canva');

// let ctx = canvas.getContext("2d");//rendering content in the first thing

// ctx.fillStyle ="rgb(200,0,0)"
// ctx.fillRect(10,10,40,40);

// ctx.moveTo(0,0);
// ctx.lineTo(200,0);
// ctx.stroke();

// ctx.font ="24px Arial"
// ctx.fillText('SDA',10,50);

// ctx.beginPath();
// ctx.arc(50,50,30,0, 2 *Math.PI);
// ctx.stroke();

// let gradient = ctx.createLinearGradient(0, 0, 200, 0);
// gradient.addColorStop(0, "white");
// gradient.addColorStop(1, "red");
// ctx.fillStyle = gradient;
// ctx.fillRect(10, 10, 150, 100);

const canvas = document.getElementById("sda-canvas");
    let ctx = canvas.getContext("2d");
    ctx.font = "24px Arial";
    ctx.fillText("SDA", 10, 50)
    function allowDrop(ev){
        ev.preventDefault();
    }
    function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
        console.log("we captured the elemet!!")
    }
    function drop(ev){
        ev.preventDefault();
        let data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
        console.log("Element Fazing")
    }