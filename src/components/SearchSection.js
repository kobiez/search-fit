import { useState } from "react";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import setAutocompleteOptionsOnChange from './autocompleteOptions'

function SearchSection({ searchLogic, setNumOfItems, setPage }) {

    const [autocompleteInputValue, setAuotocompleteInputValue] = useState([])
    const [arrayForAutocompleteOptions, setArrayForAutocompleteOptions] = useState([]);

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
                    color="error"
                    onClick={() => searchLogic(autocompleteInputValue, setNumOfItems, setPage)}
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
                    sx={{ width: "45%", minWidth: "250px" }}
                    closeText={"Close"}
                    clearText={"Bye Bye"}
                    id="combo-box"
                    options={[...arrayForAutocompleteOptions]}
                    getOptionLabel={value => `${value}`}
                    renderInput={(params) =>
                        <TextField {...params}
                            InputProps={{
                                ...params.InputProps
                            }}
                        />
                    }
                    value={autocompleteInputValue}
                    onChange={(event, value) => {
                        setAuotocompleteInputValue(value)
                    }}
                    onInputChange={(event, newInputValue) => {
                        setAutocompleteOptionsOnChange(newInputValue, setArrayForAutocompleteOptions)
                    }}
                />
            </Grid>
        </Grid>
    )
}

export default SearchSection;