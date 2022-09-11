import { useState } from "react";
import Typography from "@mui/material/Typography";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, CardActions } from '@mui/material';
import Link from '@mui/material/Link';
import citiesData from "../utiles/placesData";
import activitiesData from "../utiles/activitiesData";
import axios from "axios";

function Search() {

    const [value, setValue] = useState([])
    const [freeFitData, setFreeFitData] = useState([]);
    const [arrayToShow, setArrayToShow] = useState([]);
    //const [searchToArray, setSearchToArray] = useState([]);
    console.log(freeFitData);
    function setOptionsOnChange(str) {
        setArrayToShow([])

        let arr = [];
        if (str) {
            arr = str.split(" ");
        }

        let tempCityArray = [];
        let tempActivityArray = [];

        for (let a = 0; a < arr.length; a++) {
            setArrayToShow([])
            for (let c = 0; c < citiesData.length; c++) {
                if (citiesData[c].city.includes(arr[a])) {
                    tempCityArray = tempCityArray.filter(value => value !== citiesData[c].city)
                    tempCityArray = [...tempCityArray, citiesData[c].city]
                }
            }
            for (let s = 0; s < activitiesData.length; s++) {
                if (activitiesData[s].activity.includes(arr[a])) {
                    tempActivityArray = tempActivityArray.filter(value => value !== activitiesData[s].activity)
                    tempActivityArray = [...tempActivityArray, activitiesData[s].activity]
                }
            }
        }
        setArrayToShow([...tempCityArray, ...tempActivityArray])
    }

    async function requestToFitServer(city, activity) {
        const response = await axios.post('http://localhost:5000', {
            CompanyID: 0,
            area: city ? city : -1,
            freeText: "",
            subcategoryId: activity ? activity : -1
        })
        return response.data;
    }

    async function searchLogic(arr) {

        let arrCity = "";
        let arrActivity = "";

        if (arr.length <= 2 && arr.length > 0) {
            for (let a = 0; a < arr.length; a++) {
                for (let c = 0; c < citiesData.length; c++) {
                    if (citiesData[c].city === arr[a] && arrCity === "") {
                        arrCity += arr[a]
                    }
                }
                for (let s = 0; s < activitiesData.length; s++) {
                    if (activitiesData[s].activity === arr[a] && arrActivity === "") {
                        arrActivity = activitiesData[s].activityValue
                    }
                }
            }
        } else if (arr.length === 0) {
            return console.error('You must choose atlist 1 paramater')
        }
        else {
            return console.error('You can search for max of 2 parameters, 1 city and 1 activity');
        }
        const data = await requestToFitServer(arrCity, arrActivity)
        setFreeFitData(data)
    }

    const searchResulteToShow = freeFitData.map((value) =>
        <Grid item key={value.Id} sx={{ margin: "1rem", width: "13rem" }}>
            <Card>
                <CardActionArea href="https://freefit.co.il">
                    <CardMedia
                        component="img"
                        height="140"
                        image={'https://freefit.co.il' + value.LogoPath}
                        alt={value.Name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            Name: <Typography variant="body2">{value.Name}</Typography>
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{ marginLeft: "6rem" }}>
                    <Typography variant="body1"><Link href={value.SiteUrl}>לאתר הבית</Link></Typography>
                </CardActions>
                <CardActions sx={{ marginLeft: "5rem" }}>
                    <Typography variant="body1"><Link href="https://freefit.co.il">FreeFit לאתר</Link></Typography>
                </CardActions>
            </Card>
        </Grid>
    )

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
                <Grid
                    item
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <Button
                        type="button"
                        variant="contained"
                        onClick={() => searchLogic(value)}
                        sx={{
                            width: "10%",
                            height: "55px",
                            fontSize: " 1.3rem",
                            marginRight: "5px"
                        }}
                    >
                        חפש
                    </Button>
                    <Autocomplete
                        multiple
                        noOptionsText="Type to search..."
                        sx={{ width: "40%" }}
                        disablePortal
                        closeText={"Close"}
                        clearText={"Bye Bye"}
                        id="combo-box"
                        options={[...arrayToShow]}
                        getOptionLabel={value => `${value}`}
                        renderInput={(params) =>
                            <TextField {...params}
                                InputProps={{
                                    ...params.InputProps
                                }} >
                            </TextField>
                        }
                        value={value}
                        onChange={(e, value) => {
                            setValue(value)
                        }}
                        onInputChange={(event, newInputValue) => {
                            setOptionsOnChange(newInputValue)
                        }}
                    />
                </Grid>
            </Grid>
            <Grid container
                sx={{ display: "flex", justifyContent: "space-around", marginTop: "5rem" }}
            >
                {searchResulteToShow}
            </Grid>
        </div>
    )
}

export default Search;



// https://freefit.co.il/CLUBS/?CLUB=23541&SUBCLUBCATEGORY=1326
// https://freefit.co.il/CLUBS/?CLUB=29259&SUBCLUBCATEGORY=1369

/*
const [value, setValue] = useState(null);
value={value}
onChange={(e, newValue) => {
setValue(newValue)
console.log(e.target.firstChild.data);
}}*/