import citiesData from "../utiles/placesData";
import activitiesData from "../utiles/activitiesData";

function setAutocompleteOptionsOnChange(clientInputStr, setArrayToShow) {
    setArrayToShow([])

    let arrFromClientInput = [];

    if (clientInputStr) {
        arrFromClientInput = clientInputStr.split(" ");
    }

    let tempCityArray = [];
    let tempActivityArray = [];

    for (let a = 0; a < arrFromClientInput.length; a++) {

        setArrayToShow([])

        for (let c = 0; c < citiesData.length; c++) {
            if (citiesData[c].city.includes(arrFromClientInput[a])) {
                tempCityArray = tempCityArray.filter(value => value !== citiesData[c].city)
                tempCityArray = [...tempCityArray, citiesData[c].city]
            }
        }

        for (let s = 0; s < activitiesData.length; s++) {
            if (activitiesData[s].activity.includes(arrFromClientInput[a])) {
                tempActivityArray = tempActivityArray.filter(value => value !== activitiesData[s].activity)
                tempActivityArray = [...tempActivityArray, activitiesData[s].activity]
            }
        }
    }

    setArrayToShow([...tempCityArray, ...tempActivityArray])
}

export default setAutocompleteOptionsOnChange;