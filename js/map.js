

var myCenter = new google.maps.LatLng(40.18350047,44.51601416);
var marker;

function initialize()
{


var mapProp = {
  center:myCenter,
  zoom:19,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };

var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

var marker = new google.maps.Marker({
  position:myCenter,
  animation:google.maps.Animation.BOUNCE
  });

marker.setMap(map);

}

google.maps.event.addDomListener(window, 'load', initialize);
