$(function () {
    const url = "https://restcountries.eu/rest/v1/name/",
        $countriesList = $("#countries"),
        $inputElement = $("#country-name");
    $("#search").click(searchCountries);
    $inputElement.focus(function () {
        $inputElement.val('');
    });
    function searchCountries() {
        let countryName = $inputElement.val();
        if (!countryName.length) countryName = 'Poland';
        $.ajax({
            url: url + countryName,
            method: "GET",
            success: showCountriesList
        });
    }
    function showCountriesList(resp) {
        let searchResult = "";
        $countriesList.empty();
        resp.forEach(function (item) {
            searchResult += '\
                <li class="name"> \
                    <h3>' + item.name + '</h3> \
                </li> \
                <li class="info"> \
                    Background Information: \
                </li> \
                <li> \
                    <span>Capital: </span>' + item.capital + '\
                </li> \
                <li> \
                    <span>Land area: </span>' + item.area + '\
                </li> \
                <li> \
                    <span>Population: </span>' + item.population + '\
                </li> \
                <li> \
                    <span>Native Name: </span>' + item.nativeName + '\
                </li> \
                <li> \
                    <span>Region: </span>' + item.region + '\
                </li> \
                <li> \
                    <span>Subregion: </span>' + item.subregion + '\
                </li> \
                <li> \
                    <span>Top Level Domain: </span>' + item.topLevelDomain[0] + '\
                </li> \
                <li> \
                    <span>Calling Code: </span>' + item.callingCodes[0] + '\
                </li> \
                <li> \
                    <span>Currency: </span>' + item.currencies[0] + '\
                </li> \
                <li> \
                    <span>Language: </span>' + item.languages[0] + '\
                </li> \
                <li> \
                    <span>Alpha 3 Code: </span>' + item.alpha3Code + '\
                </li> \
            ';
        });
        $(searchResult).appendTo($countriesList).fadeIn("slow");
    }
});