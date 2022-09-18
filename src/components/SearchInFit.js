import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SearchSection from './SearchSection';
import PaginationFooter from "./Pagination";
import mapThroughSearchValueArr from '../functionsRelatedToSearch/mapThroughSearchValueArr'
import { useState } from "react";

function SearchInFit({ errorMessage, searchLogic, activityValue, searchResult}) {

    const [numOfItems, setNumOfItems] = useState(5);

    const searchResultesArray = mapThroughSearchValueArr(searchResult, activityValue)

    const slicedArray = searchResultesArray.slice(numOfItems - 5, numOfItems)

    return (
        <Grid container display="flex" direction="column" spacing={3}>
            <Grid item xs={4}>
                <Typography
                    variant="h2"
                    mb={1}
                    color="error.dark"
                    textAlign="center"
                >
                    Search in fit
                </Typography>
            </Grid>
            <Grid item xs={4}>
                <Typography
                    variant="h3"
                    mb={4}
                    color="primary"
                    textAlign="center"
                >
                    חיפוש
                </Typography>
            </Grid>
            <SearchSection
                searchLogic={searchLogic}
            />
            <Grid item
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                    alignItems: "center",
                    marginTop: "5rem"
                }}
            >
                {errorMessage && <Typography
                    variant="h5"
                    color="error"
                    gutterBottom
                >
                    {errorMessage}
                </Typography>}
                <Grid container
                    spacing={2}
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        flexWrap: "wrap"
                    }}
                >
                    {!errorMessage && slicedArray}
                </Grid>
            </Grid>
            <Grid item>
                {!errorMessage && <PaginationFooter
                    searchResultesArray={searchResultesArray}
                    setNumOfItems={setNumOfItems}
                />}
            </Grid>
        </Grid>
    )
}

export default SearchInFit;