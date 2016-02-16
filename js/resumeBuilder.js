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
* @returns {string} return a string representing whether x is >, < or = y
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

console.log(getRelationship(1,4));
console.log(getRelationship(1,1));
console.log(getRelationship("that",2));
console.log(getRelationship("this"," something else"));
console.log(getRelationship(3));
console.log(getRelationship("hi"));
console.log(getRelationship(NaN));
console.log(getRelationship(NaN, undefined));


