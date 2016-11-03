var bio = {
    "name": "Daniele Erbì",
    "role": "Front End Engineer",
    "contacts": {
        "mobile": "012-345-6789",
        "email": "an-email@email.com",
        "linkedin": "daniele-erb%C3%AC-304a53120",
        "github": "daniel-234",
        "twitter": "#",
        "location": "London, UK"
    },
    "welcomeMessage": "This is my second project for the Udacity Front End Nanodegree and I adapted this online resume to show my skills and the new things I've learned. By the way, I added some fake personal informations!",
    "skills": ["HTML", "CSS", "JavaScript", "jQuery"],
    "hobbies": ["reading", "cinema", "sports"],
    "biopic": "images/fry.jpg",
    display: function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedLinkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
        var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        // wrap the image element in a square div element to render it as circular
        var imageDiv = $("<div class='picture-elem'></div>");
        var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#aside").prepend(formattedLocation);
        $("#aside").prepend(formattedMobile);
        $("#aside").prepend(formattedRole);
        $("#aside").prepend(formattedName);
        $("#topContacts").append(formattedEmail);
        $("#topContacts").append(formattedLinkedin);
        $("#topContacts").append(formattedGitHub);
        $("#topContacts").append(formattedTwitter);
        $("#aside").prepend(imageDiv);
        $(".picture-elem").prepend(formattedPic);
        $("#header").prepend(formattedMessage);
        $("#footerContacts").append(formattedEmail);
        $("#footerContacts").append(formattedLinkedin);
        $("#footerContacts").append(formattedGitHub);
        $("#footerContacts").append(formattedTwitter);
        if (bio.skills) {
            $("#skillsDiv").append(HTMLskillsStart);
            for (var i = 0; i < bio.skills.length; i++) {
                var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
                $("#skills").append(formattedSkill);
            }

        }
        if (bio.hobbies) {
            $("#hobbiesDiv").append(HTMLhobbiesStart);
            for (var j = 0; j < bio.hobbies.length; j++) {
                var formattedHobbies = HTMLhobbies.replace("%data%", bio.hobbies[j]);
                $("#hobbies").append(formattedHobbies);
            }

        }
    }
}

var work = {
    "jobs": [{
        "start": "2015",
        "employer": "NewBank Inc.",
        "title": "Lead Software Engineer",
        "location": "London, UK",
        "dates": "2015 - 'in progress'",
        "description": "Built the infrastructure for a new Fintech company."
    }, {
        "start": "2010",
        "employer": "MyCar Inc.",
        "title": "Senior Software Engineer",
        "location": "Berlin, DE",
        "dates": "2010 - 2015",
        "description": "Built software for a connected car."
    }, {
        "start": "2006",
        "employer": "New Ice Cream Inc.",
        "title": "Software Engineer",
        "location": "Milan, IT",
        "dates": "2006 - 2010",
        "description": "Built software for the best ice cream shops in town."
    }],
    display: function() {
        $("#workExperience").append(HTMLworkStart);
        for (var i = 0; i < work.jobs.length; i++) {
            var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
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
}

var projects = {
    "projects": [{
        "start": "2016",
        "title": "Portfolio Website",
        "url": "portfolio-website/",
        "dates": "2016",
        "description": "After learning HTML, CSS and some basic JavaScript, as a first project for the Udacity Front End Nanodegree we were asked to build a Portfolio Website.",
        "images": ["images/portfolio-website.png"]
    }, {
        "start": "2016",
        "title": "Arcade Game Clone",
        "url": "",
        "dates": "2016",
        "description": "This is the third project in the Udacity Front End Nanodegree. After learning Object Oriented JavaScript and HTML5 canvas, I cloned an arcade game to showcase my new wonderful skills.",
        "images": ["images/arcade-game-clone.svg"]
    }, {
        "start": "2016",
        "title": "Neighborhood Map",
        "url": "",
        "dates": "2016",
        "description": "This is the fifth project in the Udacity Front End Nanodegree. We were asked to build a map application using all the techniques and new skills that we learned in this Nanodegree.",
        "images": ["images/neighborhood-map.svg"]
    }],
    display: function() {
        $("#projects").append(HTMLprojectStart);
        // Create dinamically a new div for each project and append to it its content to be shown on panel
        var projectPanel = $("<div class='project-panel active'></div>");
        // Display items from the first project object that is given class active to be the one visible as page loads
        var formattedFirstProjectTitle = HTMLfirstProjectTitle.replace("%data%", projects.projects[0].title);
        var formattedFirstProjectDates = HTMLfirstProjectDates.replace("%data%", projects.projects[0].dates);
        var formattedFirstProjectDescription = HTMLfirstProjectDescription.replace("%data%", projects.projects[0].description);
        $(".tabs:last").append(formattedFirstProjectTitle);
        $(".panels:last").append(projectPanel);
        $(".project-panel:last").append(formattedFirstProjectDates);
        $(".project-panel:last").append(formattedFirstProjectDescription);
        // Iterate through the images array in each project
        for (var j = 0; j < projects.projects[0].images.length; j++) {
            var formattedFirstProjectImage = HTMLfirstProjectImage.replace("%url%",
                projects.projects[0].url).replace("%data%", projects.projects[0].images[j]);
            $(".project-panel:last").append(formattedFirstProjectImage);
        }
        // Starting from the second project object, iterate through the projects array normally. Class '.active' has already been
        // assigned to the forst project in the array
        for (var i = 1; i < projects.projects.length; i++) {
            projectPanel = $("<div class='project-panel'></div>");
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
            $(".tabs:last").append(formattedProjectTitle);
            $(".panels:last").append(projectPanel);
            $(".project-panel:last").append(formattedProjectDates);
            $(".project-panel:last").append(formattedProjectDescription);
            // Iterate through the images array in each project
            for (var k = 0; k < projects.projects[i].images.length; k++) {
                var formattedProjectImage = HTMLprojectImage.replace("%url%",
                    projects.projects[i].url).replace("%data%", projects.projects[i].images[k]);
                $(".project-panel:last").append(formattedProjectImage);
            }
        }
    }
}

var education = {
    "schools": [{
            "start": "2004",
            "name": "Università degli Studi di Cagliari",
            "location": "Cagliari, IT",
            "degree": "MS",
            "majors": ["Engineering", "Maths", "Computer Science"],
            "dates": "2004 - 2006",
            "url": "http://www.unica.it/"
        }, {
            "start": "2000",
            "name": "Università degli Studi di Cagliari",
            "location": "Cagliari, IT",
            "degree": "BA",
            "majors": ["Philosophy", "History", "Literature"],
            "dates": "2000 - 2004",
            "url": "http://www.unica.it/"
        }

    ],
    "onlineCourses": [{
        "title": "Front End Nanodegree",
        "school": "Udacity",
        "dates": "09/2016 - in progress",
        "url": "https://www.udacity.com/"
    }],
    display: function() {
        $("#education").append(HTMLschoolStart);
        for (var i = 0; i < education.schools.length; i++) {
            var formattedSchoolName = HTMLschoolName.replace("%url%", education.schools[i].url).replace("%data%", education.schools[i].name);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors[0]);
            $(".education-entry:last").append(formattedSchoolName);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolMajor);
        }

        if (education.onlineCourses) {
            $(".education-entry:last").append(HTMLonlineClasses);
            for (var j = 0; j < education.onlineCourses.length; j++) {
                var formattedOnlineSchool = HTMLonlineSchool.replace("%url%", education.onlineCourses[j].url).replace("%data%", education.onlineCourses[j].school);
                var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[j].dates);
                var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[j].title);
                $(".education-entry:last").append(formattedOnlineSchool);
                $(".education-entry:last").append(formattedonlineDates);
                $(".education-entry:last").append(formattedOnlineTitle);
            }
        }
    }
}

// Display each section
bio.display();
work.display();
projects.display();
education.display();

// Add a map to the page
$("#mapDiv").append(googleMap);