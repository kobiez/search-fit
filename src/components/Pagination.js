import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';

function PaginationFooter({ searchResultesArray, setNumOfItems }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(Math.ceil(searchResultesArray.length / 8))
    }, [searchResultesArray.length])

    function handlePaginationOnChange(e, value) {
        setNumOfItems(8 * value)
    }

    return (
        <Box component={"div"} /* sx={{ position:"absolute", bottom:"2%"}} */>
            {count > 0 && <Pagination
                showFirstButton
                showLastButton
                size="large"
                variant="outlined"
                color="primary"
                count={count}
                onChange={handlePaginationOnChange}
            />}
        </Box>
    )
}

export default PaginationFooter;