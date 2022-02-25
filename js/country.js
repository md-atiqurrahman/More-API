const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data =>displaycoutry(data));
}
loadCountries();

const displaycoutry = countries =>{
    const sectionElement = document.getElementById('countries');
    countries.forEach(country =>{
        // console.log(country);
         const div = document.createElement('div');
         div.classList.add('country');
         div.innerHTML = `
         <img src="${country.flags.png}">
         <h3>Country name: ${country.name.common}</h3>
         <p>Population: ${country.population}</p>
         <button onclick="loadCountryDetails('${country.name.common}')">Details</button>
         `;
         sectionElement.appendChild(div);
    })
};

const loadCountryDetails = countryName =>{
   const url = `https://restcountries.com/v3.1/name/${countryName}`;
   fetch(url)
   .then(res => res.json())
   .then(data =>displayCountryDetails(data));
};

const displayCountryDetails = details =>{
    console.log(details)
   const divElement = document.getElementById('details');
   divElement.textContent = '';
   const div = document.createElement('div');
   div.innerHTML = `
   <img src= "${details[0].flags.png}">
   <h3>Country name: ${details[0].name.common}</h3>
   <p>Capital: ${details[0].capital[0]}</p>
   <p>Area: ${details[0].area}</p>
   <p>Region: ${details[0].region}</p>
    <p>Population: ${details[0].population}</p>
   `;
   divElement.appendChild(div);

}