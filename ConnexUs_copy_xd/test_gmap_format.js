$('#map_canvas').gmap('addMarker', { 'position': new google.maps.LatLng(lat, lng) } )
                        .click(function() {

                            $('#map_canvas').gmap('openInfoWindow', { content : '<IMG height="100" width="100" src="img?img_id={{ info[0] }}">' }, this);
                        });

$('#map_canvas').gmap('set', 'MarkerClusterer', new MarkerClusterer(map, $(this).gmap('get', 'markers')));


$('#map_canvas').gmap('clear', 'markers');
$('#map_canvas').gmap('get', 'MarkerClusterer').clearMarkers();
$('#map_canvas').gmap('get', 'MarkerClusterer').setMap(null);

var marker = new google.maps.Marker({
        position: new google.maps.LatLng( -12.043333,-77.028333),
        map: map
    });
