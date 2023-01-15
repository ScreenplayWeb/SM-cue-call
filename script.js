var results = [];

function startListening(){
    //if (document.getElementById("op_cont").checked === true) {
        console.log("It's continuous");
        recog.continuous = true;
   // }
    // if (document.getElementById("op_intrm").checked === true) {
        // console.log("Showing interim results...");
        // recognition.interimResults = true;
    // }            
        recog.start();//#2
        //startListen.style.backgroundColor = "green";
        //startListen.style.color = "#00ff00";
        //startListen.style.border = "2px solid #00ff00";
}

function stopListening(){
    recog.stop();//#2
    console.log("STOPPED");
}
//window.onload = function() {
    var out1 = document.getElementById("output1");
	var out2 = document.getElementById("output2");
	var out3 = document.getElementById("output3");
    
    
    
    
    //Voice recog
    const recog = new webkitSpeechRecognition();
    recog.lang = "en-US";
    
    // HANDLER FUNCTIONS ====================
    //recognition.onstart = function() { ... }    
    //recognition.onerror = function(event) { ... }
recog.onend = function() {
    console.log("END event");
    //startListen.style.backgroundColor = "";
    //startListen.style.color = "";
    //startListen.style.border = "";
}

recog.onresult = function(event) { 
  console.log(event);
//=============#3
var resultText = "";
for (let i = 0; i < event.results.length; i++){
    if(event.results[i].isFinal) {
        results.push(event.results[i][0].transcript);
        //resultText += event.results[i][0].transcript;
    }
}
for (let i = 0; i < results.length; i++) {
    out1.innerHTML += "<p>" + results[i] + "</p>";
}

//out1.innerHTML = resultText;
//#4 =============
  //output.innerHTML += event.results[0][0].transcript.toUpperCase();
  //output.innerHTML += resultText;
  //output.innerHTML += "\r" + event.results[0][0].confidence;
// =============#4
}
    

    
    
    
    
    
    
//}//end onload