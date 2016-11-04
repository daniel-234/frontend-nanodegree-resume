/*

This file contains all of the code running in the background that makes resumeBuilder.js possible. We call these helper functions because they support your code in this course.

Don't worry, you'll learn what's going on in this file throughout the course. You won't need to make any changes to it until you start experimenting with inserting a Google Map in Problem Set 3.

Cameron Pittman
*/
/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/
var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<h3 class="header-role-text role-header">%data%</h3>';

var HTMLcontactGeneric = '<a class="flex-item"><span class="contact-generic-text">%data%</span></a>';
var HTMLemail = '<a class="flex-item" href="mailto:%data%"><span class="email-icon fa fa-envelope-o fa-lg" aria-hidden="true"></span></a>';
var HTMLlinkedin = '<a class="flex-item" href="https://uk.linkedin.com/in/%data%" target="_blank"><span class="linkedin-icon fa fa-linkedin fa-lg" aria-hidden="true"></span></a>';
var HTMLtwitter = '<a class="flex-item" href="https://twitter.com/%data%" target="_blank"><span class="twitter-icon fa fa-twitter fa-lg" aria-hidden="true"></span></a>';
var HTMLgithub = '<a class="flex-item" href="https://github.com/%data%" target="_blank"><span class="github-icon fa fa-github fa-lg" aria-hidden="true"></span></a>';
var HTMLblog = '<a class="flex-item"><span class="blog-text">blog</span><span class="blog-icon">%data%</span></a>';
var HTMLmobile = '<span class="phone-text fa fa-phone fa-lg" aria-hidden="true"> %data%</span>';
var HTMLlocation = '<a class="flex-item"><span class="location-text fa fa-map-marker fa" aria-hidden="true"> %data%</span></a>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<ul id="skills" class="flex-column"></ul>';
var HTMLskills = '<li class="flex-item skills-text"><span class="skills-items-text skills-items">%data%</span></li>';

var HTMLhobbiesStart = '<ul id="hobbies" class="flex-column"></ul>';
var HTMLhobbies = '<li class="flex-item hobbies-text"><span class="hobbies-items-text hobbies-items">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<p class="work-employer-text">%data%';
var HTMLworkTitle = ' - %data%</p>';
var HTMLworkDates = '<div class="work-date-text">%data%</div>';
var HTMLworkLocation = '<div class="work-location-text">%data%</div>';
var HTMLworkDescription = '<p class="work-description-text"><br>%data%</p>';

/* The two variables used to point to apparently the same member are needed to keep each item from the first
   JSON object take the class active and be displayed as the page loads */
var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLfirstProjectTitle = '<a class="project-title-text tab tab-text active" href="#selected-panel">%data%</a>';
var HTMLprojectTitle = '<a class="project-title-text tab tab-text" href="#selected-panel">%data%</a>';
var HTMLfirstProjectDates = '<div class="project-date-text panel active">%data%</div>';
var HTMLprojectDates = '<div class="project-date-text panel">%data%</div>';
var HTMLfirstProjectDescription = '<p class="project-description-text project-description panel active">%data%</p>';
var HTMLprojectDescription = '<p class="project-description-text project-description panel">%data%</p>';
var HTMLfirstProjectImage = '<a href="https://daniel-234.github.io/%url%" target="_blank" class="a-panel"><img class="img-panel" src="%data%"></a>';
var HTMLprojectImage = '<a href="https://daniel-234.github.io/%url%" target="_blank"class="a-panel"><img class="img-panel" src="%data%"></a>';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="%url%" target="_blank" class="school-name-text education-link">%data%</a>';
var HTMLschoolDegree = '<p><br>%data%</p>';
var HTMLschoolDates = '<div class="school-date-text">%data%</div>';
var HTMLschoolLocation = '<div class="school-location-text">%data%</div>';
var HTMLschoolMajor = '<em class="school-major-text"><br>Major: %data%</em>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineSchool = '<a href="%url%" target="_blank" class="online-name-text education-link">%data%</a>';
var HTMLonlineDates = '<div class="online-date-text">%data%</div>';
var HTMLonlineTitle = '<p class="online-title-text online-title"><br>%data%</p>';
var HTMLonlineURL = '<br><a href="#" target="_blank" class="url-anchor">%data%</a>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';


/*
The Internationalize Names challenge found in the lesson Flow Control from JavaScript Basics requires you to create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function() {
    $('button').click(function() {
        var $name = $('#name');
        var iName = inName($name.text()) || function() {};
        $name.html(iName);
    });

    $('.tab').on('click', function(e) {
        e.preventDefault();
        $('.tab, .project-panel').removeClass('active');
        $(this).addClass('active');
        // Take the index of the selected tab
        var index = $('.tab').index(this);
        // Use the tab index to select the panel at the corresponding index
        var children = $(this).parent().siblings(".panels").children()[index];
        // Add class active to the selected panels child
        $(children).addClass("active");
        $(this).focus();
    });
});


/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map; // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

    var locations;

    var mapOptions = {
        disableDefaultUI: true
    };

    /*
    For the map to be displayed, the googleMap var must be
    appended to #mapDiv in resumeBuilder.js.
    */
    map = new google.maps.Map(document.querySelector('#map'), mapOptions);


    /*
    locationFinder() returns an array of every location string from the JSONs
    written for bio, education, and work.
    */
    function locationFinder() {

        // initializes an empty array
        var locations = [];

        // adds the single location property from bio to the locations array
        locations.push(bio.contacts.location);

        // iterates through school locations and appends each location to
        // the locations array. Note that forEach is used for array iteration
        // as described in the Udacity FEND Style Guide:
        // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
        education.schools.forEach(function(school) {
            locations.push(school.location);
        });

        // iterates through work locations and appends each location to
        // the locations array. Note that forEach is used for array iteration
        // as described in the Udacity FEND Style Guide:
        // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
        work.jobs.forEach(function(job) {
            locations.push(job.location);
        });

        return locations;
    }

    /*
    createMapMarker(placeData) reads Google Places search results to create map pins.
    placeData is the object returned from search results containing information
    about a single location.
    */
    function createMapMarker(placeData) {

        // The next lines save location data from the search result object to local variables
        var lat = placeData.geometry.location.lat(); // latitude from the place service
        var lon = placeData.geometry.location.lng(); // longitude from the place service
        var name = placeData.formatted_address; // name of the place from the place service
        var bounds = window.mapBounds; // current boundaries of the map window

        // marker is an object with additional data about the pin for a single location
        var marker = new google.maps.Marker({
            map: map,
            position: placeData.geometry.location,
            title: name
        });

        // infoWindows are the little helper windows that open when you click
        // or hover over a pin on a map. They usually contain more information
        // about a location.
        var infoWindow = new google.maps.InfoWindow({
            content: name
        });

        // hmmmm, I wonder what this is about...
        google.maps.event.addListener(marker, 'click', function() {
            // your code goes here!
        });

        // this is where the pin actually gets added to the map.
        // bounds.extend() takes in a map location object
        bounds.extend(new google.maps.LatLng(lat, lon));
        // fit the map to the new marker
        map.fitBounds(bounds);
        // center the map
        map.setCenter(bounds.getCenter());
    }

    /*
    callback(results, status) makes sure the search returned results for a location.
    If so, it creates a new map marker for that location.
    */
    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            createMapMarker(results[0]);
        }
    }

    /*
    pinPoster(locations) takes in the array of locations created by locationFinder()
    and fires off Google place searches for each location
    */
    function pinPoster(locations) {

        // creates a Google place search service object. PlacesService does the work of
        // actually searching for location data.
        var service = new google.maps.places.PlacesService(map);

        // Iterates through the array of locations, creates a search object for each location
        locations.forEach(function(place) {
            // the search request object
            var request = {
                query: place
            };

            // Actually searches the Google Maps API for location data and runs the callback
            // function with the search results after each search.
            service.textSearch(request, callback);
        });
    }

    // Sets the boundaries of the map based on pin locations
    window.mapBounds = new google.maps.LatLngBounds();

    // locations is an array of location strings returned from locationFinder()
    locations = locationFinder();

    // pinPoster(locations) creates pins on the map for each location in
    // the locations array
    pinPoster(locations);

}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
    //Make sure the map bounds get updated on page resize
    map.fitBounds(mapBounds);
});