
// The following datastructure is array of exercises
var exercisesUndefined = [ {  // First Exercise Object, usually an intro
	tabName: "Introduction",  // <-- Change this to change the tab name of the exercise "Introduction" 
	title: "The Lessons Title",  // <-- This is your lessons title, it will appear in the contents page
	input: "", 
	autoRun: undefined,  // use javascript when the exercise first starts, ie dynamic instructions  
	instructions: "<H3>Heading for Introduction</H3> \n" +
		"Introduce your lesson here \n" +
		"you can use any HTML including pictures \n" +
		"tell your user what to expect from the lesson \n",
	source: "// No source code required for the introduction\n" , // This is copied to the editor
	runCode: function() {  // This gets called when the user hits the run button.
		return(true);
	}
}, { // Exercise Object to create an automatic contents page, no need to modify this object
	tabName: "Contents",
	title: "Contents for this lesson",
	input: "",
	autoRun: function() { autoGenLessonContents(); }, // Automatically generate the contents page.
	instructions: undefined , // autoGenContents() sets the instructions window.
	source: undefined,
	runCode: function() {
		return(true);
	}  // The contents object ends on the next line
},  { // Third Exercise Object, this is 
	tabName: "Ex1",  // This appears in the tabs at the top of the page
	title: "Title for forst exercise", // This appears in the contents page
	input: "This text goes in the input window, your program can read a line with <PRE> line = readLn();</PRE>",
	autoRun: undefined, // Use javascript here to automatically run when this exercise first starts.
	instructions: "<h3>Title for your exercise</h3> \n" +
				"Put your instructions for your exercise here \n" +
				"You can use the HTML 'PRE' tag to show code, for example \n" + 
				"<XMP><PRE>  \n" +  // Note the XMP tag is required to show the PRE TAG
				"var sourceCode = code.source();\n" +
				"printText(sourceCode); \n" +
				"</PRE></XMP> \n" +
				"will display code as \n" +
				"<PRE> \n" +
				"var sourceCode = code.source();\n" +
				"printText(sourceCode); \n" +
				"</PRE> \n" + 
				"Type the code above into the Javascript window and then \n" +
				"Click on the 'run' button when you have finished entering the code. \n", 
	source: "// Type your code in this window\n ", // Preloading any source for the user
	runCode: function() {  // This code is called when the user hits the run button
		var sourceCode = code.source();  // You can get and test the source code
		if ( ! sourceCode.includes('var') ) {
			printLn("You should declare your variables using the var keyword\n");
			return(false); // Tell the calling program that the users code failed the test
		}
		// run the users code and return one or more variables 
		// In this case sourceCode
		var result = code.run({returnVariableNames:['sourceCode']});
		if ( typeof result.sourceCode != 'undefined' ) {
			printLn("Well done you have defined the variable sourceCode\n");
		} else {
			printLn("You have to define a variable called sourceCode\n");
			return(false);
		}
		// After they have run the code, check to see if the output window
		// contains the sentance 'Your source code uses the keyword var'
		var outputText = code.output();  // You can get and test output code
		if ( outputText.includes('sourceCode') ) {
			printLn("Good work, you have copied your own source code to the output window\n");
			return(true);
		} else {
			printLn("Try typing the code in exactly as it is shown in the instricutions window\n");
			return(false);
		}
	}
},  { // Third Exercise Object, this is 
	tabName: "Ex2",  // This appears in the tabs at the top of the page
	title: "Title for forst exercise", // This appears in the contents page
	input: "This text goes in the input window, your program can read a line with <PRE> line = readLn();</PRE>",
	autoRun: undefined, // Use javascript here to automatically run when this exercise first starts.
	instructions:  "<h3>Title for your exercise</h3> \n" +
				"Put your instructions for your exercise here \n" +
				"You can use the HTML 'PRE' tag to show code, for example \n" + 
				"<XMP><PRE>  \n" +  // Note the XMP tag is required to show the PRE TAG
				"var sourceCode = code.source();\n" +
				"printText(sourceCode); \n" +
				"</PRE></XMP> \n" +
				"will display code as \n" +
				"<PRE> \n" +
				"var sourceCode = code.source();\n" +
				"printText(sourceCode); \n" +
				"</PRE> \n" + 
				"Type the code above into the Javascript window and then \n" +
				"Click on the 'run' button when you have finished entering the code. \n", 
	source: "// Type your code in this window\n ", // Preloading any source for the user
	runCode: function() {  // This code is called when the user hits the run button
		var sourceCode = code.source();  // You can get and test the source code
		if ( ! sourceCode.includes('var') ) {
			printLn("You should declare your variables using the var keyword\n");
			return(false); // Tell the calling program that the users code failed the test
		}
		// run the users code and return one or more variables 
		// In this case sourceCode
		var result = code.run({returnVariableNames:['sourceCode']});
		if ( typeof result.sourceCode != 'undefined' ) {
			printLn("Well done you have defined the variable sourceCode\n");
		} else {
			printLn("You have to define a variable called sourceCode\n");
			return(false);
		}
		// After they have run the code, check to see if the output window
		// contains the sentance 'Your source code uses the keyword var'
		var outputText = code.output();  // You can get and test output code
		if ( outputText.includes('sourceCode') ) {
			printLn("Good work, you have copied your own source code to the output window\n");
			return(true);
		} else {
			printLn("Try typing the code in exactly as it is shown in the instricutions window\n");
			return(false);
		}
	}
} ] ;

