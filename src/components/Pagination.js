import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';

function PaginationFooter({ searchResultesToShow, handleChange }) {

    let count;
    if (searchResultesToShow.length > 0) {
        count = Math.floor(searchResultesToShow.length / 5 + 1)
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