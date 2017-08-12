
// The following datastructure is array of exercises
var exercisesCodeAPI = [ {  // First Exercise Object, usually an intro
	tabName: "Introduction",  // <-- Change this to change the tab name of the exercise "Introduction" 
	title: "The Coding Application Programming Interace",  // <-- This is your lessons title, it will appear in the contents page
	input: "", 
	autoRun: undefined,  // use javascript when the exercise first starts, ie dynamic instructions  
	instructions: "<H3>Coding an Exercise</H3> \n" +
		"This lesson explains how to test and interact with the student or user, \n" +
		"using the code object and a few functions.\n" +
		"The code object is defined by this application \n" +
		"and give access to the users source code and \n" +
		"a method for running the users code. \n" + 
		"The code object can also be used to see if an error has ocurred \n" +
		"and to store and read information. \n" + 
		"The code object works with the exercise object \n" +
		"and is usually called by the runCode method of the exercise object.\n" +
		"The code methods are listed below. \n" + 
		"<PRE>\n\n" +
		"userCode = code.source(); // Returns the users source code \n" + 
		"result = code.run(); // Runs the users code  \n" + 
		"code.executed // Check this variable to see if executed \n" +
		"printLn('some text'); // Writing 1 line to the output window \n" +
		"printText('var myString; '); // Use this for showing source code \n" +
		"aline = readLn(); // Reading 1 line from the input window \n" +
		"<PRE>\n" ,
	source: "// No source code required for the introduction\n" ,
	runCode: function() { 
		return(true);
	}
},  { // Use this exercise Object to create an automatic contents page
	tabName: "Contents",
	title: "Contents for this lesson",
	input: "",
	autoRun: function() { autoGenLessonContents(); }, // Automatically generate the contents page.
	instructions: undefined , // autoGenContents() sets the instructions window.
	source: undefined,
	runCode: function() {		
		return(true);
	}
},  { // Third Exercise Object, this is 
	tabName: "Ex1",
	title: "Using code.source()",
	input: "This text goes in the input window, your program can read a line with <PRE> line = readLn();</PRE>",
	autoRun: undefined, // Use javascript here to automatically run when this exercise first starts.
	instructions: "<h3>Testing user code using code.source()</h3> \n" +
				"When the user clicks on the 'RUN' button \n" +
				"the action calls the method named 'runCode' \n" +
				"in current exercise object \n" +
				"You may execute the users code at this time or \n" +
				"you may want to test the users code first. \n" +
				"To access the users code you can call <em>code.source()</em> \n" +
				"Try typing the following code into the javascript window \n" +
				"and then look at the output window. \n" +
				"<PRE> \n" +
				"var sourceCode = code.source();\n" +
				"printText(sourceCode); \n" +
				"</PRE> \n" + 
				"Note: The function printText() can be used for \n" +
				"printing non HTML text such as computer code \n" +
				"Click on the 'run' button when you have finished entering the code. \n", 
	source: "// Type your code in this window\n ",
	runCode: function() {
		code.run();
		// After they have run the code, check to see if the output window
		// contains the sentance 'Your source code uses the keyword var'
		var outputText = code.output();
		alert(outputText);
		if ( outputText.includes('sourceCode') ) {
			printLn("Good work, you have copied your own source code to the output window\n");
			return(true);
		} else {
			printLn("Try typing the code in exactly as it is shown in the instricutions window\n");
			return(false);
		}
	}
},  { // Third Exercise Object, this is 
	tabName: "Ex2",
	title: "Using code.source()",
	input: "This text goes in the input window, your program can read a line with <PRE> line = readLn();</PRE>",
	autoRun: undefined, // Use javascript here to automatically run when this exercise first starts.
	instructions: "<h3>Testing user code using code.source()</h3> \n" +
				"When the user clicks on the 'RUN' button \n" +
				"the action calls the method named 'runCode' \n" +
				"in current exercise object \n" +
				"You may execute the users code at this time or \n" +
				"you may want to test the users code first by testing \n" +
				"to see if the user is using certain important keywords. \n" +
				"As an aexample you might want to check to see if the code \n" +
				"contains the keyword printLn or var. \n" +
				"You can even call the code.source() function within your \n" +
				"own code to demonstrate this functionality. \n" +
				"Try typing the code following and look at the output window. \n" +
				"<PRE> \n" +
				"var sourceCode = code.source();\n" +
				"if ( sourceCode.match(/var/) ) { \n" +
				"	printLn('Source code uses the keyword var\\n',{color:'blue'}); \n" +
				"}\n" +
				"var sourceCode = code.source();\n" +
				"printText(sourceCode); \n" +
				"</PRE> \n" + 
				"Then click on the 'run' button when you are done. \n", 
	source: "// Type your code in this window\n ",
	runCode: function() {
		code.run();
		// After they have run the code, check to see if the output window
		// contains the sentance 'Your source code uses the keyword var'
		alert(code.output());
		return(false);
	}
},  { // Fifth Exercise Object
	tabName: "Ex3",
	title: "Using code.output()",
	input: "This text goes in the input window, your program can read a line with <PRE> line = readLn();</PRE>",
	autoRun: undefined, // Use javascript here to automatically run when this exercise first starts.
	instructions: "<h3>Instructions for exericse Ex3</h3> \n" +
				"Note that each line of the instructions is \n" +
				"enclosed in quotes with a newline at the end \n" +
				"of each line. \n" +
				"<p>Tip images are useful for conveying information quickly \n" +
				", for instance this image is the flowchart for a while loop \n" +
				"<img src='images/whileLoop.jpg'>", 
	source: "",
	runCode: function() {
		return(true);
	}
} ] ;

