//https://teachablemachine.withgoogle.com/models/Ek2h7NkZ3/
Webcam.set({
    width:350, 
    height:350,
    image_format:"png",
    png_quality:100
});
cam=document.getElementById("Camera");
Webcam.attach("#Camera");

function Cap() {
    Webcam.snap(function(data_uri){
        document.getElementById("output").innerHTML='<img  id="capturnIM" src="'+data_uri+'"/>'
    });
}
port=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Ek2h7NkZ3/model.json", modelloaded);
function modelloaded() {
    console.log("dreammodel is loaded!");
    }
    
    function prediced() {
        mage=document.getElementById("capturnIMG");
        port.classify(mage,gotresult);
    }
    
    function gotresult(error,results) {
        if (error) {                                                                                                                                                  
            console.log(error);
        }
        else{
        console.log(results)
        document.getElementById("emoition05").innerHTML=results[0].label;
        document.getElementById("emoition1").innerHTML=results[1].label;
        if (results[0].label=="good") {
            document.getElementById("emoji05").innerHTML="&#128077;"; 
        }
        if (results[0].label=="perfect") {
            document.getElementById("emoji05").innerHTML="&#128076;"; 
        }
        if (results[0].label=="win") {
            document.getElementById("emoji05").innerHTML="&#9996;"; 
        }
        }
    }