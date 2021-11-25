import { Component } from "react";
import CarService from "../api/CarService";
import CarComponent from "./CarComponent";

class CarDetailsApp extends Component {

    constructor() {
        console.log("CarDetailsApp: constructor")
        super()
        this.state = {
            cars: []
        }
    }

    componentDidMount(){
        console.log("CarDetailsApp: componentDidMount")
        CarService.getAllCars()
        .then(response => {
            console.log("response.data: ", response)
            this.setState({
                cars: response.data
            })
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    render(){
        console.log("CarDetailsApp: render")
        return(
            <>
            <div className="row row-cols-3 g-4 bg-dark">
                {
                    Object.keys(this.state.cars).map((key, index) => {
                        return <CarComponent key={index} {...this.state.cars[key]} />
                    })
                }
            </div>
            </>
        )
    }
}

export default CarDetailsApp