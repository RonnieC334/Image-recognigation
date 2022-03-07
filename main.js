Webcam.set({
    width : 350,
    height : 300,
    image_format : "png",
    png_quality : 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot() {
  Webcam.snap( function(data_uri) {
    // display results in page
    document.getElementById('result').innerHTML = 
     '<img id="captured_image" src="'+data_uri+'"/>';
} );  
}

console.log('version',ml5.version);

classfier = ml5.imageClassifier('', modelloded);