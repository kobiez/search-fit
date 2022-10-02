import { useState } from "react";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import setAutocompleteOptionsOnChange from './autocompleteOptions'
import { red } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

const directionTheme = createTheme({
    direction: 'rtl',
});

const theme = createTheme({
    palette: {
        error: {
            main: red[400],
            dark: red[700]
        }
    }
}
)

function SearchSection({ searchLogic, setNumOfItems, setPage }) {

    const [autocompleteInputValue, setAuotocompleteInputValue] = useState([])
    const [arrayForAutocompleteOptions, setArrayForAutocompleteOptions] = useState([]);

    return (
        <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={directionTheme}>
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
                        <ThemeProvider theme={theme}>
                            <Autocomplete
                                forcePopupIcon={false}
                                multiple
                                clearOnEscape
                                noOptionsText="חפשו עיר, סוג פעילות או גם וגם"
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

                            <Button
                                data-testid="search-button"
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
                                חיפוש
                            </Button>
                        </ThemeProvider>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </CacheProvider>
    )
}

export default SearchSection;