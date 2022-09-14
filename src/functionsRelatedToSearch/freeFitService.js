import axios from "axios";

async function requestToFitServer(city, activity) {
    try {
        const response = await axios.post('http://localhost:5000', {
            CompanyID: 0,
            area: city ? city : -1,
            freeText: "",
            subcategoryId: activity ? activity : -1
        })
        return response.data;
    } catch (error) {
        console.error("Error: ", error.message)
    }
}

export default requestToFitServer;