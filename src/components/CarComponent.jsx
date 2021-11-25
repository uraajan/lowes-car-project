import React from 'react'

const CarComponent = (props) => {
    console.log("CarComponent: ", props)

    return(
        <div className="col">
            <div className="card bg-light">
                <div className="card-body">
                    <h2 className="card-title">{props.company.name} {props.name}</h2>
                    <h4><i>{props.tagLine}!</i></h4>
                    <h5>INR: {props.price}</h5>
                    <h6>Type: {props.type}</h6>
                </div>
            </div>
        </div>
    )
}

export default CarComponent