import citiesData from "../data/placesData";
import activitiesData from "../data/activitiesData";

function setAutocompleteOptionsOnChange(clientInputStr, setArrayToShow) {
    setArrayToShow([])

    let arrFromClientInput = [];

    if (clientInputStr) {
        arrFromClientInput = clientInputStr.split(" ");
    }

    let tempCityArray = [];
    let tempActivityArray = [];

    for (let inputArrIndex = 0; inputArrIndex < arrFromClientInput.length; inputArrIndex++) {

        setArrayToShow([])

        for (let cityIndex = 0; cityIndex < citiesData.length; cityIndex++) {
            if (citiesData[cityIndex].city.includes(arrFromClientInput[inputArrIndex])) {
                tempCityArray = tempCityArray.filter(value => value !== citiesData[cityIndex].city)
                tempCityArray = [...tempCityArray, citiesData[cityIndex].city]
            }
        }

        for (let activityIndex = 0; activityIndex < activitiesData.length; activityIndex++) {
            if (activitiesData[activityIndex].activity.includes(arrFromClientInput[inputArrIndex])) {
                tempActivityArray = tempActivityArray.filter(value => value !== activitiesData[activityIndex].activity)
                tempActivityArray = [...tempActivityArray, activitiesData[activityIndex].activity]
            }
        }
    }

    setArrayToShow([...tempCityArray, ...tempActivityArray])
}

export default setAutocompleteOptionsOnChange;