import { useState } from "react";
import citiesData from "../utiles/placesData";
import activitiesData from "../utiles/activitiesData";
import SearchInFit from './SearchInFit';
import requestToFitServer from '../functionsRelatedToSearch/freeFitService'

function MainSearchComponent() {

    const [errorMessage, setErrorMessage] = useState("")
    const [searchResult, setSearchResult] = useState([]);
    const [activityValue, setActivityValue] = useState(-1);

    async function searchLogic(arrFromAutocompleteInput) {
        setErrorMessage("")
        let arrCity = "";
        let arrActivity = "";

        if (arrFromAutocompleteInput.length <= 2 && arrFromAutocompleteInput.length > 0) {

            for (let autoInputIndex = 0; autoInputIndex < arrFromAutocompleteInput.length; autoInputIndex++) {

                for (let cityIndex = 0; cityIndex < citiesData.length; cityIndex++) {
                    if (citiesData[cityIndex].city === arrFromAutocompleteInput[autoInputIndex] && arrCity === "") {
                        arrCity += arrFromAutocompleteInput[autoInputIndex]
                    }
                }

                for (let activityIndex = 0; activityIndex < activitiesData.length; activityIndex++) {
                    if (activitiesData[activityIndex].activity === arrFromAutocompleteInput[autoInputIndex] && arrActivity === "") {
                        arrActivity = activitiesData[activityIndex].activityValue
                        setActivityValue(arrActivity)
                    }
                }
            }
        } else if (arrFromAutocompleteInput.length === 0) {
            setErrorMessage('You must choose atlist 1 paramater')
            return console.error('Search error')
        }
        else {
            setErrorMessage('You can search for max of 2 parameters, 1 city and 1 activity')
            return console.error('Search error');
        }

        const data = await requestToFitServer(arrCity, arrActivity)

        if (data.length === 0) {
            setErrorMessage("Can't find any results that matching your search, try another search")
        }
        setSearchResult(data)
    }

    return (
        <div>
            <SearchInFit
                errorMessage={errorMessage}
                searchLogic={searchLogic}
                searchResult={searchResult}
                activityValue={activityValue}
            />
        </div >
    )
}

export default MainSearchComponent;