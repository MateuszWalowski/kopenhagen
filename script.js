window.addEventListener('DOMContentLoaded', getData);

const events = "http://mawadesign.eu/wordpress/wp-json/wp/v2/event?_embed";

function getData() {
  fetch(events)
    .then(res => res.json())
    .then(handleData)
}

function handleData(posts) {
  console.log(posts);
  posts.forEach(showevent);
  // posts.slice(0, 1).forEach(showevent); - show posts from 0 to 1

}

function showevent(event) {
  console.log(event);
  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);
  copy.querySelector(".startingdate").textContent = event.startingdate; 
  copy.querySelector(".endingdate").textContent = event.endingdate; 
  copy.querySelector(".shortdescription").textContent = event.shortdescription; 
  copy.querySelector(".category").textContent = event._embedded["wp:term"][0][0].name;
  copy.querySelector(".eventname").textContent = event.eventname; 
  copy.querySelector(".artists").textContent = event.artists;
  copy.querySelector("img").src = event._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url
  copy.querySelector("img").alt = event.eventname; 

const a = copy.querySelector('a');
a.href += event.id;

  document.querySelector("main").appendChild(copy);
}

