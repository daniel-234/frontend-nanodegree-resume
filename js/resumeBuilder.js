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
	// Display properties of the 'bio' object
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
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		$("#topContacts").append(formattedMobile);
		$("#topContacts").append(formattedEmail);
		$("#topContacts").append(formattedGitHub);
		$("#topContacts").append(formattedTwitter);
		$("#topContacts").append(formattedLocation);
		$("#header").append(formattedPic);
		$("#header").append(formattedMessage);
		$("#footerContacts").append(formattedMobile);
		$("#footerContacts").append(formattedEmail);
		$("#footerContacts").append(formattedGitHub);
		$("#footerContacts").append(formattedTwitter);
		$("#footerContacts").append(formattedLocation);
		if (bio.skills) {
			$("#header").append(HTMLskillsStart);
			for (var i = 0; i < bio.skills.length; i++) {
				var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
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
		// Display work experience in div with id=" workExperience"
		$("#workExperience").append(HTMLworkStart);
		for (var i = 0; i < work.jobs.length; i++) {
			var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title)
			// Concatenate employer and title
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

var projects = {
	"projects": [
		{
			"start": "2016",
			"title": "Online resume",
			"dates": "09/2016 - 10/2016",
			"description": "This is the second project in the Udacity Front End Nanodegree. " +
			                "After learning Javascript and jQuery, I built an online resume to " +
			                "showcase my new wonderful skills.",
			"images": ["images/online-resume.svg", "images/arcade-game-clone.svg"]
		},
		{
			"start": "2016",
			"title": "Arcade game clone",
			"dates": "10/2016 - 11/2016",
			"description": "This is the third project in the Udacity Front End Nanodegree. " +
			                "After learning Object Oriented Javascript and HTML5 canvas, I " +
			                "cloned an arcade game to showcase my new wonderful skills.",
			"images": ["images/arcade-game-clone.svg", "images/online-resume.svg"]
		}
	],
	display: function() {
		// Display projects in div with id="projects"
		$("#projects").append(HTMLprojectStart);
		for (var i = 0; i < projects.projects.length; i++) {
			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);
			// Iterate through the images array in each project
			for (var j = 0; j < projects.projects[i].images.length; j++) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
				$(".project-entry:last").append(formattedProjectImage);
			}
		}
	}
};

var education = {
	"schools": [
		{
			"start": "2000",
			"name": "Università degli Studi di Cagliari",
			"location": "Cagliari, IT",
			"degree": "BA",
			"majors": ["Philosophy", "History", "Literature"],
			"dates": "2000 - 2004",
			"url": "http://www.unica.it/"
		},
		{
			"start": "2004",
			"name": "Università degli Studi di Cagliari",
			"location": "Cagliari, IT",
			"degree": "MS",
			"majors": ["Engineering", "Maths", "Computer Science"],
			"dates": "2004 - 2006",
			"url": "http://www.unica.it/"
		},
	],
	"onlineCourses": [
		{
			"title": "Front End Nanodegree",
			"school": "Udacity",
			"dates": "09/2016 - in progress",
			"url": "https://www.udacity.com/"
		}
	],
	display: function() {
		$("#education").append(HTMLschoolStart);
		for (var i = 0; i < education.schools.length; i++) {
			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors[0]);
			$(".education-entry:last").append(formattedSchoolName);
			$(".education-entry:last").append(formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
		}

		if (education.onlineCourses) {
			$(".education-entry:last").append(HTMLonlineClasses);
			for (var j = 0; j < education.onlineCourses.length; j++) {
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[j].title);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[j].school);
				var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[j].dates);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[j].url);
				$(".education-entry:last").append(formattedOnlineTitle);
				$(".education-entry:last").append(formattedOnlineSchool);
				$(".education-entry:last").append(formattedonlineDates);
				$(".education-entry:last").append(formattedOnlineURL);
			}
		}

/*

*/
	}
};

bio.display();
work.display();
projects.display();
education.display();

// Add a map to the page
$("#mapDiv").append(googleMap);