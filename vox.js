const synth = window.speechSynthesis;

function speakThis(textIn, voxIndex) {
    //Get voice options from browser
    let voices = synth.getVoices();
    
    //Synthesize text to audio
    let speech = new SpeechSynthesisUtterance(textIn);
    
    //Set config options
    //speech.lang = "en-US";//A string representing a BCP 47 language tag.    
    speech.voice = voices[voxIndex];
    
    //Speak the text
    synth.speak(speech);
}//end speakThis
