/* GUI TO ADD BUTTONS FOR TESTING FUNCTIONS DURING DEV
BY SEAN DOYLE, MAY 2019.
*/
//CREATE GUI BOX
var guiBox = document.createElement('div');
var guiBoxH = document.createElement('h1');
var guiBoxHTxt = document.createTextNode("Testing GUI");
//ATTACH GUI BOX TO DOM
guiBoxH.appendChild(guiBoxHTxt);
guiBox.appendChild(guiBoxH);
document.body.appendChild(guiBox);
//STYLE GUI BOX
guiBox.style.background = "gray";
guiBox.style.padding = "0 10px 10px 10px";
guiBox.style.position = "fixed";
guiBox.style.bottom = "0";
//=====================================================
//=========== TESTING FUNCTIONS GO HERE ===============
function log(x){console.log(x);}
function goNow(){alert("test");}

//^^^^^^^^^^^ END OF TESTING FUNCTIONS ^^^^^^^^^^^^^^^^

//==== ADD A BUTTON FUNCTION ====
function addGuiButton (id, btnTxt, func2call) {
	let newBtn = document.createElement('button');
	newBtn.setAttribute("id", id);
	newBtn.setAttribute("onclick", func2call);
	newBtn.innerHTML = btnTxt;
	guiBox.appendChild(newBtn);
}//end addGuiButton


//==== CREATE BUTTON TO ADD TO THE GUI ====
//addGuiButton( ID of Button, Text on Button, Name of function to call when clicked)
addGuiButton("plA", "Sound Q 1", "callSXcue('ONE')");
addGuiButton("plB", "startListening", "startListening()");//
addGuiButton("plC", "stopListening", "stopListening()");//
addGuiButton("plD", "Voice LX", "speakThis('lights', 3)");//
addGuiButton("plE", "Voice SX", "speakThis('sound', 4)");//
addGuiButton("plE", "Voice House", "speakThis('You have the house.', 0)");//
