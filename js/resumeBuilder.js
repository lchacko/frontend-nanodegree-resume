/*
This is empty on purpose! Your code to build the resume will go here.
 */

'use strict';

var bio = {
	'name': 'Lori Ronayne',
	'role': 'Software Engineer',
	'welcomeMessage': 'Welcome to my page!',
	'contacts': {
		'mobile': '415-471-0416',
		'email': 'Lori.Ronayne@gmail.com',
		'github': 'na',
		'twitter': 'na',
		'location': 'San Francisco, CA'
	},
	'skills': [
		'HTML', 'CSS', 'JavaScript', 'Python'
	],
	'bioPic': 'images/fry.jpg'
}

var work = {
	'jobs': [
		{
			'employer': 'Cumberland Consulting Group',
			'title': 'Technical Consultant',
			'location': 'Worcester, MA',
			'dates': '2014 - 2015',
			'description': 'Blah blah blah.'
		},
		{
			'employer': 'MedImpact Healthcare Systems',
			'title': 'Software Engineer',
			'location': 'San Diego, CA',
			'dates': '2012 - 2014',
			'description': 'La de da.'
		}
	]
}

var projects = {
	'projects': [
		{
			'title': 'Portfolio',
			'dates': '2016',
			'description': 'blah blah',
			'images': [
				'images/img1.gif', ''
			]
		},
		{
			'title': 'Interactive Resume',
			'dates': '2016',
			'description': 'be bop boop',
			'images': [
				'images/img3.gif', 'images/img4.gif'
			]
		}
	],
	display () {
		projects.projects.forEach(function(project) {
			$('#projects').append(HTMLprojectStart);
			$('.project-entry:last').append(HTMLprojectTitle.replace('%data%', project.title));
			$('.project-entry:last').append(HTMLprojectDates.replace('%data%', project.dates));
			$('.project-entry:last').append(HTMLprojectDescription.replace('%data%', project.description));
			project.images.forEach(function (image) {
				if (image.length > 0) {
					$('.project-entry:last').append(HTMLprojectImage.replace('%data%', image));
				}
			});
		});
	}
}

var education = {
	'schools': [
		{
			'name': 'Worcester Polytechnic Institute',
			'location': 'Worcester, MA', 
			'degree': 'MS',
			'majors': ['IT Management'],
			'dates': '2012',
			'url': ''
		},
		{
			'name': 'Anna Maria College',
			'location': 'Paxton, MA', 
			'degree': 'BA',
			'majors': ['Psychology'],
			'dates': '1998',
			'url': ''
		}
	],
	'onlineCourses': [
		{
			'title': '',
			'school': '',
			'dates': '',
			'url': ''
		},
		{
			'title': '',
			'school': '',
			'dates': '',
			'url': ''
		}
	]
}

/* 
Header 
*/

$('#header').prepend(HTMLheaderRole.replace('%data%', bio.role));
$('#header').prepend(HTMLheaderName.replace('%data%', bio.name));

$('#topContacts').append(HTMLmobile.replace('%data%', bio.contacts.mobile));
$('#topContacts').append(HTMLemail.replace('%data%', bio.contacts.email));
$('#topContacts').append(HTMLtwitter.replace('%data%', bio.contacts.twitter));
$('#topContacts').append(HTMLgithub.replace('%data%', bio.contacts.github));
$('#topContacts').append(HTMLblog.replace('%data%', bio.contacts.blog));
$('#topContacts').append(HTMLlocation.replace('%data%', bio.contacts.location));

$('#header').append(HTMLbioPic.replace('%data%', bio.bioPic));

$('#header').append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));

if (bio.skills.length > 0) {
	$('#header').append(HTMLskillsStart);
	$('#skills').append(HTMLskills.replace('%data%', bio.skills[3]));
	$('#skills').append(HTMLskills.replace('%data%', bio.skills[2]));
	$('#skills').append(HTMLskills.replace('%data%', bio.skills[1]));
	$('#skills').append(HTMLskills.replace('%data%', bio.skills[0]));
}

/* 
Work 
*/

function displayWork () {
	for (var i = 0; i < work.jobs.length; i++) {
		var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[i].employer);
		var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[i].title);
		$('#workExperience').append(HTMLworkStart);
		$('.work-entry:last').append(formattedEmployer + formattedTitle);
		$('.work-entry:last').append(HTMLworkDates.replace('%data%', work.jobs[i].dates));
		$('.work-entry:last').append(HTMLworkLocation.replace('%data%', work.jobs[i].location));
		$('.work-entry:last').append(HTMLworkDescription.replace('%data%', work.jobs[i].description));
	}
}

displayWork();

/* 
Internationalize
*/

function inName () {
	var newName = bio.name.trim().split(' ');
	newName[0] = newName[0].slice(0,1).toUpperCase() + newName[0].slice(1).toLowerCase();
	newName[1] = newName[1].toUpperCase();

	return newName[0] + ' ' + newName[1];
}

$('#main').append(internationalizeButton);


/*
Projects
*/

projects.display();

/*
Map
*/
$('#mapDiv').append(googleMap);

/*
Challenge Problem 1
*/

/**
* @description Compares 2 numbers
* @param {number} x
* @param {number} y
* @returns {string} A string representing whether x is >, < or = y
*/
function getRelationship(x,y) {
	var invalidX = isNaN(x);
	var invalidY = isNaN(y);

	if (invalidX && invalidY) {
		return 'Can\'t compare relationships because ' + x + ' and ' + y + ' are not numbers.';
	} else if (invalidX) {
		return 'Can\'t compare relationships because ' + x + ' is not a number.';
	} else if (invalidY) {
		return 'Can\'t compare relationships because ' + y + ' is not a number.';
	} 

	if (x < y) {
		return '<';
	} else if (x > y) {
		return '>';
	} else {
		return '=';
	}

}

/*
console.log(getRelationship(1,4));
console.log(getRelationship(1,1));
console.log(getRelationship("that",2));
console.log(getRelationship("this"," something else"));
console.log(getRelationship(3));
console.log(getRelationship("hi"));
console.log(getRelationship(NaN));
console.log(getRelationship(NaN, undefined));
*/

/*
Challenge Problem 2
*/

/**
* @description Reformats and alphabetizes array of names
* @param {string[]} names - Array of names in 'firstname lastname' format
* @returns {string []} Array of alphabetized names in 'lastname, firstname' format
*/
function alphabetizer(names) {

    // Copy array
    var newNames = names.slice();

    // Reformat each name from 'firstname lastname' to 'lastname, firstname'
    newNames.forEach(function(name, i) {
    	var newName = name.split(" ");
    	newNames[i] = newName[1] + ", " + newName[0];
    });

    //Sort
    newNames.sort();
    
    return newNames;  
}

var moonWalkers = [
  "Neil Armstrong",
  "Buzz Aldrin",
  "Pete Conrad",
  "Alan Bean",
  "Alan Shepard",
  "Edgar Mitchell",
  "David Scott",
  "James Irwin",
  "John Young",
  "Charles Duke",
  "Eugene Cernan",
  "Harrison Schmitt"
];

/*
// Try logging your results to test your code!
console.log(alphabetizer(moonWalkers));
*/

/*
Challenge Problem 3
*/

// Iterate through the localizedRuleNames in ruleResults and return an array of their strings.
function ruleList(results) {
    // Your code goes here!
    var ruleResults = results.formattedResults.ruleResults;
    var localizedRuleNames = []; 
    var i = 0;

    for (var ruleResult in ruleResults) {
    	if (ruleResults.hasOwnProperty(ruleResult)) {
    		var rule = ruleResults[ruleResult];
    		if (rule.hasOwnProperty('localizedRuleName')) {
    			localizedRuleNames[i] = rule.localizedRuleName;
	    		i++;
    		}
    	}
    	
    }

    return localizedRuleNames;
}

// Iterate through pageStats in the psiResults object and return the total number of bytes to load the website.
function totalBytes(results) {
    // Your code goes here!
    var pageStats = results.pageStats;
    var total = 0;

    for (var key in pageStats) {
    	if (pageStats.hasOwnProperty(key) && key.toLowerCase().includes('bytes')) {
    		total += Number(pageStats[key]);
    	}
    }

    return total;

}

// Below, you'll find a sample PS Insights JSON and two console.log statements to help you test your code!

var psinsights = {
 "kind": "pagespeedonline#result",
 "id": "/speed/pagespeed",
 "responseCode": 200,
 "title": "PageSpeed Home",
 "score": 90,
 "pageStats": {
  "numberResources": 22,
  "numberHosts": 7,
  "totalRequestBytes": "2761",
  "numberStaticResources": 16,
  "htmlResponseBytes": "91981",
  "cssResponseBytes": "37728",
  "imageResponseBytes": "13909",
  "javascriptResponseBytes": "247214",
  "otherResponseBytes": "8804",
  "numberJsResources": 6,
  "numberCssResources": 2
 },
 "formattedResults": {
  "locale": "en_US",
  "ruleResults": {
    "AvoidBadRequests": {
      "localizedRuleName": "Avoid bad requests",
      "ruleImpact": 0.0
    },
    "MinifyJavaScript": {
      "localizedRuleName": "Minify JavaScript",
      "ruleImpact": 0.1417,
      "urlBlocks": [
      {
        "header": {
       "format": "Minifying the following JavaScript resources could reduce their size by $1 ($2% reduction).",
       "args": [
        {
         "type": "BYTES",
         "value": "1.3KiB"
        },
        {
         "type": "INT_LITERAL",
         "value": "0"
        }
       ]
        },
        "urls": [
        {
          "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://code.google.com/js/codesite_tail.pack.04102009.js"
          },
          {
           "type": "BYTES",
           "value": "717B"
          },
          {
           "type": "INT_LITERAL",
           "value": "1"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://www.gmodules.com/ig/proxy?url\u003dhttp%3A%2F%2Fjqueryjs.googlecode.com%2Ffiles%2Fjquery-1.2.6.min.js"
          },
          {
           "type": "BYTES",
           "value": "258B"
          },
          {
           "type": "INT_LITERAL",
           "value": "0"
          }
         ]
        }
       }
      ]
     }
    ]
   },
   "SpriteImages": {
    "localizedRuleName": "Combine images into CSS sprites",
    "ruleImpact": 0.0
   }
  }
 },
 "version": {
  "major": 1,
  "minor": 11
 }
};

// Try logging the outputs below to test your code!
console.log(ruleList(psinsights));
console.log(totalBytes(psinsights));














