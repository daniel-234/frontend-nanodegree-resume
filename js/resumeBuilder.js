var bio = {
	"name": "Daniele Erbì",
	"role": "Front End Engineer",
	"contacts": {
		"mobile": "012-345-6789",
		"email": "an-email@email.com",
		"github": "daniel-234",
		"twitter": "https://twitter.com/",
		"location": "London(UK)"
	},
	"welcomeMessage": "This is my second project for the Udacity Front End Nanodegree" +
	                  "and to show my skills and the new things I've learned, I adapted" +
	                  "this online resume. By the way, don't trust everything you read here!",
	"skills": skills,
	"biopic": "images/fry.jpg"
};

var skills = ["HTML", "CSS", "Bootstrap", "Javascript", "jQuery"];

// This code needs to be added to let anything display on screen
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").append(formattedName);
$("#header").append(formattedRole);
$("#header").append(formattedPic);