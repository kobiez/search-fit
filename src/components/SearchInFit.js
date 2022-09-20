import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SearchSection from './SearchSection';
import PaginationFooter from "./Pagination";
import mapThroughSearchValueArr from './SlicedResults'
import { useState } from "react";

function SearchInFit({ errorMessage, searchLogic, activityValue, searchResult }) {

    const [numOfItems, setNumOfItems] = useState(8);

    const searchResultesArray = mapThroughSearchValueArr(searchResult, activityValue)

    const slicedArray = searchResultesArray.slice(numOfItems - 8, numOfItems)

    return (
        <Grid container display="flex" direction="column" spacing={3} justifyContent="space-around">
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
                    rowSpacing={2}
                    columnSpacing={0.5}
                    columns={16}
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        flexWrap: "wrap",
                    }}
                >
                    {!errorMessage && slicedArray}
                </Grid>
            </Grid>
            <Grid item
                sx={{
                    display: "flex",
                    justifyContent: "center"
                }}>
                {!errorMessage && <PaginationFooter
                    searchResultesArray={searchResultesArray}
                    setNumOfItems={setNumOfItems}
                />}
            </Grid>
        </Grid>
    )
}

export default SearchInFit;