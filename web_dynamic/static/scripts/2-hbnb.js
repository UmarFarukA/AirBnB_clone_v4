$(function () {
  $.get('http://0.0.0.0:5001/api/v1/status/', function(data, sts) {
    if (sts == 'OK') {
      $('div#api_status').addClass('available');
    } else {
      $('div#api_status').removeClass('available');
    }
  });

   let amenities = {};
   $('input[type="checkbox"]').change(function () {
      if ($(this).is(':checked')) {
         amenities[$(this).attr('data-id') = $(this).attr('data-name');
      } else {
         delete amenities[$(this).attr('data-id')];
      }
    $('.amenities H4').text(Object.values(amenities).join(', '));
   });
});
