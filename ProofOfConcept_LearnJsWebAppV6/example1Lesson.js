
// The following datastructure is array of exercises
var exercisesExampleLesson1 = [ {  // First Exercise Object, usually an intro
	tabName: "Introduction",  // <-- Change this to change the tab name of the exercise "Introduction" 
	title: "Using Arrays in Javascript",  // <-- This is your lessons title, it will appear in the contents page
	input: "", 
	autoRun: undefined,  // use javascript when the exercise first starts, ie dynamic instructions  
	instructions: "<H3>An example coding lesson</H3> \n" +
		"This is intended to be an example lesson. \n" +
		"A model of how to use the coding API to build a lesson.\n" +
		"In this lesson students are asked to build a program \n" +
		"which prints pascals triangle. \n" +
		"This objective was specifically chosen becuase its final \n" + 
		"output being pascals triangle is easy to test becasue it only \n" +
		"has one correct answer, which is relatively easy to test. \n" +
		"The level of programming required to solve this problem will show \n" +
		"knowledge and understanding of the following \n" +
		"<ul> \n" +
		"<li>Sequencing Selection and Iteration </li> \n" +
		"<li>Modular programmin, ie functions </li> \n" +
		"<li>Good variable naming </li> \n" +
		"<li>Commenting code </li> \n" +
		"<li>Good code indentation </li> \n" +
		"</ul> \n" +
		"<DIV style='float:left;'>Pascals triangle is shown here</DIV>" +
		"<img src='images/Pascals_triangle_5.png' style='height:25%;'> \n" ,
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
	title: "Declaring and using arrays",
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
	title: "Array methods",
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
		// alert(code.output());
		return(false);
	}
},  { // Fifth Exercise Object
	tabName: "Ex3",
	title: "2D Arrays",
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
},  { // Fifth Exercise Object
	tabName: "Ex4",
	title: "Pascals triangle",
	input: "",
	autoRun: undefined, // Use javascript here to automatically run when this exercise first starts.
	instructions: "<h3>Writing Pascals Triangle to the output</h3> \n" +
				"Use the results from previous exercises \n" +
				"to create a function called <b>pascalsTriangle(rows)</b> \n" +
				" that accepts a single parameter which is the number of rows that \n" +
				"or pascals triangle that the function will produce.\n" +
				"The function should return an array of arrays \n" +
				", for instance for <b>pascalsTriangle(3)</b> \n" +
				"should return an array with the following values \n" +
				"returnArray = [[1],[1,1],[1,2,1]] ; \n" +
				"Some code already exists in the javascript window \n" +
				"which specifies the initial function", 
	source: `// This is pascals triangle
var nextRow = function(aRow) {
    var retVal=[];
    var i ;
    
    aRow.unshift(0);
    aRow.push(0);
    
    for ( i = 0 ; i < aRow.length - 1 ; i++ ) {
        retVal.push(aRow[i] + aRow[i+1]);
    }
    aRow.pop();
    aRow.shift();
    return(retVal);
}

var pascalsTriangle = function(rows) { 
    var pascalsArray=[[1]];
    var currRow=[];
    var newRow=[];
    var i = 0 ;
    for ( i = 0 ; i < rows ; i++ ) {
        currRow = pascalsArray[i];
        newRow = nextRow(currRow);
        pascalsArray.push(newRow);
    }
	return(pascalsArray);
}

pascalsTriArray = pascalsTriangle(15);
// alert(pascalsTriArray[3]);

var i = 0 , rows ;
for ( i = 0 ; i < pascalsTriArray.length ; i++ ) {
    printLn(pascalsTriArray[i].toString());
};` ,
	runCode: function() {
		code.run();
		return(false);
	}
} ] ;

