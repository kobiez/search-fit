import axios from "axios";

class FreefitData {
    static async searchForFreefitData(city, activity) {
        try {

            await axios.post('/freefit/search', {
                CompanyID: 0,
                area: city ? city : -1,
                freeText: "",
                subcategoryId: activity ? activity : -1
            })
        } catch (error) {
            console.error("Error: ", error.message)
        }
    }

    static async dataFromFreefit() {
        try {
            const response = await axios.get('/freefit/search');
            return response.data;
        } catch (error) {
            console.error("Error: ", error.message)
        }

    }
}

export default FreefitData;