import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search'; import { createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import "./form.css"

const Form = (props) => {
    const { city, country, setCityname, setCountryname, onHandleSubmit, setPayload } = props;
    const assignCity = e => {
        setCityname(e.target.value)
        setPayload(null)
    }
    const assignCountry = e => {
        setCountryname(e.target.value)
        setPayload(null)
    }
    return (
        <div className="container mt-md-2">
            <form onSubmit={onHandleSubmit}>
                <div className="row  offset-md-2">
                    <div className="col-md-4  ">
                        <input type="text"
                            className="form-control "
                            value={city}
                            id="cityname"
                            name="cityname"
                            placeholder="City"
                            onChange={assignCity}
                        />
                    </div>
                    <div className="col-md-4 ">
                        <input type="text"
                            className="form-control"
                            value={country}
                            id="countryname"
                            name="countryname"
                            placeholder="Country"
                            onChange={assignCountry}
                        />
                    </div>
                    <div className="col-md-4 text-md-left">
                        <button className="btn btn-warning "><SearchIcon />Get Weather</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Form
