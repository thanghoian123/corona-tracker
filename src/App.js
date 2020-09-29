import React, { useEffect, useState } from 'react';
import {fetchData} from './api';
import styles from "./App.module.css";
// import Country from './components/country';
import Cards from './components/Cards/Cards';
import CountryPicker from './components/CountryPicker/CountryPicker';



function App() {
    const [data, setdata] = useState({});
    const [country, setcountry] = useState("");
    useEffect(() => {
        async function getData(){
            const fetchedData = await fetchData(); 
            setdata(fetchedData);
        }
        getData();
    }, []);

    async function handleCountryChange (country){
        const fetchedData = await fetchData(country);
        setdata(fetchedData);
        setcountry(country)
        
    }

    console.log(styles);
    
    return (
        <div className={styles.container}>
            <Cards data={data} country={country}/>
            <CountryPicker handleCountryChange={handleCountryChange}/>
            <h2>hello</h2>
        </div>
    );
}

export default App;
