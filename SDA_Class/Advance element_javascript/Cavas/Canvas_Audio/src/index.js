const canvas = document.getElementById("canvas");
const audio = document.getElementById("audio");
const button = document.getElementById("start");

const fetchAudio = async () => {
  // Fetch the data from https://lit.ee/canvas/YOUR_SONG_NAME.mp3
  const response = await fetch("https://lit.ee/canvas/song_o.mp3");
  return response.blob();
  console.log(response);
};

button.onclick = () => {
  // Call the fetch function here.
  
  // Then send the data to initializeAudio
  // Afterwards modify the dom to hide the button and show the audio element.

  button.classList.add("hide");
  audio.classList.add("show");
  fetchAudio().then((data) =>{
    initializeAudio(data);
  })
};
function reportWindowSize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.onresize = reportWindowSize;

const initializeAudio = (data) => {
  audio.src = URL.createObjectURL(data); // Creates a DOMString containing the specified File object

  ///////// <CANVAS> INITIALIZATION //////////
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext("2d");
  ///////////////////////////////////////////

  const context = new AudioContext(); // (Interface) Audio-processing graph
  let src = context.createMediaElementSource(audio); // Give the audio context an audio source,
  // to which can then be played and manipulated
  const analyser = context.createAnalyser(); // Create an analyser for the audio context

  src.connect(analyser); // Connects the audio context source to the analyser
  analyser.connect(context.destination); // End destination of an audio graph in a given context
  // Sends sound to the speakers or headphones

  /////////////// ANALYSER FFTSIZE ////////////////////////
  // analyser.fftSize = 32;
  // analyser.fftSize = 64;
  // analyser.fftSize = 128;
  // analyser.fftSize = 256;
  // analyser.fftSize = 512;
  // analyser.fftSize = 1024;
  // analyser.fftSize = 2048;
  // analyser.fftSize = 4096;
  // analyser.fftSize = 8192;
  analyser.fftSize = 16384;
  // analyser.fftSize = 32768;

  // (FFT) is an algorithm that samples a signal over a period of time
  // and divides it into its frequency components (single sinusoidal oscillations).
  // It separates the mixed signals and shows what frequency is a violent vibration.

  // (FFTSize) represents the window size in samples that is used when performing a FFT

  // Lower the size, the less bars (but wider in size)
  ///////////////////////////////////////////////////////////

  const bufferLength = analyser.frequencyBinCount; // (read-only property)
  // Unsigned integer, half of fftSize (so in this case, bufferLength = 8192)
  // Equates to number of data values you have to play with for the visualization

  // The FFT size defines the number of bins used for dividing the window into equal strips, or bins.
  // Hence, a bin is a spectrum sample, and defines the frequency resolution of the window.

  const dataArray = new Uint8Array(bufferLength); // Converts to 8-bit unsigned integer array
  // At this point dataArray is an array with length of bufferLength but no values
  console.log("DATA-ARRAY: ", dataArray); // Check out this array of frequency values!

  const barWidth = (canvas.width / bufferLength) * 7;
  let barHeight;
  let barSpace = 0;
  console.log(barWidth);
  console.log(barHeight);
  console.log(barSpace);

  function renderFrame() {
    requestAnimationFrame(renderFrame);
    barSpace = 0;
    analyser.getByteFrequencyData(dataArray);
    ctx.fillStyle = "rgb(39,20,61)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    let bars = 168;

    let r,g,b;
    for (let i = 0; i < bars; i++) {
      barHeight = dataArray[i] * 2.5;
      if(dataArray[i] > 210){
        r = 250;
        g = 0;
        b = 255;
      }else if(dataArray[i] > 200){
        r = 250;
        g = 255;
        b = 0;
      }else if(dataArray[i] > 190){
        r = 205;
        g = 255;
        b = 0;
      }else if(dataArray[i] > 180){
        r = 0;
        g = 220;
        b = 130;
      }else{
        r = 0;
        g = 200;
        b = 255;
      }

    ctx.fillStyle = `rgb(${r},${g},${b})`
    // ctx.fillStyle = "rgb(225,225,225)";
    console.log(barSpace);
    ctx.fillRect(barSpace, canvas.height - barHeight, barWidth, barHeight);
    barSpace += barWidth + 14;
  }
  }

  audio.play();
  renderFrame();
};
