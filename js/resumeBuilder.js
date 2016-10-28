var skills = ["HTML", "CSS", "Javascript", "jQuery"];

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
	                  "and I adapted this online resume to show my skills and the new " +
	                  "things I've learned. By the way, don't trust everything you read here!",
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
			for (var i = 0; i < bio.skills.length; i++) {
				var formattedSkill = HTMLskills.replace("%data%", bio["skills"][i]);
				$("#skills").append(formattedSkill);
			}

		}
	}
};

var work = {
	"jobs": [
		{
			"start": "2015",
			"employer": "Ice Cream Inc.",
			"title": "CEO",
			"location": "London, UK",
			"dates": "2015 - 'in progress'",
			"description": "Ran the best ice cream shops in town."
		},
		{
			"start": "2010",
			"employer": "Ice Cream Inc.",
			"title": "Software Engineer",
			"location": "Berlin, DE",
			"dates": "2010 - 2015",
			"description": "Built great software for the best ice cream shops in town."
		},
		{
			"start": "2006",
			"employer": "Ice Cream Inc.",
			"title": "Teller",
			"location": "Milan, IT",
			"dates": "2006 - 2010",
			"description": "Worked in the best ice cream shop in town."
		}
	],
	display: function() {
		for (var i = 0; i < work.jobs.length; i++) {
			// create a new div for every work experience in the jobs array
			$("#workExperience").append(HTMLworkStart);
			var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title)
			// concatenate employer and title
			var formattedWorkEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
			var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
			$(".work-entry:last").append(formattedWorkEmployerTitle);
			$(".work-entry:last").append(formattedWorkDates);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedWorkDescription);
		}
	}
};

bio.display();
work.display();