let sites = ["https://forms.gle/Z38zYcD5wKP9K7Av7", "https://forms.gle/VUzcQNJnpRNoD5xdA"];

function randomSite() {
  var i = parseInt(Math.random() * sites.length);
  location.href = sites[i];
}
