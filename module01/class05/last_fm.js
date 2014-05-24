var LastFM = {};

LastFM.init = function (APIKey) {
  this.APIKey = APIKey;
};

LastFM.getSimilarTracks = function(options) {
  var self = this;

  var promise = new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();

    xhr.addEventListener('load', function() {
      resolve(JSON.parse(xhr.responseText));
    });

    xhr.open('GET', 'http://ws.audioscrobbler.com/2.0/?method=track.getsimilar&artist=' + encodeURI(options.artist) + '&track=' + encodeURI(options.track) + '&api_key=' + self.APIKey + '&format=json', true);
    xhr.send();
  });

  return promise;
};