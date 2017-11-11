class CountriesCrawler {
    constructor(url, element) {
        this.url = url;
        this.$countriesList = element;
        this.$inputElement = $("#country-name");
        this.$inputElement.focus(() => {
            this.$inputElement.val('');
        });
        $("#search").click(this.searchCountries);
    }
    searchCountries() {
        let countryName = countriesCrawler.$inputElement.val();
        if (!countryName.length) countryName = 'Poland';
        $.ajax({
            url: `${countriesCrawler.url}${countryName}`,
            method: "GET",
            success: countriesCrawler.showCountriesList
        });
    }
    showCountriesList(resp) {
        let searchResult = "";
        countriesCrawler.$countriesList.empty();
        resp.forEach(function (item) {
            searchResult += `\
                <li class="name">\
                    <h3>${item.name}</h3>\
                </li>\
                <li class="info">\
                    Background Information:\
                </li>\
                <li>\
                    <span>Capital: </span>${item.capital}\
                </li>\
                <li>\
                    <span>Land area: </span>${item.area}\
                </li>\
                <li>\
                    <span>Population: </span>${item.population}\
                </li>\
                <li>\
                    <span>Native Name: </span>${item.nativeName}\
                </li>\
                <li>\
                    <span>Region: </span>${item.region}\
                </li>\
                <li>\
                    <span>Subregion: </span>${item.subregion}\
                </li>\
                <li>\
                    <span>Top Level Domain: </span>${item.topLevelDomain[0]}\
                </li>\
                <li>\
                    <span>Calling Code: </span>${item.callingCodes[0]}\
                </li>\
                <li>\
                    <span>Currency: </span>${item.currencies[0]}\
                </li>\
                <li>\
                    <span>Language: </span>${item.languages[0]}\
                </li>\
                <li>\
                    <span>Alpha 3 Code: </span>${item.alpha3Code}\
                </li>\
            `;
        });
        $(searchResult).appendTo(countriesCrawler.$countriesList).fadeIn("slow");
    }
}
const countriesCrawler = new CountriesCrawler("https://restcountries.eu/rest/v1/name/", $("#countries"));