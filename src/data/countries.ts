// src/data/countries.ts
import { Country } from '@/types/common';

// Phone number formatting configurations for supported countries
export const phoneCountries: Country[] = [
  {
    code: "AD",
    name: "Andorra",
    dialCode: "+376",
    format: "### ###",
    placeholder: "312 345",
    digitCount: 6
  },
  {
    code: "AR",
    name: "Argentina",
    dialCode: "+54",
    format: "## #### ####",
    placeholder: "11 1234 5678",
    digitCount: 10
  },
  {
    code: "AU",
    name: "Australia",
    dialCode: "+61",
    format: "### ### ###",
    placeholder: "412 345 678",
    digitCount: 9
  },
  {
    code: "BO",
    name: "Bolivia",
    dialCode: "+591",
    format: "#### ####",
    placeholder: "7123 4567",
    digitCount: 8
  },
  {
    code: "BR",
    name: "Brazil",
    dialCode: "+55",
    format: "## #####-####",
    placeholder: "11 91234-5678",
    digitCount: 11
  },
  {
    code: "CA",
    name: "Canada",
    dialCode: "+1",
    format: "(###) ###-####",
    placeholder: "(416) 123-4567",
    digitCount: 10
  },
  {
    code: "CL",
    name: "Chile",
    dialCode: "+56",
    format: "# #### ####",
    placeholder: "9 1234 5678",
    digitCount: 9
  },
  {
    code: "CO",
    name: "Colombia",
    dialCode: "+57",
    format: "### ### ####",
    placeholder: "300 123 4567",
    digitCount: 10
  },
  {
    code: "CR",
    name: "Costa Rica",
    dialCode: "+506",
    format: "#### ####",
    placeholder: "8312 3456",
    digitCount: 8
  },
  {
    code: "CU",
    name: "Cuba",
    dialCode: "+53",
    format: "#### ####",
    placeholder: "5312 3456",
    digitCount: 8
  },
  {
    code: "DO",
    name: "Dominican Republic",
    dialCode: "+1",
    format: "(###) ###-####",
    placeholder: "(809) 123-4567",
    digitCount: 10
  },
  {
    code: "EC",
    name: "Ecuador",
    dialCode: "+593",
    format: "## ### ####",
    placeholder: "99 123 4567",
    digitCount: 9
  },
  {
    code: "SV",
    name: "El Salvador",
    dialCode: "+503",
    format: "#### ####",
    placeholder: "7123 4567",
    digitCount: 8
  },
  {
    code: "ES",
    name: "Spain",
    dialCode: "+34",
    format: "### ### ###",
    placeholder: "612 345 678",
    digitCount: 9
  },
  {
    code: "FR",
    name: "France",
    dialCode: "+33",
    format: "## ## ## ## ##",
    placeholder: "06 12 34 56 78",
    digitCount: 10
  },
  {
    code: "GT",
    name: "Guatemala",
    dialCode: "+502",
    format: "#### ####",
    placeholder: "5555 1234",
    digitCount: 8
  },
  {
    code: "HN",
    name: "Honduras",
    dialCode: "+504",
    format: "#### ####",
    placeholder: "9123 4567",
    digitCount: 8
  },
  {
    code: "IT",
    name: "Italy",
    dialCode: "+39",
    format: "### ### ####",
    placeholder: "320 123 4567",
    digitCount: 10
  },
  {
    code: "JM",
    name: "Jamaica",
    dialCode: "+1",
    format: "(###) ###-####",
    placeholder: "(876) 123-4567",
    digitCount: 10
  },
  {
    code: "MX",
    name: "Mexico",
    dialCode: "+52",
    format: "## #### ####",
    placeholder: "55 1234 5678",
    digitCount: 10
  },
  {
    code: "NI",
    name: "Nicaragua",
    dialCode: "+505",
    format: "#### ####",
    placeholder: "8123 4567",
    digitCount: 8
  },
  {
    code: "PA",
    name: "Panama",
    dialCode: "+507",
    format: "#### ####",
    placeholder: "6123 4567",
    digitCount: 8
  },
  {
    code: "PY",
    name: "Paraguay",
    dialCode: "+595",
    format: "### ### ###",
    placeholder: "981 123 456",
    digitCount: 9
  },
  {
    code: "PE",
    name: "Peru",
    dialCode: "+51",
    format: "### ### ###",
    placeholder: "987 654 321",
    digitCount: 9
  },
  {
    code: "PR",
    name: "Puerto Rico",
    dialCode: "+1",
    format: "(###) ###-####",
    placeholder: "(787) 123-4567",
    digitCount: 10
  },
  {
    code: "PT",
    name: "Portugal",
    dialCode: "+351",
    format: "### ### ###",
    placeholder: "912 345 678",
    digitCount: 9
  },
  {
    code: "GB",
    name: "United Kingdom",
    dialCode: "+44",
    format: "##### ######",
    placeholder: "07700 900123",
    digitCount: 11
  },
  {
    code: "US",
    name: "United States",
    dialCode: "+1",
    format: "(###) ###-####",
    placeholder: "(555) 123-4567",
    digitCount: 10
  },
  {
    code: "UY",
    name: "Uruguay",
    dialCode: "+598",
    format: "### ## ## ##",
    placeholder: "099 12 34 56",
    digitCount: 8
  },
  {
    code: "VE",
    name: "Venezuela",
    dialCode: "+58",
    format: "###-#######",
    placeholder: "414-1234567",
    digitCount: 10
  }
];

// Get country by code
export const getCountryByCode = (code: string): Country | undefined => {
  return phoneCountries.find(country => country.code === code);
};

// Get countries sorted alphabetically
export const getCountriesAlphabetically = (): Country[] => {
  return [...phoneCountries].sort((a, b) => a.name.localeCompare(b.name));
};

// Get countries by region (for future use)
export const getCountriesByRegion = () => {
  return {
    northAmerica: phoneCountries.filter(c => ['US', 'CA', 'MX'].includes(c.code)),
    centralAmerica: phoneCountries.filter(c => ['GT', 'BZ', 'SV', 'HN', 'NI', 'CR', 'PA'].includes(c.code)),
    caribbean: phoneCountries.filter(c => ['CU', 'JM', 'DO', 'PR'].includes(c.code)),
    southAmerica: phoneCountries.filter(c => ['CO', 'VE', 'GY', 'SR', 'BR', 'EC', 'PE', 'BO', 'PY', 'UY', 'AR', 'CL'].includes(c.code)),
    europe: phoneCountries.filter(c => ['ES', 'FR', 'IT', 'PT', 'GB', 'AD'].includes(c.code)),
    oceania: phoneCountries.filter(c => ['AU'].includes(c.code))
  };
};

// Popular countries for DJ services (adjust based on your market)
export const popularCountries: Country[] = [
  phoneCountries.find(c => c.code === 'US')!,
  phoneCountries.find(c => c.code === 'MX')!,
  phoneCountries.find(c => c.code === 'GT')!,
  phoneCountries.find(c => c.code === 'CA')!,
  phoneCountries.find(c => c.code === 'ES')!,
].filter(Boolean);

// Default country (can be changed based on user location)
export const defaultCountry: Country = phoneCountries.find(c => c.code === 'US')!;

// Export individual countries for easy access
export const countries = {
  US: phoneCountries.find(c => c.code === 'US')!,
  MX: phoneCountries.find(c => c.code === 'MX')!,
  GT: phoneCountries.find(c => c.code === 'GT')!,
  CA: phoneCountries.find(c => c.code === 'CA')!,
  ES: phoneCountries.find(c => c.code === 'ES')!,
  // Add more as needed
};

export default phoneCountries;