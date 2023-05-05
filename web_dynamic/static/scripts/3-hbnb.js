$(function () {
  const url = 'http://' + window.location.hostname;
  $.ajax({
	  url: url + ':5001/api/v1/places_search/',
	  data: {},
	  type: 'POST',
	  contentType: 'application/json',
	  dataType: 'json',
	  success: function(data) {
	    $('SECTION.places').append(data.map(place => {
            return `<ARTICLE>
                  <DIV class="title">
                    <H2>${place.name}</H2>
                    <DIV class="price_by_night">
                      ${place.price_by_night}
                    </DIV>
                  </DIV>
                  <DIV class="information">
                    <DIV class="max_guest">
                      <I class="fa fa-users fa-3x" aria-hidden="true"></I>
                      </BR>
                      ${place.max_guest} Guests
                    </DIV>
                    <DIV class="number_rooms">
                      <I class="fa fa-bed fa-3x" aria-hidden="true"></I>
                      </BR>
                      ${place.number_rooms} Bedrooms
                    </DIV>
                    <DIV class="number_bathrooms">
                      <I class="fa fa-bath fa-3x" aria-hidden="true"></I>
                      </BR>
                      ${place.number_bathrooms} Bathrooms
                    </DIV>
                  </DIV>
                  <DIV class="description">
                    ${place.description}
                  </DIV>
                </ARTICLE>`;
      	    }));
	  }
  });
  $.get(url + ':5001/api/v1/status/', function(data, sts) {
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
