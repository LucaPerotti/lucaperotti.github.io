let sites = [
    'http://www.google.com',
    'http://www.youtube.com'
];

function randomSite() {
    var i = parseInt(Math.random() * sites.length);
    location.href = sites[i];
}