const countrySelects = document.querySelectorAll('.select--country');
const provinceSelects = document.querySelectorAll('.select--province');
let countriesObject;

const fetchCountries = async () => {
  const response = await fetch('/assets/JSON/countries.json');
  const countriesObjectJSON = await response.json();
  countriesObject = countriesObjectJSON;
  initializeSelects();
};

const initializeSelects = () => {
  countrySelects.forEach((countrySelect) => {
    const provinceSelectId = countrySelect.getAttribute('select-target');
    const provinceSelect = document.querySelector(`[select-id="${provinceSelectId}"]`);
    insertCountriesOptions(countrySelect, countriesObject);
    insertProvincesOptions(countrySelect, provinceSelect, countriesObject);
  });
};

const insertCountriesOptions = (countrySelect, countriesObject) => {
  const countryOptions = countriesObject.map((countryObject) => {
    const selected = countryObject.countryName === 'United States' ? 'selected' : '';
    return `<option value="${countryObject.countryName}" ${selected}>${countryObject.countryName}</option>`;
  });
  countrySelect.innerHTML = countryOptions.join('');
};

const insertProvincesOptions = (countrySelect, provinceSelect, countriesObject) => {
  const countryObject = countriesObject.find((countryObject) => countryObject.countryName === countrySelect.value);
  if (countryObject) {
    const provinceOptions = countryObject.regions.map((region) => {
      const selected = region.name === provinceSelect.getAttribute('value') ? 'selected' : '';
      return `<option value="${region.name}" ${selected}>${region.name}</option>`;
    });
    provinceSelect.innerHTML = provinceOptions.join('');
  }
};

countrySelects.forEach((countrySelect) => {
  countrySelect.addEventListener('change', () => {
    const provinceSelectId = countrySelect.getAttribute('select-target');
    const provinceSelect = document.querySelector(`[select-id="${provinceSelectId}"]`);
    insertProvincesOptions(countrySelect, provinceSelect, countriesObject);
  });
});

fetchCountries();

