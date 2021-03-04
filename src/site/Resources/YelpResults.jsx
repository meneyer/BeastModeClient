import React, {useState} from "react";
import {} from "reactstrap";

const YelpResults = () => {

    const apiKey = "DO_EIeliPPAldNBnuhkRq6wwGFugRber24QwaGBwriDyx0gbtO_X7rxfat2H-pOoIUJfgkKUCEsvND4UXPE3GiUE1m5c20M2k1AocgFJb_BVwThIxwfy3SNHtdg-YHYx" 
    
    // const [zipCode, setZipCode ] = useState('');
    // const [search, setSearch] = useState({});

    // const fetchYelpResults =() => {
    //     fetch(`https://api.yelp.com/v3/categories/{parent_alias}`)
    //     .then((res) => res.json())
    //     .then((json) => {
    //         console.log(json);
    //         setSearch(json); 
    //     })
    //     }

    //     const handleSubmit = (event) => {
    //         event.preventDefault();
    //         fetchYelpResults();
    //     } 

    return (
        <div>              
            Hello From Yelp Results
                {/* <form onSubmit={ (e) => handleSubmit(e)}>
                    <span>Zip Code:</span>
                    <input type = "text" name ="zipcode" onChange={(e) => setZipCode(e.target.value) } required></input>
                    <button className="submit">Submit</button>
                </form> */}
        </div>
    );
};



export default YelpResults;
