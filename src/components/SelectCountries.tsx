import { useEffect, useState } from "react";
import AsyncSelect from "react-select/async";

import {
  fetchCountries,
  ICountryOption,
} from "../repositories/CountriesRepository.tsx";

type SelectCountriesProps = {
  id: string;
  onChange: (val: any) => void;
  isSearchable?: boolean;
  isClearable?: boolean;
};

function SelectCountries({
  id,
  onChange,
  isClearable = true,
  isSearchable = true,
}: SelectCountriesProps) {
  const [countries, setCountries] = useState<ICountryOption[]>([]);
  useEffect(() => {
    fetchCountries().then((c: ICountryOption[]) => setCountries(c));
  }, []);

  const filterCountries = (inputValue: string) => {
    return countries.filter((i) =>
      i.label.toLowerCase().includes(inputValue.toLowerCase()),
    );
  };

  const loadOptions = (
    inputValue: string,
    callback: (options: ICountryOption[]) => void,
  ) => {
    callback(filterCountries(inputValue));
  };

  if (countries.length === 0) {
    return <div>Loading countries...</div>;
  }

  return (
    <AsyncSelect
      id={id}
      cacheOptions
      loadOptions={loadOptions}
      defaultOptions
      onChange={onChange}
      isSearchable={isSearchable}
      isClearable={isClearable}
      classNames={{
        control: () => "mb-3",
      }}
    />
  );
}

export default SelectCountries;
