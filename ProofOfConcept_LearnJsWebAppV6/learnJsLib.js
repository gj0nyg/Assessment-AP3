// learnJsLib.js

var _outputTextArray=[]; 
var _lineNumber = 0; 

// For the javascript Editor window
var jsEditor = ace.edit("jsEditor");  
jsEditor.setTheme("ace/theme/iplastic");  
jsEditor.getSession().setMode("ace/mode/javascript"); 
jsEditor.setShowPrintMargin(false); // Removes the right margin at 80 chars

// For the html Editor window
var htmlEditor = ace.edit("htmlEditor");  
htmlEditor.setTheme("ace/theme/iplastic");  
htmlEditor.getSession().setMode("ace/mode/html"); 
htmlEditor.setShowPrintMargin(false); // Removes the right margin at 80 chars

// The following function can u=be used to print text only no HTML
function printText(textString){
	printLn('<PRE>' + textString + '</PRE>');
//	printLn('<xmp>' + textString + '</xmp>'); // This doesnt work for some reason
}

// You can use printLn to print HTML to the output display
function printLn(textData,options) {
	textData = textData.replace(/\n/g,'<BR>');
	var lineData = '<DIV ';
		// The following code builds some options into the <A style='...'> tag
		if ( typeof(options) != "undefined" ) {
			lineData = lineData + "style='" ;
			if ( options.color != "undefined" ) {
				lineData = lineData + "color:" + options.color + ';' ; 
			}
			if ( options.size != "undefined" ) {
				lineData = lineData + "font-size:" + options.size + ';'; 
			}
			lineData = lineData + "'" ;
		}
	lineData = lineData + '>' + textData + '</DIV>';
	
    _outputTextArray.push(lineData);
    var outputText = "" ;
    var outputWindow = document.getElementById("outputWindowText") ;

    for ( var i in _outputTextArray ) {
		outputText += _outputTextArray[i];
    }
    outputWindow.innerHTML = outputText ;
}

function readLn() {
     var inputWindow = document.getElementById("inputWindow") ;
     var windowText = inputWindow.value.split('\n') ;
     return(windowText[_lineNumber++]);
}

function readOutputLn() {
     var outputWindow = document.getElementById("outputWindowText") ;
     var windowText = outputWindow.value.split('\n') ;
     return(windowText[_lineNumber++]);
}

function errorMessage(errorText) {
	var errorWindow = document.getElementById("errorMessage") ;
	errorWindow.innerHTML = errorText ;
}

function clearOutputWindow(){
		errorMessage("");
		_lineNumber=0; // Reset the input window line number to 0
		_outputTextArray=[]; // Reset the output window as well
		printLn("");
}

// This function gets called when the Run button is clicked
// It calls/triggers the exercises own function
function newRunCode(){
	// currentExercise.runCode();

	if ( currentExercise.runCode() == true ) {
		// Ok so the user go their code right
		// so i make the exercise tab green to signify success
		// setNavTabColor(exerciseNumber,"green");
		setExerciseStatus(exerciseNumber,true);
		// Go to the next exercise
		exerciseNumber++;
		setCurrentExercise(exerciseNumber);
		showLeftWindow("instructionWindow");
	} else {
		setExerciseStatus(exerciseNumber,false);
	}
}

// The object called code is intended to make working with the
// customer and source code easier. 
var code = ( function() {
	var my = {};  // The variable my refers to the code object
	my.source = function() { 
		var sourceCode = jsEditor.getValue() ;
		return(sourceCode);
	};
	my.output = function() { 
		var outputText = document.getElementById('outputWindowText').textContent  ;
		return(outputText);
	};
	my.run = function(options){  // This is run when code.run() is called
		/*
		errorMessage("");
		_lineNumber=0; // Reset the input window line number to 0
		_outputTextArray=[]; // Reset the output window as well
		*/
		clearOutputWindow();
		var evalReturnValue = {};
		var returnVariableNames = [] ;
		this.errorMessage = undefined ;
		this.lineNumber = undefined ;
		this.executed = undefined ; // The code hasnt run yet.
		returnVariableNames=[];  // These variables will be returned

		// If the options object is set and the returnVariableNames is also set 
		// set 
		if ( typeof options != 'undefined' ) {
			if ( typeof options.returnVariableNames  != 'undefined' ) {
				returnVariableNames = options.returnVariableNames ;

			} 
		}
		
		returnVariableCode = setReturnVariableCode(returnVariableNames);
		
		// var newSource = this.source + 
		var source = jsEditor.getValue();

		try { 
			evalReturnValue = eval( source + ';' + returnVariableCode + ';' );
			this.executed = true ; // The code executed successfully
			this.errorMessage = "" ; // copy the error message to the code object
		} catch (e) { 
			// if (e instanceof SyntaxError) {
			// alert(e.message + "On Line:" + e.lineNumber);
			this.executed = false ; // The code failed to run
			this.errorMessage = e.message ;
			this.lineNumber = e.lineNumber ;
			errorMessage(e.message);
			jsEditor.gotoLine(e.lineNumber, e.columnNumber, true);
			jsEditor.renderer.$cursorLayer.showCursor();
		} 

		// alert(evalReturnValue);
		// this.returnVarValue = evalReturnValue ;
		// alert(evalReturnValue);
		// This is the exercise name space
		// my.exns=this; // exercise name space, access by code.exns
		
		return( evalReturnValue );
	};
	return(my);
})();

// This function turns an array of variables into a string 
// which can be appended to an eval command so that the 
// eval command retruns the variables as a single object 
// Note that if no variables are defined than 
function setReturnVariableCode(returnVariableNames) {
	var returnVariableCode = "var returnValues={};\n";
	var varName ;
	for ( i = 0 ; i < returnVariableNames.length ; i++ ) {
		varName = returnVariableNames[i];
		returnVariableCode += "if( typeof(" + varName + ") !== 'undefined' ){\n" +
									"returnValues." + varName + " = " + varName + ";\n" +
								"} else { \n" + 
									"returnValues." + varName + " = undefined ;\n" +
								"};\n";		
	}
	returnVariableCode += "returnValues;\n" ;
	return(returnVariableCode);
}

// This function can be used to automatically generate 
// a contents page. It writes this contents to the InstructionWindow
// Note contentList could be either a list of exercises=[] or a list of lessons=[]
function autoGenLessonContents(){

	var HTMLString = "<H2>Table of contents for lesson</H2><BR>" ;
	var exercise = {} ;
	var i ;
	var instructionWindow = document.getElementById("instructionWindow") ;
	
	for ( i = 0 ; i < exercises.length ; i++ ) {
		exercise = exercises[i] ;
		HTMLString += "<DIV class='contentsLeft'>" + exercise.tabName + "</DIV>" + 
					"<DIV class='contentsRight' onClick='buttonClick(" + i + ");'><U>" + exercise.title + "</U></DIV>" ;
	}

	HTMLString += "<DIV class='atBottom'>Press Run to continue</DIV>" ;
	// document.getElementById("instructionWindow").innerHTML=
	instructionWindow.innerHTML = HTMLString ;
}

// This function can be used to automatically generate 
// a contents page of the lessons. It writes this contents to the InstructionWindow
function autoGenContents(){

	var HTMLString = "<H2>List of Lessons</H2><BR>" ;
	var lesson = {} ;
	var i ;
	var instructionWindow = document.getElementById("instructionWindow") ;
	
	for ( i = 0 ; i < lessons.length ; i++ ) {
		lesson = lessons[i] ;
		HTMLString += "<DIV class='contentsLeft'>" + lesson.tabName + "</DIV>" + 
					"<DIV class='contentsRight' onClick='sideBarButtonClick(" + i + ");'><U>" + lesson.title + "</U></DIV>" ;
	}

	HTMLString += "<DIV class='atBottom'>Press Run to continue</DIV>" ;
	// document.getElementById("instructionWindow").innerHTML=
	instructionWindow.innerHTML = HTMLString ;
}

