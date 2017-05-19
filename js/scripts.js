$(function () {
    var url = 'https://restcountries.eu/rest/v1/name/',
        countriesList = $('#countries');
    $('#search').click(searchCountries);
    $('#country-name').focus(function () {
        $('#country-name').val('');
    });
    function searchCountries() {
        var countryName = $('#country-name').val();
        if (!countryName.length) countryName = 'Poland';
        $.ajax({
            url: url + countryName,
            method: 'GET',
            success: showCountriesList
        });
    }
    function showCountriesList(resp) {
        countriesList.empty();
        resp.forEach(function (item) {
            $('<li class="name">').html('<h3>' + item.name + '</h3>').appendTo(countriesList).fadeIn('slow');
            $('<li class="info">').text('Background Information:').appendTo(countriesList).fadeIn('slow');
            $('<li>').html('<span>Capital: </span>' + item.capital).appendTo(countriesList).fadeIn('slow');
            $('<li>').html('<span>Land area: </span>' + item.area).appendTo(countriesList).fadeIn('slow');
            $('<li>').html('<span>Population: </span>' + item.population).appendTo(countriesList).fadeIn('slow');
            $('<li>').html('<span>Native Name: </span>' + item.nativeName).appendTo(countriesList).fadeIn('slow');
            $('<li>').html('<span>Region: </span>' + item.region).appendTo(countriesList).fadeIn('slow');
            $('<li>').html('<span>Subregion: </span>' + item.subregion).appendTo(countriesList).fadeIn('slow');
            $('<li>').html('<span>Top Level Domain: </span>' + item.topLevelDomain[0]).appendTo(countriesList).fadeIn('slow');
            $('<li>').html('<span>Calling Code: </span>' + item.callingCodes[0]).appendTo(countriesList).fadeIn('slow');
            $('<li>').html('<span>Currency: </span>' + item.currencies[0]).appendTo(countriesList).fadeIn('slow');
            $('<li>').html('<span>Language: </span>' + item.languages[0]).appendTo(countriesList).fadeIn('slow');
            $('<li>').html('<span>Alpha 3 Code: </span>' + item.alpha3Code).appendTo(countriesList).fadeIn('slow');
        });
    }
});