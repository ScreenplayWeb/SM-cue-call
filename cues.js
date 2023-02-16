//SM CUE CALL APP
//SEAN DOYLE DEC 22
//V 1.0


function lx1() {
    alert("LX 1 go!");
}//end lx1

//==== PLAY AUDIO CUE ====
const sound_1 = document.getElementById("sx1");


//==== SOUND CUES
function callSXstandby(q_num) {
    speakThis('sound', 4)
    //alert("Sound standing by");
}


function callSXcue(q_num) {
    console.log("Cue:" + q_num);
    switch(q_num) {
        case "ONE":
        case "WON":
        case "1":
            //alert("Sound cue 1 here");
            sound_1.play();
            break;
        case "TWO":
        case "TOO":
        case "TO":
            alert("Sound cue 2 here");
            break;
    }
}


//==== LIGHTING CUES
function callLXstandby(q_num) {
    speakThis('lights', 3)
    //alert("Sound standing by");
}
function callLXcue(q_num) {
    alert("LIGHT GOES HERE...");
}
