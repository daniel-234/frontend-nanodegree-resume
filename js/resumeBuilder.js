var skills = ["HTML", "CSS", "Bootstrap", "Javascript", "jQuery"];

var bio = {
	"name": "Daniele Erbì",
	"role": "Front End Engineer",
	"contacts": {
		"mobile": "012-345-6789",
		"email": "an-email@email.com",
		"github": "daniel-234",
		"twitter": "https://twitter.com/",
		"location": "London, UK"
	},
	"welcomeMessage": "This is my second project for the Udacity Front End Nanodegree " +
	                  "and to show my skills and the new things I've learned, I adapted " +
	                  "this online resume. By the way, don't trust everything you read here!",
	"skills": skills,
	"biopic": "images/fry.jpg",
	// display properties of the 'bio' object
	display: function() {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedMobile	= HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
		var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedName);
		$("#header").append(formattedRole);
		$("#header").append(formattedMobile);
		$("#header").append(formattedEmail);
		$("#header").append(formattedGitHub);
		$("#header").append(formattedTwitter);
		$("#header").append(formattedLocation);
		$("#header").append(formattedPic);
		$("#header").append(formattedMessage);
		if (bio["skills"]) {
			$("#header").append(HTMLskillsStart);
			for (let i = 0; i < bio.skills.length; i++) {
				var formattedSkill = HTMLskills.replace("%data%", bio["skills"][i]);
				$("#skills").append(formattedSkill);
			}

		}
	}
};

bio.display();