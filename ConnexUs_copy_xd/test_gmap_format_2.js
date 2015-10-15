@@ -5,6 +5,8 @@
    <article class="grid_16">
        <div class="item rounded dark">
            <div id="map_canvas" class="map"></div>
            <br />
            <div id="slider"></div>
        </div>
    </article>
</div>
@@ -17,6 +19,11 @@
<script type="text/javascript" src="js/demo.js"></script>
<script type="text/javascript" src="js/markerclustererplus-2.0.6/markerclusterer.min.js"></script>
<script type="text/javascript" src="ui/jquery.ui.map.js"></script>

<!-- <script type="text/javascript" src="js/jquery.js"></script> -->
<script type="text/javascript" src="js/jquery-ui.custom.js"></script>
<script type="text/javascript" src="js/jQDateRangeSlider-min.js"></script>

<script type="text/javascript">
    $(function() {
        demo.add(function() {
@@ -28,15 +35,94 @@
                var latSpan = northEast.lat() - southWest.lat();

                {% for info in infos%}
                    $(this).gmap('addMarker', { 'position': new google.maps.LatLng(southWest.lat() + latSpan * Math.random(), southWest.lng() + lngSpan * Math.random()) } ).click(function() {
                        $('#map_canvas').gmap('openInfoWindow', { content : '<IMG height="100" width="100" src="img?img_id={{ info[0] }}">' }, this);
                    });
                        $(this).gmap('addMarker', { 'position': new google.maps.LatLng(southWest.lat() + latSpan * Math.random(), southWest.lng() + lngSpan * Math.random()) } ).click(function() {
                            $('#map_canvas').gmap('openInfoWindow', { content : '<IMG height="100" width="100" src="img?img_id={{ info[0] }}">' }, this);
                            console.log("{{ info[2] }}");
                        });
                {% endfor%}

                $(this).gmap('set', 'MarkerClusterer', new MarkerClusterer(map, $(this).gmap('get', 'markers')));

            });
        }).load();
    });

//     $(function() {
//     var today = new Date();
//     var todayLastYear = new Date();
//     todayLastYear.setFullYear(todayLastYear.getFullYear() - 1);
//     $("#slider").dateRangeSlider({
//         bounds: {min: todayLastYear, max: today},
//         defaultValues: {min: todayLastYear, max: today}
//     });

//     var from = todayLastYear;
//     var to = today;
//     $("#slider").on("valuesChanging", function(e, data){
//         // $('#map_canvas').gmap('clear', 'markers');
//         // $('#map_canvas').gmap('get', 'MarkerClusterer').clearMarkers();

//         from = data.values.min;
//         to = data.values.max;

//         // Split timestamp into [ Y, M, D, h, m, s ]
//         var t = "2015-10-13 05:23:48.288130".split(/[- :]/);
//         // Apply each element to the Date function
//         var d = new Date(t[0], t[1]-1, t[2], t[3], t[4], t[5]);
//         console.log(from);


//         // {% for info in infos%}
//         //     $('#map_canvas').gmap('addMarker', { 'position': new google.maps.LatLng(southWest.lat() + latSpan * Math.random(), southWest.lng() + lngSpan * Math.random()) } ).click(function() {
//         //         $('#map_canvas').gmap('openInfoWindow', { content : '<IMG height="100" width="100" src="img?img_id={{ info[0] }}">' }, this);
//         //         console.log("{{ info[2] }}");
//         //     });
//         // {% endfor%}

//     });

// // $( "#slider-range" ).slider({
// //   range: true,
// //   min: 0,
// //   max: {{length}},
// //   values: [ 0, {{length}} ],
// //   slide: function( event, ui ) {
// //       $( "#amount" ).val(  ui.values[ 0 ] + " - " + ui.values[ 1 ] );
// //   },
// //   stop: function(event,ui){
// //     var min=ui.values[0];
// //     var max=ui.values[1];
// //     var streamdata={"stream_name":$('#streamname').text(),"min":min,"max":max};

// //     $.ajax({
// //         type: "POST",
// //         url: "/geoapi",
// //         data: streamdata,
// //         dataType: "json",
// //         success: function(results){
// //             var tmp=$('#map_canvas');

// //             tmp.gmap('clear','markers');
// //             tmp.gmap('get','MarkerClusterer').clearMarkers();
// //             tmp.gmap('closeInfoWindow');
// //             var map=tmp.gmap('get','map');
// //             var bounds = map.getBounds();
// //             var southWest = bounds.getSouthWest();
// //             var northEast = bounds.getNorthEast();
// //             var lngSpan = northEast.lng() - southWest.lng();
// //             var latSpan = northEast.lat() - southWest.lat();

// //             $.each(results,function(index,value){
// //                 tmp.gmap('addMarker', { 'position': new google.maps.LatLng(southWest.lat() + latSpan * Math.random(), southWest.lng() + lngSpan * Math.random()) }).click(function() {
// //                     tmp.gmap('openInfoWindow', { content : '<a class="example-image-link" href="img?img_id={{info[0]}}" data-lightbox="example-set" data-title="Click the right half of the image to move forward."><img class="example-image" src="img?img_id={{info[0]}}" alt="" /></a>' }, this);
// //                 });
// //             });
// //             tmp.gmap('set', 'MarkerClusterer', new MarkerClusterer(map, tmp.gmap('get', 'markers')));
// //         }
// //     });
// //   }
// });

</script>


