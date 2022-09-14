import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';

function PaginationFooter({ searchResultesArray, handleChange }) {

    let count;
    if (searchResultesArray.length > 0) {
        count = Math.floor(searchResultesArray.length / 5 + 1)
    }

    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            {count > 0 && <Pagination
                showFirstButton
                showLastButton
                variant="outlined"
                color="primary"
                count={count}
                onChange={handleChange}
            />}
        </Box>
    )
}

export default PaginationFooter;