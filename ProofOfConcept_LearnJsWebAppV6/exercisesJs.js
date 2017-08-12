"use strict";

// OK so this file contains an array [] of javascript exercise objects signified by curly braces {}
var exercisesIntroduction = [ {
	tabName: "Introduction",
	title: "Introduction to the Training Environment",
	input: "", // If this code is defined it will run after the instruction window is rendered 
		// Write your instructions for the exercise in HTML below
		// Note this is a bit weird in that the HTML lines are inside double quotes (a string) 
		// with a + sign at the end of each string except for the last one.
		// this is because HTML does not embed inside JavaScript very well
		// actually more specifically Javascript does not do multiline strings very well
	instructions: "<H3>Introduction to the Training Environment</H3>" +
				"This web site is intended to provide online training to students who " +
				"wish to learn computer programming and 'Javascript' by providing informative " +
				"lessons which are composed of several exercises each with " +
				"automatically generated feedback. " +
				"Instructions and information are provided to users in the instructions window " +
				"and students are typically asked to enter 'Javascript' code into a programming window." + 
				"Algorithms for each exercise detect typical errors that students may make " +
				"and provide timely and helpful feed back to students guiding them towards " +
				"appropriate solutions." +
				"The instruction window is encoded in HTML and so can provide information in " +
				"a typical web graphical format and even be potentially used in other ways such " +
				" as for multiple choice questions using radio buttons, for example <BR><BR>" +
				"What format is the instruction page encoded in ? <BR><BR>" +
				"<DIV class='hmcq'><input type='radio' name='format' value='CSS' onclick='code.mcqAns=1;'> CSS </input></DIV>" +
				"<DIV class='hmcq'><input type='radio' class='hmcq' name='format' value='Javascript' onclick='code.mcqAns=2;'>Javascript</input></DIV>" +
				"<DIV class='hmcq'><input type='radio' class='hmcq' name='format' value='HTML' onclick='code.mcqAns=3;'>HTML</input></DIV>" +
				"<DIV class='hmcq'><input type='radio' class='hmcq' name='format' value='XML' onclick='code.mcqAns=4;'>XML</input></DIV><BR><BR>" +
				"After you make your choice click on the RUN button below",
		// Use source if you want to put some text in the codeing window.
		// Note this is similar to the instructions window, you have to add 
		// multiple strings, because javascript does not like multi line strings
		// note also that \n is way of embedding a new line into a string
	source: "//No codeing required for the introduction\n",
	runCode: function() {	
		if ( typeof(code.mcqAns) == 'undefined' ) { printLn("You need to select one of the options first"); return(false); };
		if ( code.mcqAns == 1 ) { printLn("No sorry the instructions page is not written in CSS"); return(false); };
		if ( code.mcqAns == 2 ) { printLn("No sorry the instructions page is not written in Javascript"); return(false); };
		if ( code.mcqAns == 4 ) { printLn("No sorry the instructions page is not written in XML"); return(false); };
		if ( code.mcqAns == 3 ) { printLn("Yes the instruction page is writtein in HTML"); return(true); };
	}
},  {
	tabName: "Contents",
	title: "Contents for Introduction lesson",
	input: "",
		// Write your instructions for the exercise in HTML below
		// Note this is a bit weird in that the HTML lines are inside double quotes (a string) 
		// with a + sign at the end of each string except for the last one.
		// this is because HTML does not embed inside JavaScript very well
		// actually more specifically Javascript does not do multiline strings very well
	autoRun: function() { autoGenLessonContents(); }, // Automatically generate the contents page.
	instructions: undefined , // autoGenContents() sets the instructions window.
		// Use source if you want to put some text in the codeing window.
		// Note this is similar to the instructions window, you have to add 
		// multiple strings, because javascript does not like multi line strings
		// note also that \n is way of embedding a new line into a string
	source: "//Your source goes in this window\n" +
			"var myString='hello world';\n",
	runCode: function() {		
		return(true);
	}
},		{
	tabName: "Ex1",
	title: "Declaring Strings",
	input: "",
	autoRun: undefined,
		// Write your instructions for the exercise in HTML below
		// Note this is a bit weird in that the HTML lines are inside double quotes (a string) 
		// with a + sign at the end of each string except for the last one.
		// this is because HTML does not embed inside JavaScript very well
		// actually more specifically Javascript does not do multiline strings very well
	instructions: "<H2>Declaring variables in javascript</H2>" +
				"Variables are place holders where computer programs store information " +
				"for processing, variables are usually <b>declared</b> at the begining of programms." + 
				"Declaring variables uses the keyword <b>'var'</b>. " +
				"So for instance to declare a variable called <b>numberOfChildren</b>," +
				"you would use the following variable declaration." +
				"<PRE>var numberOfChildren;</PRE>" + 
				"Variables can also be initialised with a value when they are declared, for instance" +
				"<PRE>var numberOfChildren = 3;</PRE>" +
				"Notice that javascript statments end with a semicolon." +
				"Variables which contain text are called <b>Strings</b> and string values are " +
				'indicated by double or single quotes for instance "a string" or ' + " 'a string'." +
				"Type the code shown below into the javascript window, " +
				"but use your name instead of John<BR>" +
				"<PRE>" +  // use the Pre Tag for raw text like computer code
				"var myName = 'John';\n" +    // the character \n means a new line
				"</PRE>" +
				"then click on the run button " +
				"and look at the output window.",
		// Use source if you want to put some text in the codeing window.
		// Note this is similar to the instructions window, you have to add 
		// multiple strings, because javascript does not like multi line strings
		// note also that \n is way of embedding a new line into a string
	source: "//Your source goes in this window\n" +
			"var myName='John';",
	runCode: function() { 
		var result = code.run({returnVariableNames:['myName']});
		// alert(Object.keys(result));
		code.myName = result.myName ;
		if ( result.myName == undefined ) { printLn("Sorry you Have to define the variable myName"); return(false); };
		if ( typeof(result.myName) != "string" ) { printLn("Sorry " + result.myName + " myName can only be a string defined within 'quotes'"); return(false); };
		if ( typeof(result.myName) == "string" ) { printLn("Well Done " + result.myName + " lets go on to do some more on strings."); return(true); };
	}
},  {
	tabName: "Ex2",
	title: "Using Strings",
	input: "",
	autoRun: undefined,
	instructions: "<H2>Using strings variables in javascript</H2>" +
				"String variables can be added together using the '+' operator " +
				"Try typing in the following code to see how to add strings " +
				"<PRE>" +  // use the Pre Tag for raw text like computer code
				"var firstName='John';\n" +  // the character \n means a new line
				"var lastName='Smith';\n" + 
				"var fullName = firstName + ' ' + lastName ;\n" +
				"printLn('Your full name is ' + fullName);\n" +
				"</PRE><BR>" +
				"Notice the new command that you can use to write to the ouput window" +
				"Now click on the run button " +
				"and look at the output window",
		// Use source if you want to put some text in the codeing window.
		// Note this is similar to the instructions window, you have to add 
		// multiple strings, because javascript does not like multi line strings
		// note also that \n is way of embedding a new line into a string
	source: "// Your source goes in this window\n" +
			"var firstName='John';\n" +
			"var lastName='Smith';\n" + 
			"var fullName = firstName + ' ' + lastName ;\n" +
			"printLn('Your full name is ' + fullName);\n",
	runCode: function() {
		// Before we run any code we can check that the user is using the keyword var.
		var sourceCode = code.source() ;
		printLn(sourceCode);
		// Execute the users code by the code object, using the run() method/function
		// you can ask the code.run() function to return specific variables
		// into a returned variable.
		// for example
		// result=code.run({returnVariableNames:['someVariable','otherVariable']});
		// The returned vairables can be access as 
		// result.someVariable, etc
		var result = code.run({returnVariableNames:['firstName','lastName','fullName']});
		// first check to see if the code executed sucessfully.
		if ( code.executed == false ) { // The code failed to execute sucessfully 
			// The students code did not compile, so we may as well copy the
			// eval error message to the output window.
			printLn("Sorry you have an syntax error on line :" + code.lineNumber ); 
			printLn("Please fix this error first\n");
			printLn(code.errorMessage, {color:"red"} );
			return(false); // We return false to say that the student failed to answer this question.
		} else { // The code executed sucessfully
			// so now we can check that each variable was defined and that each variable has the right type
			if ( result.firstName == undefined ) { printLn("You need to define firstName as a variable AND assign a value to it."); return(false); };
			if ( typeof(result.firstName) != "string" ) { printLn("firstName can only be a string"); return(false); };
			if ( typeof(result.firstName) == "string" ) { printLn("Well Done " + code.myName + "youve created firstName as a string\n"); };
			if ( result.lastName == undefined ) { printLn("You need to define lastName as a variable and assign a value to it."); return(false); };
			if ( typeof(result.lastName) != "string" ) { printLn("lastName can only be a string"); return(false); };
			if ( typeof(result.lastName) == "string" ) { printLn("Well Done " + code.myName + "youve created lastName as a string\n"); };
			if ( result.fullName == undefined ) { printLn("You need to define fullName"); return(false); };
			if ( typeof(result.fullName) != "string" ) { printLn("fullName can only be a string defined by adding firstName and lastName"); return(false); };
			if ( typeof(result.fullName) == "string" ) { printLn("Well Done " + code.myName); return(true); };
		}
	}
},  {
	tabName: "Ex3",
	title: "Declaring an Array",
	input: "Declaring and using Arrays",
	autoRun: undefined,
	instructions: "<H1>Declaring and using Arrays</H1>" +
				"Arrays can store lists of information<BR>" + 
				"Type in the Javascript below into the<BR>" +
				"Javascript window<BR>" + 
				"<PRE>var myArray = [1,2,3,4];</PRE>" +   
				"<BR><BR>and then click on the run button <BR>" +
				"and then look at the output window",
	source: "var myArray=[1,2,3,4];\n",
	runCode: function() {
		var result = code.run({returnVariableNames:['myArray']});
		if ( result.myArray == undefined ) { printLn("You Have to define the variable myArray"); return(false); };
		if ( Array.isArray(result.myArray) == false ) { printLn("Try defining myArray with square brackets \n 'var myArray = [1,2,3,4]'"); return(false); };
		if ( Array.isArray(result.myArray) == true ) { printLn("Well Done, youve created an array with the following values [" + result.myArray + "]" ); return(true); };
	}
}, {
	tabName: "Ex4",
	title: "Outputting data",
	input: "",
	autoRun: undefined,
	instructions: "<H2>Outputting Data</H2>" +
				"Type in the following Javascript into the programming window<BR>" +
				"<PRE>printLn(\"Hello World\");\n</PRE><BR><BR>" +
				"and then click on the run button <BR>" + 
				"and look at the output window",
	source: "printLn('Hello World');\n",
	runCode: function() {
		var result = code.run();
		var outputString = _outputTextArray.join(); // Joins all the output string array into one string
		if( outputString.match(/Hello World/g).length >= 1 ) {
			printLn("Well Done");
			return(true); 
		} else { 
			printLn('You must print "Hello World" exactly');
			return(false); 
		}
	}
}, {
	tabName: "Ex5",
	title: "Inputting data",
	input: "Mary Had a Little Lamb\n" +
			"Its fleece was white as snow\n" +
			"Everywhere that Mary went\n" +
			"The lamb was sure to go",
	autoRun: undefined,
	instructions: "<H2>Inputting Data</H2>" +
				"Type in the following code into the Javascript window<BR><BR>" + 
				"<PRE>var myString=readLn();\n" + 
				"printLn(myString);\n</PRE><BR><BR>" +
				"and then click on the run button <BR>" +
				"and then look at the output window",
	source: "var myString=readLn();\n" + 
			"printLn(myString);\n",
	runCode: function() {
		var result = code.run({returnVariableNames:['myString']});
		if ( result.myString == undefined ) { 
			printLn('Use the function readLn() and assign its returned value to inputString');
			return(false);
		}
		if( result.myString.match(/Mary Had a Little Lamb/g).length >= 1 ) {
			printLn("Well Done");
			return(true); 
		} else {
			printLn('You must assign the value of myString exactly');
			return(false);
		}
	}
}, {
	tabName: "Ex6",
	title: "For loops",
	input: "Mary Had a Little Lamb\n" +
			"Its fleece was white as snow\n" + 
			"Everywhere that Mary went\n" +
			"The lamb was sure to go",
	autoRun: undefined,
	instructions: "<H2>For loops</H2>" +
				"Type in the following code into the Javascript window<BR><BR>" + 
				"<PRE>var myText ;\n\n" +
				"while ( typeof(myText = readLn()) != \'undefined\' ) {\n" + 
				"\t\tprintLn(myText,{size:\'20pt\',color:\'brown\'});\n" +
				"}\n</PRE><BR><BR>" + 
				"and then click on the run button <BR>" + 
				"and then look at the output window",
	source: "var myText ;\n\nwhile ( typeof(myText = readLn()) != 'undefined' ) {\n\t\tprintLn(myText,{size:'20pt',color:'brown'});\n}",
	runCode: function() {
		var result = code.run();
		var outputString = _outputTextArray.join(); // Joins all the output string array into one string
		if( outputString.match(/The lamb was sure to go/g).length >= 1 ) {
			printLn("Well Done");
			return(true); 
		} else {
			printLn('You must use a for loop to get all lines of data');
			return(false); 
		}
	}
}];

var exercisesHTML = [ {
	tabName: "HTML",
	title: "Introduction to HTML",
	input: "", 
	instructions: "<H3>Introduction to HTML</H3> \n" +
		"HTML Stands for Hyper Text Mark Up Language, \n" +
		"it is readable and editable by people using a simple text editor \n" +
		"but when viewed by a browser it can render text, images, clickable links \n" +
		"and a great variety of graphical information. Elenments of HTML are represented \n" +
		" by unique <em>tags</em> which define the type of the element, for instance \n" + 
		" a level 1 heading is represented as text by begining and ending tags \n" +
		"<xmp>\n<H1>This is a level 1 Heading</H1>\n</xmp>\n" + 
		" however when rendered in a browser a level 1 heading looks like \n" +
		"<H1>This is a level 1 Heading</H1> \n" +
		"In the following exercise we will be looking at the small sub set of HTML \n" +
		" tags that are used in this application \n",
	source: "//No codeing required for the introduction\n",
	runCode: function() {	
		if ( typeof(code.mcqAns) == 'undefined' ) { printLn("You need to select one of the options first"); return(false); };
		if ( code.mcqAns == 1 ) { printLn("No sorry the instructions page is not written in CSS"); return(false); };
		if ( code.mcqAns == 2 ) { printLn("No sorry the instructions page is not written in Javascript"); return(false); };
		if ( code.mcqAns == 4 ) { printLn("No sorry the instructions page is not written in XML"); return(false); };
		if ( code.mcqAns == 3 ) { printLn("Yes the instruction page is writtein in HTML"); return(true); };
	}
},  {
	tabName: "Contents",
	title: "Contents for Introduction lesson",
	input: "",
	autoRun: function() { autoGenLessonContents(); }, // Automatically generate the contents page.
	instructions: undefined , // autoGenContents() sets the instructions window.
	source: "",
	runCode: function() {		
		return(true);
	}
}];

var exercisesStrings = [ {
	tabName: "HTML",
	title: "Strings and Operations on Strings",
	input: "", 
	instructions: "<H3>Strings and Operations on Strings</H3> \n" +
		"Strings are used widely in computer programs, \n" +
		"so it is important to understand how they can be used \n" +
		"First of all Strings are objects, and like all objects \n" +
		"they have their own unique methods of functions \n" +
		" by unique <em>tags</em> which define the type of the element, for instance \n" + 
		" a level 1 heading is represented as text by begining and ending tags \n" +
		"<xmp>\n<H1>This is a level 1 Heading</H1>\n</xmp>\n" + 
		" however when rendered in a browser a level 1 heading looks like \n" +
		"<H1>This is a level 1 Heading</H1> \n" +
		"In the following exercise we will be looking at the small sub set of HTML \n" +
		" tags that are used in this application \n",
	source: "//No codeing required for the introduction\n",
	runCode: function() {	
		if ( typeof(code.mcqAns) == 'undefined' ) { printLn("You need to select one of the options first"); return(false); };
		if ( code.mcqAns == 1 ) { printLn("No sorry the instructions page is not written in CSS"); return(false); };
		if ( code.mcqAns == 2 ) { printLn("No sorry the instructions page is not written in Javascript"); return(false); };
		if ( code.mcqAns == 4 ) { printLn("No sorry the instructions page is not written in XML"); return(false); };
		if ( code.mcqAns == 3 ) { printLn("Yes the instruction page is writtein in HTML"); return(true); };
	}
},  {
	tabName: "Contents",
	title: "Contents for String Lesson",
	input: "",
	autoRun: function() { autoGenLessonContents(); }, // Automatically generate the contents page.
	instructions: undefined , // autoGenContents() sets the instructions window.
	source: "",
	runCode: function() {		
		return(true);
	}
}, {
	tabName: "Ex1",
	title: "Using Strings",
	input: "",
	autoRun: undefined,
	instructions: "<H2>String operations</H2>" +
				"String variables can be added together using the '+' operator " +
				"For example " +
				"<PRE>" +  // use the Pre Tag for raw text like computer code
				"var firstName='John';\n" +  // the character \n means a new line
				"var lastName='Smith';\n" + 
				"var fullName = firstName + ' ' + lastName ;\n" +
				"printLn('Your full name is ' + fullName);\n" +
				"</PRE><BR>" +
				"Notice the new command that you can use to write to the ouput window" +
				"Now click on the run button " +
				"and look at the output window",
		// Use source if you want to put some text in the codeing window.
		// Note this is similar to the instructions window, you have to add 
		// multiple strings, because javascript does not like multi line strings
		// note also that \n is way of embedding a new line into a string
	source: "// Your source goes in this window\n" +
			"var firstName='John';\n" +
			"var lastName='Smith';\n" + 
			"var fullName = firstName + ' ' + lastName ;\n" +
			"printLn('Your full name is ' + fullName);\n",
	runCode: function() {
		// Before we run any code we can check that the user is using the keyword var.
		var sourceCode = code.source() ;
		printLn(sourceCode);
		// Execute the users code by the code object, using the run() method/function
		// you can ask the code.run() function to return specific variables
		// into a returned variable.
		// for example
		// result=code.run({returnVariableNames:['someVariable','otherVariable']});
		// The returned vairables can be access as 
		// result.someVariable, etc
		var result = code.run({returnVariableNames:['firstName','lastName','fullName']});
		// first check to see if the code executed sucessfully.
		if ( code.executed == false ) { // The code failed to execute sucessfully 
			// The students code did not compile, so we may as well copy the
			// eval error message to the output window.
			printLn("Sorry you have an syntax error on line :" + code.lineNumber ); 
			printLn("Please fix this error first\n");
			printLn(code.errorMessage, {color:"red"} );
			return(false); // We return false to say that the student failed to answer this question.
		} else { // The code executed sucessfully
			// so now we can check that each variable was defined and that each variable has the right type
			if ( result.firstName == undefined ) { printLn("You need to define firstName as a variable AND assign a value to it."); return(false); };
			if ( typeof(result.firstName) != "string" ) { printLn("firstName can only be a string"); return(false); };
			if ( typeof(result.firstName) == "string" ) { printLn("Well Done " + code.myName + "youve created firstName as a string\n"); };
			if ( result.lastName == undefined ) { printLn("You need to define lastName as a variable and assign a value to it."); return(false); };
			if ( typeof(result.lastName) != "string" ) { printLn("lastName can only be a string"); return(false); };
			if ( typeof(result.lastName) == "string" ) { printLn("Well Done " + code.myName + "youve created lastName as a string\n"); };
			if ( result.fullName == undefined ) { printLn("You need to define fullName"); return(false); };
			if ( typeof(result.fullName) != "string" ) { printLn("fullName can only be a string defined by adding firstName and lastName"); return(false); };
			if ( typeof(result.fullName) == "string" ) { printLn("Well Done " + code.myName); return(true); };
		}
	}
}];


var listOfLessons = [ {
	tabName: "Lesson List",
	title: "List of Lessons",
	input: "", 
	autoRun: function() { autoGenContents(); } ,
	instructions: "<H2>Student written lessons</H2> " ,
	runCode: undefined
}];

/* This is not really a lesson it is just a break in the lessons */
var exercisesStudentLessons = [ {
	tabName: "No Exercises",
	title: "",
	input: "", 
	autoRun: undefined ,
	instructions: "<H2>Student Lessons</H2>" +
			"Student written lessons follow this page<BR>" +
			"Currently student lessons may contain no content. " +
			"At least untill the student " +
			"or student group supplies content for their particular lesson " +  
			"Students should work on their lesson within the file called  " +
			"'yourLesson.js' " +
			"this external javascript file is imported into the  " +
			"program as an array of exercises which is used to define a single lesson." ,
	runCode: undefined
}];

var exercisesUndefined = [ { 
	tabName: "No Exercises",
	title: "", 
	input: "", 
	autoRun: function () {
		// This bit of code puts the name of the lesson into the 
		// instructions window to help the students out.
		var exercisesArrayName = "exercises" + currentLesson.tabName ;
		exercisesArrayName = exercisesArrayName.replace(/\//ig,''); // remove any forward slashes 
		exercisesArrayName = exercisesArrayName.replace(/\s/g,''); // remove any spaces
		document.getElementById("exercisesArrayName").innerHTML = exercisesArrayName ; // insert into instructions
	} ,
	instructions: "<H2>Undefined Lesson</H2>" +
			"This lesson is currently undefined " +
			"If you are a student working on your own lesson you should " +
			"define your lesson in the file called <em>'yourLesson.js'</em>, " + 
			"define your lesson by replacing <PRE> " +
			"var exercisesUndefined = [ { /* your code ... */ } ;\n" +
			"</PRE> " + 
			"with " +
			"<PRE> " +
			"var <div class='jsVariable' id='exercisesArrayName'></div> = [ { /* your code ... */ } ;\n" +
			"</PRE> " + 
			"when you define your lesson inside the file yourLesson.js " +
			"this lesson will no longer be undefined ",
	runCode: undefined
}];

/* The Student lessons are listed below  lessonStudentLessons
	Declaring variables and data structures in Javascript
	Performing Input and Output operations using Javascript. 
	Doing Calculations in Javascript using Boolean, String and Number
	Understanding Conditional operations using Boolean Calculations
	Understanding program control, Sequencing Selection and Iteration
	Understanding modular programming by creating and using functions
	Understanding modular programming by creating and using Objects
	Creating graphics using the Canvas object
	Creating sound using the Audio object
*/

var lessonJavaScript101 = {
	tabName: "JS101",
	title: "Learning Javascript",
	exercises: exercisesIntroduction
};

var lessonContents = {
	tabName: "Lessons",
	title: "List of Lessons",
	exercises: listOfLessons 
} ;
	
var lessonHTML = {
	tabName: "HTML",
	title: "Introduction to HTML",
	exercises: exercisesHTML 
};

var lessonStrings = {
	tabName: "Strings",
	title: "Strings and Operations on Strings",
	exercises: exercisesStrings
};

var lessonCode = {
	tabName: "Code API",
	title: "Creating Lessons using the Code Object API",
	exercises: ( typeof exercisesCodeAPI === 'undefined' ) ?  exercisesUndefined : exercisesCodeAPI 
};

var lessonExampleLesson1 = {
	tabName: "Exmpl Lsn1",
	title: "Creating an example lesson by example 1",
	exercises: ( typeof exercisesExampleLesson1 === 'undefined' ) ?  exercisesUndefined : exercisesExampleLesson1
};

var lessonExampleLesson2 = {
	tabName: "Exmpl Lsn2",
	title: "Creating an example lesson by example 2",
	exercises: ( typeof exercisesExampleLesson2 === 'undefined' ) ?  exercisesUndefined : exercisesExampleLesson2
};

var lessonExampleExercise1 = {
	tabName: "Exmpl Ex1",
	title: "Creating an exercise by example 1",
	exercises: ( typeof exercisesExampleExercise1 === 'undefined' ) ?  exercisesUndefined : exercisesExampleExercise1
};

var lessonExampleExercise2 = {
	tabName: "Exmpl Ex1",
	title: "Creating an exercise by example 2",
	exercises: ( typeof exercisesExampleExercise2 === 'undefined' ) ?  exercisesUndefined : exercisesExampleExercise2
};

var lessonExampleExercise3 = {
	tabName: "Exmpl Ex1",
	title: "Creating an exercise by example 3",
	exercises: ( typeof exercisesExampleExercise3 === 'undefined' ) ?  exercisesUndefined : exercisesExampleExercise3
};

var lessonStudentLessons = {
	tabName: "Student lsns",
	title: ".",
	exercises: exercisesStudentLessons
} ;

var lessonVariables = {
	tabName: "Variables",
	title: "Declaring variables and data structures",
exercises: ( typeof exercisesVariables === 'undefined' ) ?  exercisesUndefined : exercisesVariables 
} ;

var lessonInputOutput = {
	tabName: "Input/Output",
	title: "Performing Input and Output operations",
	exercises: ( typeof exercisesInputOutput === 'undefined' ) ? exercisesUndefined : exercisesInputOutput 
};

var lessonCalculations = {
	tabName: "Calculations",
	title: "Boolean, String and Number Calculations",
	exercises: ( typeof exercisesCalculations === 'undefined' ) ? exercisesUndefined : exercisesCalculations 
};

var lessonConditionals = {
	tabName: "Conditionals",
	title: "Conditional operations using Booleans",
	exercises: ( typeof exercisesConditionals === 'undefined' ) ? exercisesUndefined : exercisesConditionals 
};

var lessonFlowControl = {
	tabName: "Flow Control",
	title: "Sequencing Selection and Iteration",
	exercises: ( typeof exercisesFlowControl === 'undefined' ) ? exercisesUndefined : exercisesFlowControl 
};

var lessonFunctions = {
	tabName: "Functions",
	title: "Creating and using Functions",
	exercises: ( typeof exercisesFunctions === 'undefined' ) ? exercisesUndefined : exercisesFunctions 
};

var lessonObjects = {
	tabName: "Objects",
	title: "creating and using Objects",
	exercises: ( typeof exercisesObjects === 'undefined' ) ? exercisesUndefined : exercisesObjects 
};

var lessonCanvas = {
	tabName: "Canvas",
	title: "Creating graphics using the Canvas object",
	exercises: ( typeof exercisesCanvas === 'undefined' ) ? exercisesUndefined : exercisesCanvas 
};

var lessonAudioVideo = {
	tabName: "Audio/Video",
	title: "Creating Audio and Video",
	exercises: ( typeof exercisesAudioVideo === 'undefined' ) ? exercisesUndefined : exercisesAudioVideo 
};


var lessons = [ lessonJavaScript101, 
				lessonContents,
				lessonHTML,
				lessonStrings,
				lessonCode,
				lessonExampleLesson1,
//				lessonExampleLesson2,
//				lessonExampleExercise1,
//				lessonExampleExercise2,
//				lessonExampleExercise3,
				lessonStudentLessons, // Student lessons are below this line
				lessonVariables,
				lessonInputOutput,
				lessonCalculations,
				lessonConditionals,
				lessonFlowControl,
				lessonFunctions,
				lessonObjects,
				lessonCanvas,
				lessonAudioVideo ] ;
				
