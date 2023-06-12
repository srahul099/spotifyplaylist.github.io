//
var b = document.getElementsByClassName("button");
var button = b[0];
var links = [
  "https://open.spotify.com/playlist/4GLpVe5oHOU7z3wQN4vSH6?si=7ad2e36337d746d6",
  "https://open.spotify.com/playlist/4kwmIPUJUDX3i84HuqjQKS?si=6b32f6bfda23463f",
  "https://open.spotify.com/playlist/3Cg6DTyVp91vXt7tuBsP9X?si=e8fdc84809cf49e8",
  "https://open.spotify.com/playlist/6xJfIV2oZz6XnuIAcPKKBI?si=e6c74608ce9043d3",
];

button.addEventListener("click", function () {
  var randomLink = selectRandomLink(links);
  window.open(randomLink, "_blank");
});

function selectRandomLink(links) {
  var randomIndex = Math.floor(Math.random() * links.length);
  return links[randomIndex];
}
