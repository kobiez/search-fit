import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';

function PaginationFooter({ searchResultesArray, setNumOfItems}) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(Math.ceil(searchResultesArray.length / 5))
    }, [searchResultesArray.length])

    function handlePaginationOnChange(e, value) {
        setNumOfItems(5 * value)
    }

    return (
        <Box sx={{ display: "flex", justifyContent: "center" }} xs={12}>
            {count > 0 && <Pagination
                showFirstButton
                showLastButton
                size="large"
                variant="outlined"
                color="primary"
                count={count}
                onChange={handlePaginationOnChange}
                sx={{ position: "absolute", top: "95%" }}
            />}
        </Box>
    )
}

export default PaginationFooter;