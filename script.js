function featuredevent() {

  // Fetch all events
  const events = "http://mawadesign.eu/wordpress/wp-json/wp/v2/event?_embed";
  fetch(events)
    .then(res => res.json())
    .then(handleData)

  function handleData(posts) {
    console.log(posts);
    // Display only the last added event
    posts.slice(0, 1).forEach(showevent);

  }

  function showevent(event) {
    console.log(event);
    const template = document.querySelector(".featured").content;
    const copy = template.cloneNode(true);
    copy.querySelector(".startingdate").textContent = event.startingdate;
    copy.querySelector(".endingdate").textContent = event.endingdate;
    copy.querySelector(".category").textContent = event._embedded["wp:term"][0][0].name;
    copy.querySelector(".eventname").textContent = event.eventname;
    copy.querySelector(".artists").textContent = event.artists;
    copy.querySelector(".location").textContent = event.location;

    document.querySelector(".homepageflex").appendChild(copy);
    document.querySelector(".eventgrid").style.backgroundImage = "url" + "('" + event._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url + "')"

  }

}

// Mockup of newsletter sign up form
function signup() {
  document.querySelector(".thankyou").innerHTML = 'Thank you for signing up'
}



function allevents() {

  const events = "http://mawadesign.eu/wordpress/wp-json/wp/v2/event?_embed";
  fetch(events)
    .then(res => res.json())
    .then(handleData)

  function handleData(posts) {
    console.log(posts);
    posts.forEach(showevent);
  }

  function showevent(event) {
    console.log(event);
    const upcomingeventstemplate = document.querySelector(".upcomingeventstemplate").content;
    const copyUpcoming = upcomingeventstemplate.cloneNode(true);
    copyUpcoming.querySelector(".startingdate").textContent = event.startingdate;
    copyUpcoming.querySelector(".endingdate").textContent = event.endingdate;
    copyUpcoming.querySelector(".eventcategory").textContent = event._embedded["wp:term"][0][0].name;
    copyUpcoming.querySelector(".eventname").textContent = event.eventname;
    copyUpcoming.querySelector(".artist").textContent = event.artists;
    copyUpcoming.querySelector(".location").textContent = event.location;
    document.querySelector(".Upcoming").appendChild(copyUpcoming);

    const currenteventstemplate = document.querySelector(".currenteventstemplate").content;
    const copyCurrent = currenteventstemplate.cloneNode(true);
    copyCurrent.querySelector(".startingdate").textContent = event.startingdate;
    copyCurrent.querySelector(".endingdate").textContent = event.endingdate;
    copyCurrent.querySelector(".eventcategory").textContent = event._embedded["wp:term"][0][0].name;
    copyCurrent.querySelector(".eventname").textContent = event.eventname;
    copyCurrent.querySelector(".artist").textContent = event.artists;
    copyCurrent.querySelector(".location").textContent = event.location;
    document.querySelector(".Current").appendChild(copyCurrent);


    const archiveeventstemplate = document.querySelector(".archiveeventstemplate").content;
    const copyArchive = archiveeventstemplate.cloneNode(true);
    copyArchive.querySelector(".startingdate").textContent = event.startingdate;
    copyArchive.querySelector(".endingdate").textContent = event.endingdate;
    copyArchive.querySelector(".eventcategory").textContent = event._embedded["wp:term"][0][0].name;
    copyArchive.querySelector(".eventname").textContent = event.eventname;
    copyArchive.querySelector(".artist").textContent = event.artists;
    copyArchive.querySelector(".location").textContent = event.location;
    document.querySelector(".Archive").appendChild(copyArchive);
  }

}

function Showupcoming() {

  document.querySelector(".Current").animate([{
      opacity: "1"
    },
    {
      opacity: "0"
    }
  ], 348);
  setTimeout(function () {
    document.querySelector(".Current").style.display = 'none';
  }, 349);

  document.querySelector(".Archive").animate([{
      opacity: "1"
    },
    {
      opacity: "0"
    }
  ], 348);
  setTimeout(function () {
    document.querySelector(".Archive").style.display = 'none';
  }, 349);

  document.querySelector(".Upcoming").animate([{
      opacity: "0"
    },
    {
      opacity: "1"
    }
  ], 1000);
  setTimeout(function () {
    document.querySelector(".Upcoming").style.display = 'flex';
  }, 350);

}



function Showcurrent() {
  document.querySelector(".Upcoming").animate([{
    opacity: "1"
  },
  {
    opacity: "0"
  }
], 348);
setTimeout(function () {
  document.querySelector(".Upcoming").style.display = 'none';
}, 349);

document.querySelector(".Archive").animate([{
    opacity: "1"
  },
  {
    opacity: "0"
  }
], 348);
setTimeout(function () {
  document.querySelector(".Archive").style.display = 'none';
}, 349);

document.querySelector(".Current").animate([{
    opacity: "0"
  },
  {
    opacity: "1"
  }
], 1000);
setTimeout(function () {
  document.querySelector(".Current").style.display = 'flex';
}, 350);
}




function Showarchive() {
  document.querySelector(".Upcoming").animate([{
    opacity: "1"
  },
  {
    opacity: "0"
  }
], 348);
setTimeout(function () {
  document.querySelector(".Upcoming").style.display = 'none';
}, 349);

document.querySelector(".Current").animate([{
    opacity: "1"
  },
  {
    opacity: "0"
  }
], 348);
setTimeout(function () {
  document.querySelector(".Current").style.display = 'none';
}, 349);

document.querySelector(".Archive").animate([{
    opacity: "0"
  },
  {
    opacity: "1"
  }
], 1000);
setTimeout(function () {
  document.querySelector(".Archive").style.display = 'flex';
}, 350);
}

function artist(){

  const artist = "http://mawadesign.eu/wordpress/wp-json/wp/v2/artist?_embed";
  fetch(artist)
    .then(res => res.json())
    .then(handleData)

  function handleData(posts) {
    console.log(posts);
    // Display only the last added artist
    posts.slice(0, 1).forEach(showartist);

  }

  function showartist(artist) {
    console.log(artist);
    const template = document.querySelector(".artist").content;
    const copy = template.cloneNode(true);
    copy.querySelector(".artistname").textContent = artist.startingdate;
    copy.querySelector(".artistorigin").textContent = artist.origin;
    copy.querySelector(".bio").innerHTML = artist.content.rendered;
    copy.querySelector(".events").textContent = artist.events;
    copy.querySelector(".artistimage").src = artist._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;
    document.querySelector("main").appendChild(copy);

  }

}

var menucounter = 0


function burgermenu() {
  menucounter++;

  if (menucounter == 1) {
    console.log("burgermenu on");
    document.querySelector(".burgermenuopen").style.display = "flex"
  }


  if (menucounter == 2) {
    menucounter = 0;
    console.log("burgermenu off");
    document.querySelector(".burgermenuopen").style.display = "none"
  }

}


function oneevent() {


  
  // Fetch all events
  const events = "http://mawadesign.eu/wordpress/wp-json/wp/v2/event?_embed";
  fetch(events)
    .then(res => res.json())
    .then(handleData)

  function handleData(posts) {
    console.log(posts);
    // Display only the last added event
    posts.slice(0, 1).forEach(showevent);

  }

  function showevent(event) {
    console.log(event);
    const template = document.querySelector(".oneeventpage").content;
    const copy = template.cloneNode(true);
    copy.querySelector(".eventname").textContent = event.eventname;
    copy.querySelector(".category").textContent = event._embedded["wp:term"][0][0].name;
    copy.querySelector(".artists").textContent = event.artists;
    copy.querySelector(".startingdate").textContent = event.startingdate;
    copy.querySelector(".endingdate").textContent = event.endingdate;
    copy.querySelector(".location").textContent = event.location;
    copy.querySelector(".location").textContent = event.location;
    copy.querySelector(".longdescription").innerHTML = event.content.rendered;





 
    copy.querySelector(".eventimage").src = event._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;
    copy.querySelector(".eventimage").alt = event.eventname;
    document.querySelector("main").appendChild(copy);

  }

}

