/* google map for display won't work because no purchase */
   
function initMap() {

    var omaha = {lat: 41.2565, lng: -95.9345};
   
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 15, center: omaha});
    
    var marker = new google.maps.Marker({position: omaha, map: map});
  
  }