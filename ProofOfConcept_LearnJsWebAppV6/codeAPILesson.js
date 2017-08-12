
// The following datastructure is array of exercises
var exercisesCodeAPI = [ {  // First Exercise Object, usually an intro
	tabName: "Introduction",  // <-- Change this to change the tab name of the exercise "Introduction" 
	title: "The Coding Application Programming Interace",  // <-- This is your lessons title, it will appear in the contents page
	input: "", 
	autoRun: undefined,  // use javascript when the exercise first starts, ie dynamic instructions  
	instructions: "<H3>Coding an Exercise</H3> \n" +
		"This lesson explains how to test and interact with the user, \n" +
		"using the <b>code</b> object and a few other functions.\n" +
		"The <b>code</b> object defined by this application \n" +
		"gives access to the users source code, \n" + 
		"a method for running the users code and \n" +
		"output as a result of running of the users program. \n" + 
		"The <b>code</b> object can also be used to see if an error has ocurred \n" +
		"and to store and read information. \n" + 
		"The <b>code</b> object works with the <b>exercise</b> object \n" +
		"and is usually called by the <b>runCode</b> method of the <b>exercise</b> object.\n" +
		"Examples of the <b>code</b> objects methods are shown below. \n" + 
		"<PRE>\n\n" +
		"userCode = code.source(); // Returns the users source code \n" + 
		"result = code.run(); // Runs the users code  \n" + 
		"code.executed // Check this variable to see if executed \n" +
		"outputText = code.output(); // Returns the output from the program \n" + 
		"printLn('some text'); // Writing 1 line to the output window \n" +
		"printText('var myString; '); // Use this for showing source code \n" +
		"aline = readLn(); // Reading 1 line from the input window \n" +
		"</PRE>\n" +
		"This lesson gives examples of how to use these methods so that you can \n" +
		"create your own lessons \n" +
		"Click on the 'Run' button when you are ready to move on.",
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
	title: "Reading the users source code",
	input: "This text goes in the input window, your program can read a line with <PRE> line = readLn();</PRE>",
	autoRun: undefined, // Use javascript here to automatically run when this exercise first starts.
	instructions: "<h3>Getting the users code using code.source()</h3> \n" +
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
		// alert(outputText);
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
	title: "Checking the users source code",
	input: "This text goes in the input window, your program can read a line with <PRE> line = readLn();</PRE>",
	autoRun: undefined, // Use javascript here to automatically run when this exercise first starts.
	instructions: "<h3>Testing user code with code.source()</h3> \n" +
				"You may want to test the users code before they run it \n" +
				"for certain key programming words or expressions \n" +
				"to help check the students code before execution. \n" +
				"To demonstrate this functionality, \n" +
				"Try typing the code following code into the Javascript window " + 
				"notice the string pattern method called match \n" +
				"and look at the output window. \n" +
				"<PRE> \n" +
				"var sourceCode = code.source();\n" +
				"if ( sourceCode.match(/var/) ) { \n" +
				"	printLn('Source code uses the keyword var\\n',{color:'blue'}); \n" +
				"}\n" +
				"var sourceCode = code.source();\n" +
				"</PRE> \n" + 
				"Then click on the 'run' button when you are done. \n", 
	source: "// Type your code in this window\n ",
	runCode: function() {
		code.run();
		// After they have run the code, check to see if the output window
		// contains the sentance 'Your source code uses the keyword var'
		var outputText = code.output();
		// alert(outputText);
		if ( outputText.match(/var/) ) {
			printLn("Good work, you have copied your own source code to the output window\n");
			return(true);
		} else {
			printLn("Try typing the code in exactly as it is shown in the instricutions window\n");
			return(false);
		}
	}
},  { // Third Exercise Object, this is 
	tabName: "Ex3",
	title: "Checking the users program output",
	input: "",
	autoRun: undefined, // Use javascript here to automatically run when this exercise first starts.
	instructions: "<h3>Reading the output with code.output()</h3> \n" +
				"When the user uses either of the fuinctions \n" +
				"<PRE>" +
				"printLn('some text');\n" +
				"</PRE>" +
				"<PRE>" +
				"printText('some text');\n" +
				"</PRE>" +
				"what ever is printed gets sent to the \n" +
				"output window which can be read by the 'code' method called \n" +
				"<PRE>" +
				"code.output();\n" +
				"</PRE>" +
				"To show how this works we do a calcualtion and send it to \n" +
				"the output window and then read the output to check the result. \n" +
				"Study and copy the following code to the Javascript window and click \n" +
				"on the <b>Run</b> button \n" +
				"<PRE> \n" +
				"var num1 = 7 ; \n" +
				"var num2 = 5 ; \n" +
				"var answer = num1 * num2 ; \n" +
				"printText(answer); \n" +
				"outputText = code.output(); \n" +
				"if ( outputText.match(/35/) ) { \n" +
				"	printLn('Found thirty five in the output window'); \n" +
				"} \n" +
				"</PRE> \n" + 
				"Then click on the 'run' button when you are done. \n", 
	source: "// Type your code in this window\n ",
	runCode: function() {
		code.run();
		// After they have run the code, check to see if the output window
		// contains the sentance 'Your source code uses the keyword var'
		outputText = code.output(); 
		if ( outputText.match(/35/) ) { 
			return(true);
		} else {
			printLn("Make sure your program produces the correct result");
			printLn("and writes it to the output window");
			return(false);
		}
	}
},  { // Fifth Exercise Object
	tabName: "Ex4",
	title: "Not Running the users code (I)",
	input: "",
	autoRun: undefined, // Use javascript here to automatically run when this exercise first starts.
	instructions: "<h3>Not Running the users code (I)</h3> \n" +
				"When the <b>Run</b> button is clicked the application \n" +
				"calls the <b>exercise</b> objects method called <b>runCode</b>, see below. \n" +
				"This odd looking syntax puts the name of the function first \n" +
				"which is followed by an anonymous function. \n" +
				"An anonymous function is just a function without a name. \n" +
				"You don't have to worry about this, just put your code in between the {} \n" +
				"and know that this code is run when the <b>Run</b> button is clicked \n" +
				"If your exercise has no code to run you may just return <b>true</b> \n" +
				"the return value of true from the <b>runCode</b> method tells the \n" +
				"application that this \n" +
				"exercise has finished sucessfully and so the user can move on to the \n" +
				" next exercise. \n" +
				"<PRE> \n" +
				"runCode: function() { \n" +
				"	return(true); \n" +
				"} \n" +
				"</PRE> \n" , 
	source: "",
	runCode: function() {
		return(true);
	}
} ,{ // Fifth Exercise Object
	tabName: "Ex5",
	title: "Not Running the users code (II)",
	input: "",
	autoRun: undefined, // Use javascript here to automatically run when this exercise first starts.
	instructions: "<h3>Not Running the users code (II)</h3> \n" +
				"Sometimes you may not want to run the users code \n" +
				"but rather to check something else, such as some user input. \n" + 
				"For example, <BR>\n" +
				"Which <b>exercise</b> method is called when the <b>Run</b> button is clicked ? <BR><BR>" +
				"<form>" +
				"<label class='radio-inline'>" +
				"<input type='radio' onclick='code.mcqAns=1;'>onClick" +
				"</label>" +
				"<label class='radio-inline'>" +
				"<input type='radio' onclick='code.mcqAns=2;'>autoRun" +
				"</label>" +
				"<label class='radio-inline'>" +
				"<input type='radio' onclick='code.mcqAns=3;' >runCode" + // This is the correct answer
				"</label>" +
				"<label class='radio-inline'>" +
				"<input type='radio' onclick='code.mcqAns=4;'>eval" +
				"</label>" +
				"</form>" +
				"<BR><BR>" +
				"<PRE> \n" +
				"runCode: function() { \n" +
				"	if ( code.msqAns == 3 ) { \n" +
				"		return(true); \n" +
				"	} else { \n" +
				"		return(false); \n" +
				"	} " +
				"} \n" +
				"</PRE> \n" , 
	source: "",
	runCode: function() {
		if ( code.mcqAns == 3 ) {
			printLn("Correct the <b>Run</b> button calls the <b>runCode</b> method\n"); 
			return(true);
		} else {
			printLn("Maybe you should go back a few exercises ?\n");
			return(false);
		}
	}
} ,  { // Fifth Exercise Object
	tabName: "Ex6",
	title: "Running the users code",
	input: "",
	autoRun: undefined, // Use javascript here to automatically run when this exercise first starts.
	instructions: "<h3>Running the users code</h3> \n" +
				"Normally after giving the user some instructions \n" +
				"to enter some code into the Javascript window. \n" +
				"The user clicks on the <b>Run</b> button which calls \n" +
				"the <b>runCode</b> method of your exercise. You then execute the code by \n" +
				"using the <b>code.run()</b> method \n" +
				"this method can optionally return copies of variables created \n" +
				"in the users program. This is useful for checking that the user \n" +
				"has created some specific variable or object and its value. \n" +
				"An example of the <b>runCode</b> method running the users code and \n" +
				"checking for the existance of a variable is shown below \n" +
				"<PRE>" +
				"runCode: function() { \n" +
				"	var result = code.run({returnVariableNames:['myString']});\n" +
				"	if ( typeof result.myString != 'undefined' ) { \n" +
				"		printLn('Good work you have defined myString'); \n" +
				"		printLn('which is ' + result.myString ) ;\n" +
				"		return(true); \n" +
				"	} else { \n" +
				"		printLn('Please define the variable myString'); \n" +
				"		printLn('and try again');\n" +
				"		return(false); \n" +
				"}\n" +
				"</PRE>" +
				"Given the code above is the runCode for this exercise \n" +
				"enter the code shown below into \n " +
				"the Javascript window, \n" +
				"<PRE>" +
				"var myString='Hello world';" +
				"</PRE>" + 
				"click on the <b>Run</b> button\n" +
				"and look at the output window.",
	source: "",
	runCode: function() { 
		var result = code.run({returnVariableNames:['myString']});
		if ( typeof result.myString != 'undefined' ) { 
			printLn('Good work you have defined myString'); 
			printLn('which is ' + result.myString ) ;
			return(true);
		} else { 
			printLn('Please define the variable myString'); 
			printLn('and try again');
			return(false);
		}
	}
},  { // Fifth Exercise Object
	tabName: "Ex7",
	title: "Printing to the output using printLn()",
	input: "",
	autoRun: undefined, // Use javascript here to automatically run when this exercise first starts.
	instructions: "<h3>Printing to the output using printLn()</h3> \n" +
				"The function called <b>printLn()</b> \n" +
				"can be used by students to print strings to the output window.\n" +
				"The argument to the printLn() command is a string including \n" +
				"any HTML string. This means that formatted HTML can be sent to the \n" +
				"output window. \n" +
				"Try entering the code below into the Javascript window and look \n" +
				"at the output window." +
				"<pre><xmp>" +
				"printLn('<h1>I am a level 1 Heading</h1>'); \n" +
				"</xmp></pre>", 
	source: "",
	runCode: function() {
		code.run();
		var outputText = code.output();
		if( outputText.includes('Heading') ) {
			printLn("Good work, lets move on to the next question");
			return(true);
		} else {
			printLn("Make sure you ebeter the code as shown in the instructions");
			return(false);
		}
	}
},  { // 10th Exercise Object
	tabName: "Ex8",
	title: "Printing to the output using printText()",
	input: "",
	autoRun: undefined, // Use javascript here to automatically run when this exercise first starts.
	instructions: "<h3>Printing to the output using printText()</h3> \n" +
				"The function called <b>printText()</b> \n" +
				"can be used by students to print strings to the output window.\n" +
				"The difference bwtween <b>printText()</b> and <b>printLn()</b> \n" +
				"is that <b>printLn()</b> can be used for any HTML, however <b>printText()</b> \n" +
				"should only be used for plain text, such as raw code. \n" +
				"This is helpful for printing javascript source code. \n" +
				"Try entering the code below \n" +
				"<pre><xmp>\n" +
				"var sourceCode = code.source();\n" +
				"printText(sourceCode); \n" +
				"</xmp></pre>" +
				"click on the <b>Run</b> button and look at the output window.", 
	source: "",
	runCode: function() {
		code.run();
		var outputText = code.output();
		if( outputText.includes('sourceCode') ) {
			printLn("Good work, lets move on to the next question");
			return(true);
		} else {
			printLn("Make sure you ebeter the code as shown in the instructions");
			return(false);
		}
	}
},  { // Fifth Exercise Object
	tabName: "Ex9",
	title: "Using readLn() to read input",
	input: "Dont forget to check out the input window\n" +
			"The input window can contain many lines of text or data \n" +
			"for use by the users program.",
	autoRun: undefined, // Use javascript here to automatically run when this exercise first starts.
	instructions: "<h3>Using readLn() to read input</h3> \n" +
				"The function called <b>readLn()</b> \n" +
				"can be used by students to read a single line of input \n" +
				"from to the input window.\n" +
				"Sucessive calls to <b>readLn()</b> will read the next line from \n" +
				"the input window.\n" +
				"If no more lines can be read from the input window \n" +
				"<b>readLn()</b> will return <b>undefined</b> \n" +
				"Note: undefined is interpreted as false by conditional statments. \n" +
				"This means that readLn() inside a while loop will read lines \n" +
				" untill the last line is read.\n" +
				"Enter the code shown below \n" +
				"<pre><xmp>\n" +
				"var textLine ; \n" +
				"while( textLine = readLn() ) { \n" +
				"	printLn(textLine); \n" +
				"}\n" +
				"</xmp></pre>" +
				"then click on the <b>Run</b> button and look at the output window.", 
	source: "",
	runCode: function() {
		code.run();
		var outputText = code.output();
		if( outputText.includes('contain') ) {
			printLn("Good work, lets move on to the next question");
			return(true);
		} else {
			printLn("Make sure you ebeter the code as shown in the instructions");
			return(false);
		}
	}
}] ;
// printLn('some text'); // Writing 1 line to the output window 
// printText('var myString; '); // Use this for showing source code 
// aline = readLn(); // Reading 1 line from the input window

