export interface ICountryOption {
  readonly value: string;
  readonly label: string;
}

export const fetchCountries = async (): Promise<ICountryOption[]> => {
  const response = await (await fetch("/countries.json")).json();
  const countries: ICountryOption[] = [];
  for (const key in response.data) {
    countries.push({
      value: response.data[key].country,
      label: response.data[key].country,
    });
  }

  return countries;
};
