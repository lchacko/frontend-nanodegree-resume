/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
	"name": "Lori Ronayne",
	"role": "Software Engineer",
	"contact": {
		"mobile": "415-471-0416",
		"email": "Lori.Ronayne@gmail.com",
		"twitter": "na",
		"github": "https://github.com/lchacko",
		"blog": "na",
		"location": "San Francisco, CA 94117"
	},
	"bioPic": "images/fry.jpg",
	"msg": "Welcome to my interactive resume!",
	"skills": [
		"HTML", "CSS" ,"JavaScript", "Python"
	]
}

$("#header").prepend(HTMLskills.replace("%data%", bio.skills[3]));
$("#header").prepend(HTMLskills.replace("%data%", bio.skills[2]));
$("#header").prepend(HTMLskills.replace("%data%", bio.skills[1]));
$("#header").prepend(HTMLskills.replace("%data%", bio.skills[0]));
$("#header").prepend(HTMLskillsStart);
$("#header").prepend(HTMLwelcomeMsg.replace("%data%", bio.msg));
$("#header").prepend(HTMLbioPic.replace("%data%", bio.bioPic));
$("#header").prepend(HTMLlocation.replace("%data%", bio.contact.location));
$("#header").prepend(HTMLblog.replace("%data%", bio.contact.blog));
$("#header").prepend(HTMLgithub.replace("%data%", bio.contact.github));
$("#header").prepend(HTMLtwitter.replace("%data%", bio.contact.twitter));
$("#header").prepend(HTMLemail.replace("%data%", bio.contact.email));
$("#header").prepend(HTMLmobile.replace("%data%", bio.contact.mobile));
$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

/* Create work object using dot notation */

var work = {}
work.employer = "Cumberland Consulting Group";
work.title = "Technical Consultant";
work.date = "Jun 2014 - Feb 2015";
work.location = "San Francisco, CA";
work.desc = "Developed custom ETL application for multinational integration project at GENENTECH";

$("#workExperience").append(HTMLworkStart);
$("#workExperience").append(HTMLworkEmployer.replace("%data%", work.employer));
$("#workExperience").append(HTMLworkTitle.replace("%data%", work.title));
$("#workExperience").append(HTMLworkDates.replace("%data%", work.date));
$("#workExperience").append(HTMLworkLocation.replace("%data%", work.location));
$("#workExperience").append(HTMLworkDescription.replace("%data%", work.desc));


/* Create school object using bracket notation */

var school = {}
school["name"] = "Worcester Polytechnic Institute";
school["degree"] = "MS";
school["date"] = "2012";
school["location"] = "Worcester, MA";
school["major"] = "IT Management - 4.0 GPA";

$("#education").append(HTMLschoolStart);
$("#education").append(HTMLschoolName.replace("%data%", school["name"]));
$("#education").append(HTMLschoolDegree.replace("%data%", school["degree"]));
$("#education").append(HTMLschoolDates.replace("%data%", school["date"]));
$("#education").append(HTMLschoolLocation.replace("%data%", school["location"]));
$("#education").append(HTMLschoolMajor.replace("%data%", school["major"]));

/* Create eduction object using object literal notation (JSON) */

var education {
	"schools": [
		{
			"name": "Worcester Polytechnic Institute",
			"degree": "MS",
			"date": "2012",
			"location": "Worcester, MA",
			"major": "IT Management"
		},
		{
			"name": "Anna Maria College",
			"degree": "BA",
			"date": "1998",
			"location": "Paxton, MA",
			"major": "Psychology"
		}
	]
}




