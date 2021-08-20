//https://teachablemachine.withgoogle.com/models/c2yrucY-G/
Webcam.set({
    width: 400,
    height: 350,
    image_format: 'png',
    png_quality: 90
})

camera = document.getElementById("camera");
Webcam.attach("#camera");

function Capture() {
    Webcam.snap(function (data_uri) {
        document.getElementById("captured_picture").innerHTML = "<img id= 'picture' src= '" + data_uri + "'>"
    })
};
//ml starts here:
console.log("ML5 version-", ml5.version)
//classifier= variable that holds the model
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/c2yrucY-G/model.json', modeLoaded)

function modeLoaded() {
    console.log("Model Loaded successfully!");
}

function Compare() {
    img = document.getElementById("picture");
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("obj_name").innerHTML = results[0].label
        document.getElementById("obj_name").style.display= "inline-block"
        per = results[0].confidence.toFixed(3);
        percentage = per * 100;
        document.getElementById("acc").innerHTML = percentage + "%"
        document.getElementById("acc").style.display= "inline-block"

    }
}