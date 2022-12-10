Webcam.attach("#camara")
var camera = document.getElementById("camara")
Webcam.set({
 width:280, height: 280, image_format: "jpg", jpg_quality: 90
});
function foto(){
    Webcam.snap(function(data_uri){
        document.getElementById("objecto").innerHTML = '<img src='+ data_uri +' id="objecto1">'
    })
}
console.log("versiondeml5", ml5.version)
var Xd = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/L2T6ZwMhW/model.json", cargarModelo)
function cargarModelo(){
    console.log("elmodeloyasecargo")
}
https://teachablemachine.withgoogle.com/models/m7Pxzl2VK/

function identificar(){
 var guardarfoto = document.getElementById("objecto1")
 Xd.classify(guardarfoto, gotResult)
}

function gotResult(error,results){
    if(error){console.error(error)}
    else{
        console.log(results)
        document.getElementById("objectoreconocido").innerHTML = results[0].label
        document.getElementById("precision").innerHTML = results[0].confidence
    }
}