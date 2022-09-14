import { useState } from "react";
import Box from '@mui/material/Box';
import citiesData from "../utiles/placesData";
import activitiesData from "../utiles/activitiesData";
import PaginationFooter from "./Pagination";
import SearchInFit from './SearchInFit';
import requestToFitServer from '../functionsRelatedToSearch/freeFitService'
import mapThroughSearchValueArr from '../functionsRelatedToSearch/mapThroughSearchValueArr'

function SearchRules() {

    const [errorMessage, setErrorMessage] = useState("")
    const [freeFitData, setFreeFitData] = useState([]);
    const [activityValue, setActivityValue] = useState(-1);
    const [numOfItems, setNumOfItems] = useState(5);

    async function searchLogic(arrFromAutocompleteInput) {
        setErrorMessage("")
        let arrCity = "";
        let arrActivity = "";

        if (arrFromAutocompleteInput.length <= 2 && arrFromAutocompleteInput.length > 0) {
            for (let a = 0; a < arrFromAutocompleteInput.length; a++) {
                for (let c = 0; c < citiesData.length; c++) {
                    if (citiesData[c].city === arrFromAutocompleteInput[a] && arrCity === "") {
                        arrCity += arrFromAutocompleteInput[a]
                    }
                }
                for (let s = 0; s < activitiesData.length; s++) {
                    if (activitiesData[s].activity === arrFromAutocompleteInput[a] && arrActivity === "") {
                        arrActivity = activitiesData[s].activityValue
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
            setErrorMessage('לא נמצאו תוצאות')
        }
        setFreeFitData(data)
    }

    function handlePaginationOnChange(e, value) {
        setNumOfItems(5 * value)
    }

    const searchResultesArray = mapThroughSearchValueArr(freeFitData, activityValue)

    const slicedArray = searchResultesArray.slice(numOfItems - 5, numOfItems)

    return (
        <div>
            <SearchInFit
                slicedArray={slicedArray}
                errorMessage={errorMessage}
                searchLogic={searchLogic}
            />
            <Box sx={{ marginTop: "2rem" }}>
                {!errorMessage && <PaginationFooter
                    searchResultesArray={searchResultesArray}
                    handleChange={handlePaginationOnChange}
                />}
            </Box>
        </div >
    )
}

export default SearchRules;