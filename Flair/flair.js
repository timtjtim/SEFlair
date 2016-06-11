function createCORSRequest(method, url) {
  var request = new XMLHttpRequest();
  if ('withCredentials' in request) {
    request.open(method, url, true);
  } else if (typeof XDomainRequest != 'undefined') {
    request = new XDomainRequest();
    request.open(method, url);
  } else {
    request = null;
  }
  return request;
}

function makeflair(data,site) {
  document.getElementById('flair-'+site+'-user-badge-count-bronze').innerHTML = data[0];
  document.getElementById('flair-'+site+'-user-badge-count-silver').innerHTML = data[1];
  document.getElementById('flair-'+site+'-user-badge-count-gold').innerHTML = data[2];
  var symbol = '';
  if (data[8] == 'moderator') {
    symbol = '&#9830';
  }
  document.getElementById('flair-'+site+'-user-display-name').innerHTML = data[3] + ' ' + symbol;
  document.getElementById('flair-'+site+'-user-display-image').src = data[4];
  document.getElementById('flair-'+site+'-user-reputation').innerHTML = data[5];
  document.getElementById('flair-'+site+'-user-profile-link').href = data[7] + '/users/' + data[6];
  document.getElementById('flair-'+site+'-site-display-image').src = site+'FlairLogoV1.svg';
  document.getElementById('flair-'+site+'-in-here').className = 'w3-padding-ver-16 w3-theme-l4 flair-'+site+'-div';
}

// Helper method to parse the title tag from the response.
function getTitle(text) {
  return text.match('<title>(.*)?</title>')[1];
}
function makeAPIRequest(site, siteUrl, userId) {
  var key = 'APIKEYHERE';
  var filter = '!LnO)*RBcGb8ff5h3LzJPmw';
  if (key == '') {
    var url = 'http://api.stackexchange.com/2.2/users/' + userId + '?order=desc&sort=reputation&site='+site+'&filter='+filter;
  } else {
    var url = 'http://api.stackexchange.com/2.2/users/' + userId + '?order=desc&sort=reputation&site='+site+'&key='+key+'&filter='+filter;
  }
  var response = createCORSRequest('GET', url);
  response.onload = function() {
    var text = response.responseText;
    parsedJSON = JSON.parse(text);
    try {
      var items0 = parsedJSON.items[0]
      var data = [items0.badge_counts.bronze, items0.badge_counts.silver, items0.badge_counts.gold, items0.display_name, items0.profile_image, items0.reputation, items0.user_id, siteUrl, items0.user_type]
      makeflair(data,site);
    }
    catch(err) {
      console.log(parsedJSON)
    }
  };
  response.send();
}
