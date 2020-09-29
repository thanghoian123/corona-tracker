import React, { useState,useEffect } from 'react';
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountries } from "../../api";
import styles from './CountryPicker.module.css'

function CountryPicker(props) {
    const { handleCountryChange } = props;
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
          setFetchedCountries(await fetchCountries());
        };
        fetchAPI();
      }, [fetchedCountries]);

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect
                defaultValue=""
                onChange={(e) => handleCountryChange(e.target.value)}
            >
                <option value="">Global</option>
                {fetchedCountries.map((country, key) => (
                    <option key={key} value={country}>
                        {country}
                    </option>
                ))}
            </NativeSelect>
        </FormControl>
    );

}

export default CountryPicker;