import React, { useState } from "react";

const CountryTable = () => {
    const [text, setText] = useState();
    const [data, setData] = useState([]);

    const handalSubmit = (event) => {

        event.preventDefault();
        console.log(text);
        if (text === "abc" || text === "xyz" || text === "aaa") {
            alert('this tye of no country');
            return
        }
        fetch(`https://restcountries.com/v3/name/${text}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                {
                    console.log(data, "data")
                    setData(data)
                }
            })
    }

    return (
        <div>
            <form onSubmit={handalSubmit}>
                <label>Country
                    <input
                        type="text"
                        required={true}
                        name="country"
                        value={text}
                        placeholder="Enter country name"
                        onChange={(event) => setText(event.target.value)}
                    />
                </label>
                <button disabled={!text} type="submit">Submit</button>
            </form>
            <div>
                <table>
                    <thead>
                        <th>capital</th>
                        <th>population</th>
                        <th>latlng</th>
                    </thead>
                    <tbody>
                        {data?.map((row, index) => (
                            <tr key={index}>
                                <td>{row.capital}</td>
                                <td>{row.population}</td>
                                <td>{row.latlng}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}



export default CountryTable;