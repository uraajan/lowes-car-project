import axios from "axios"

class CarService {

    getAllCars(){
        console.log("CarService: getAllCars")
        return axios.get("http://localhost:5555/cars/")
    }

}

export default new CarService()