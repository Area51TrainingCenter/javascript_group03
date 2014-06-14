var LastFM = {};

LastFM.init = function (APIKey) {
  this.APIKey = APIKey;
};

LastFM.topTracks = function() {
  var self = this;

  var promise = new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();

    xhr.addEventListener('load', function() {
      resolve(JSON.parse(xhr.responseText));
    });

    xhr.open('GET', 'http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=' + self.APIKey + '&format=json', true);
    xhr.send();
  });

  return promise;
};

LastFM.topArtists = function() {
  var self = this;

  var promise = new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();

    xhr.addEventListener('load', function() {
      resolve(JSON.parse(xhr.responseText));
    });

    xhr.open('GET', 'http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=' + self.APIKey + '&format=json', true);
    xhr.send();
  });

  return promise;
};

// Si deseamos que una biblioteca pueda ser usada por RequireJS, debemos verificar que exista la función `define` y la propiedad `amd` en la misma

if (typeof define === 'function' && 'amd' in define) {
  define('last_fm', function() {
    return LastFM;
  });
}