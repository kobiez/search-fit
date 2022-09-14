import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SearchSection from './SearchSection';

function SearchInFit({ errorMessage, slicedArray, searchLogic }) {

    return (
        <div>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <Typography
                    variant="h2"
                    mb={4}
                    color="error"
                >
                    Search in fit
                </Typography>
                <Typography
                    variant="h3"
                    mb={4}
                    color="primary"
                >
                    חיפוש
                </Typography>
                <SearchSection
                    searchLogic={searchLogic}
                />
                <Grid container
                    sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        marginTop: "5rem"
                    }}
                >
                    <Typography
                        variant="h5"
                        color="error"
                        gutterBottom
                    >
                        {errorMessage && errorMessage}
                    </Typography>
                    {!errorMessage && slicedArray}
                </Grid>
            </Grid>
        </div>
    )
}

export default SearchInFit;