import React, { Fragment } from 'react'
import './style.css'

function FilterColumn(props) {

    const handleChange = (e) => {
        if (e.target.checked) {
            props.handleSort(e.target.value)
            props.handlePage(1)
        }
    }
    return (
        <Fragment>
            <div className="checkboxes">
                <div className="boxes">
                    <label className="card-title">Sort By</label>
                    <label className="form-input" id='sortby'>
                        <input type="radio" defaultValue="size" name="sortby" onChange={handleChange} />&nbsp;
                        Size
                    </label>
                    <label className="form-input" id='sortby'>
                        <input type="radio" defaultValue="price" name="sortby" onChange={handleChange} />&nbsp;
                        Price
                    </label>
                    <label className="form-input" id='sortby'>
                        <input type="radio" defaultValue="id" name="sortby" onChange={handleChange} />&nbsp;
                        Id
                    </label>
                </div>
            </div>
        </Fragment>
    )
}

export default FilterColumn