playlist = [
  {
    id: "track1",
    title: "believer",
    src: "believer.mp3",
    cover: "i1.sndcdn.com/artworks-s3zOCWcV8XQVtQcv-0emq8A-t500x500.jpg",
  },
  {
    id: "track2",
    title: "love nwantiti",
    src: "lovnwantiti.mp3",
    cover: "i.scdn.co/image/ab67616d0000b27323e58483fd05feea2dd7b1c2",
  },
  {
    id: "track3",
    title: "rap god",
    src: "rapgod.mp3",
    cover: "i.pinimg.com/originals/1e/e4/1a/1ee41ab389489d091b1e1bca5f3f4314.jpg",
  },
  {
    id: "track4",
    title: "ride it",
    src: "rideit.mp3",
    cover: "www.virginradio.fr/wp-content/uploads/virginradio/2022/03/media-8046-200x200.jpg",
  },
  {
    id: "track5",
    title: "roar",
    src: "roar.mp3",
    cover: "slm-assets.secondlife.com/assets/21162364/view_large/wZnAZlHUxzLo.jpg?1532366107",
  },
  {
    id: "track6",
    title: "rolling in the deep",
    src: "rollinginthedeep.mp3",
    cover: "i.scdn.co/image/ab67616d0000b273aaabd35dde0cfc0bcf315d3e",
  },
  {
    id: "track7",
    title: "talking to the moon",
    src: "talkingtothemoon.mp3",
    cover: "i.scdn.co/image/ab67616d0000b273f6b55ca93bd33211227b502b",
  },
  {
    id: "track8",
    title: "unstoppable",
    src: "unstoppable.mp3",
    cover: "i1.sndcdn.com/artworks-000162499586-vifye7-t240x240.jpg",
  },
];

// display songs 
function display() {
  document.querySelector("#playlistControl").innerHTML =
  "<img src= 'https://"+playlist[i].cover+"' alt='track cover' id='cover' height='180px' class='rounded w-100 mt-3'>";
  document.querySelector("#audioControl").innerHTML = "<audio src='audio/" +
  playlist[i].src +
  "' autoplay controls loop class='rounded-1 w-100'></audio>";
  document.querySelector('#track').innerHTML = "<h6>"+playlist[i].id+"</h6><h5>"+playlist[i].title+"</h5>"
}

// display all songs titles 
for (i = 0; i < playlist.length; i++) {
  display();
  document.querySelector("#trackList").innerHTML +=
  "<li class='list-group-item btn' onclick='play(this.id)' id='" +
  playlist[i].id +
  "'>" + playlist[i].title + "</li>";
}

// play songs when click on it
function play(obj) {
  var id = obj;
  for (i = 0; i < playlist.length; i++) {
    if (playlist[i].id == id) {
      display();
    }
  }
}

// search songs and play it
function search() {
  track = document.querySelector("input").value;
  exist = false;
  for (i = 0; i < playlist.length; i++) {
    if (track == playlist[i].title) {
      exist = true;
      display();
    }
  }
  if (exist == false) {
    alert("music unavailable, go to youtube ");
  }
}

function reset() {
  document.querySelector("#search").value = "";
}
