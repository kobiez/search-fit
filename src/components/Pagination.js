import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';

function PaginationFooter({ searchResultesArray, setNumOfItems, page, setPage }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(Math.ceil(searchResultesArray.length / 8))
    }, [searchResultesArray.length, setCount])

    function handlePaginationOnChange(e, value) {
        setNumOfItems(8 * value)
        setPage(value)
    }

    return (
        <Box component={"div"}>
            {count > 0 && <Pagination
                showFirstButton
                showLastButton
                variant="outlined"
                color="error"
                page={page}
                count={count}
                onChange={handlePaginationOnChange}
            />}
        </Box>
    )
}

export default PaginationFooter;