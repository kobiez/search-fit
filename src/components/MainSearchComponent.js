import { useState } from "react";
import citiesData from "../data/placesData";
import activitiesData from "../data/activitiesData";
import SearchInFit from './SearchInFit';
import FreefitData from '../services/freeFitService'

function MainSearchComponent() {

    const [errorMessage, setErrorMessage] = useState("")
    const [searchResult, setSearchResult] = useState([]);
    const [activityValue, setActivityValue] = useState(-1);

    async function searchLogic(arrFromAutocompleteInput, setNumOfItems, setPage) {
        setErrorMessage("");
        setPage(1)
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
            setErrorMessage('צריך לבחור אפשרות חיפוש אחת לפחות')
            return console.error('Search error')
        }
        else {
            setErrorMessage('ניתן לחפש עד שתי אפשרויות בלבד בכל פעם, מקום אחד ופעילות אחת')
            return console.error('Search error');
        }


        await FreefitData.searchForFreefitData(arrCity, arrActivity)

        const freefitDataArray = await FreefitData.dataFromFreefit();

        if (freefitDataArray.length === 0) {
            setErrorMessage("לא נמצאו תוצאות מתאימות")
        }
        setNumOfItems(8);
        setSearchResult(freefitDataArray)
    }

    return (
        <SearchInFit
            errorMessage={errorMessage}
            searchLogic={searchLogic}
            searchResult={searchResult}
            activityValue={activityValue}
        />
    )
}

export default MainSearchComponent;