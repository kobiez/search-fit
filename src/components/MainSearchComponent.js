import { useState } from "react";
import Box from '@mui/material/Box';
import citiesData from "../utiles/placesData";
import activitiesData from "../utiles/activitiesData";
import PaginationFooter from "./Pagination";
import SearchInFit from './SearchInFit';
import requestToFitServer from '../functionsRelatedToSearch/freeFitService'
import mapThroughSearchValueArr from '../functionsRelatedToSearch/mapThroughSearchValueArr'

function MainSearchComponent() {

    const [errorMessage, setErrorMessage] = useState("")
    const [searchResult, setSearchResult] = useState([]);
    const [activityValue, setActivityValue] = useState(-1);
    const [numOfItems, setNumOfItems] = useState(5);

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

    function handlePaginationOnChange(e, value) {
        setNumOfItems(5 * value)
    }

    const searchResultesArray = mapThroughSearchValueArr(searchResult, activityValue)

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

export default MainSearchComponent;