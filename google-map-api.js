/**
 * Created by Ashish Goyal on 7/6/2017.
 */
$(function () {
    var btn = $("#btn");
    var place = $("#place");

    btn.click(function () {
        var address = place.val();
        var geocoder = new google.maps.Geocoder();
        var latitute;
        var langitute;
        geocoder.geocode({'address': address}, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {

                latitute = results[0].geometry.location.lat();
                langitute = results[0].geometry.location.lng();
                alert("location : " + results[0].geometry.location.lat() + " " + results[0].geometry.location.lng());
            } else {
                alert("Something got wrong " + status);
            }
            $.ajax({
                url: "https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyB87GfWlmdlgIteQi7SAN0qgMH1EgINn9Q&location="+latitute+","+langitute+"&type=restaurant&radius=5000",
                success: function (result) {
                    console.log(result);
                }
            });
            //console.log("Ashish");

        });
        //console.log("https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyB87GfWlmdlgIteQi7SAN0qgMH1EgINn9Q&location="+latitute+","+langitute+"&type=restaurant&radius=5000")
     /*   $.ajax({
            url: "https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyB87GfWlmdlgIteQi7SAN0qgMH1EgINn9Q&location="+latitute+","+langitute+"&type=restaurant&radius=5000",
            success: function (result) {
                console.log(JSON.stringify(result));
            }
        });*/
        /*$.ajax({
            URL: "https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyB87GfWlmdlgIteQi7SAN0qgMH1EgINn9Q&location="+latitute+","+langitute+"&type=restaurant&radius=5000",
            success: function (result) {
                /!*console.log(result);*!/
            }

            /!*var geocoder = new google.maps.Geocoder();
             geocoder.geocode( { 'address': address}, function(results, status) {
             if (status === google.maps.GeocoderStatus.OK)
             {
             // do something with the geocoded result
             //
             // results[0].geometry.location.latitude
             // results[0].geometry.location.longitude
             }
             });*!/
        });*/
    })
});