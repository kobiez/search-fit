import { useState } from "react";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import setAutocompleteOptionsOnChange from '../functionsRelatedToSearch/autocompleteOptions'


function SearchSection({ searchLogic }) {

    const [inputValue, setInputValue] = useState([])
    const [arrayToShow, setArrayToShow] = useState([]);

    return (
        <Grid container component={"div"}
            spacing={1}
            sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center"
            }}
        >
            <Grid item xs={8} md={8} lg={6}
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <Button
                    type="button"
                    variant="contained"
                    onClick={() => searchLogic(inputValue)}
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
                    forcePopupIcon={false}
                    multiple
                    clearOnEscape
                    noOptionsText="Type to search..."
                    sx={{ width: "45%" }}
                    closeText={"Close"}
                    clearText={"Bye Bye"}
                    id="combo-box"
                    options={[...arrayToShow]}
                    getOptionLabel={value => `${value}`}
                    renderInput={(params) =>
                        <TextField {...params}
                            InputProps={{
                                ...params.InputProps
                            }}
                        />
                    }
                    value={inputValue}
                    onChange={(event, value) => {
                        setInputValue(value)
                    }}
                    onInputChange={(event, newInputValue) => {
                        setAutocompleteOptionsOnChange(newInputValue, setArrayToShow)
                    }}
                />
            </Grid>
        </Grid>
    )
}

export default SearchSection;