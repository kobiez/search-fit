import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SearchSection from './SearchSection';
import PaginationFooter from "./Pagination";
import mapThroughSearchValueArr from './SlicedResults'
import { useState } from "react";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

theme.typography.h1 = {
    fontSize: '5rem',
    [theme.breakpoints.up('md')]: {
        fontSize: '7.5rem',
    },
    [theme.breakpoints.down('md')]: {
        fontSize: '5rem',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '3rem',
    },
};

function SearchInFit({ errorMessage, searchLogic, activityValue, searchResult }) {

    const [numOfItems, setNumOfItems] = useState(8);
    const [page, setPage] = useState(1);

    const searchResultesArray = mapThroughSearchValueArr(searchResult, activityValue)

    const slicedArray = searchResultesArray.slice(numOfItems - 8, numOfItems)

    return (
        <Grid container display="flex" direction="column" spacing={3} justifyContent="space-around">
            <Grid item xs={1}>
                <ThemeProvider theme={theme}>
                    <Typography
                        variant="h1"
                        mb={1}
                        color="error.light"
                        textAlign="center"
                        sx={{ fontFamily: "'Permanent Marker'", fontSize: "7.5rem" }}
                    >
                        Search in fit
                    </Typography>
                </ThemeProvider>
            </Grid>
            <Grid item xs={4}>
                <Typography
                    variant="h5"
                    mb={4}
                    color="error.light"
                    textAlign="center"
                >
                    <Link
                        href="https://freefit.co.il"
                        underline="none"
                        target="_blank"
                        rel="noopener"
                        color="error.light"
                    >Freefit</Link> מנוע חיפוש לאתר
                </Typography>
            </Grid>
            <SearchSection
                searchLogic={searchLogic}
                setNumOfItems={setNumOfItems}
                setPage={setPage}
            />
            <Grid item
                display={!errorMessage ? "none" : "block"}>
                {errorMessage && <Typography
                    variant="h5"
                    color="error"
                    gutterBottom
                    textAlign="center"
                >
                    {errorMessage}
                </Typography>}
            </Grid>
            <Grid item
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                    alignItems: "center",
                    marginTop: "3.5rem"
                }}
            >
                {!errorMessage && <Grid container maxWidth="lg"
                    rowSpacing={1}
                    columnSpacing={1}
                    columns={16}
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        minHeight: "40rem",
                        marginBottom: "6rem"
                    }}
                >
                    {slicedArray}
                </Grid>}
            </Grid>
            <Grid item
                sx={{
                    display: "flex",
                    justifyContent: "center"
                }}>
                {!errorMessage && <PaginationFooter
                    searchResultesArray={searchResultesArray}
                    setNumOfItems={setNumOfItems}
                    page={page}
                    setPage={setPage}
                />}
            </Grid>
        </Grid>
    )
}

export default SearchInFit;