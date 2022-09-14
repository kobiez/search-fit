import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, CardActions } from '@mui/material';
import Link from '@mui/material/Link';

function mapThroughSearchValueArr(arrFromClientSearch, activityId) {
    const searchResultesToShow = arrFromClientSearch.map((value) =>
        <Grid item key={value.Id} sx={{ margin: "1rem", width: "13rem" }} xs={12} sm={5} md={2} xl={2}>
            <Card >
                <CardActionArea
                    href={"https://freefit.co.il/CLUBS/?CLUB=" + value.Id + "&SUBCLUBCATEGORY=" + activityId}
                    target="_blank"
                    rel="noopener"
                >
                    <CardMedia
                        component="img"
                        height="180"
                        image={'https://freefit.co.il' + value.LogoPath}
                        alt={value.Name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            <Typography variant="body2" textAlign="right">{value.Name}</Typography>
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{ marginLeft: "7rem" }}>
                    <Typography variant="body1">
                        <Link href={value.SiteUrl}
                            underline="none"
                            target="_blank"
                            rel="noopener"
                        >לאתר הבית
                        </Link>
                    </Typography>
                </CardActions>
                <CardActions sx={{ marginLeft: "6rem" }}>
                    <Typography variant="body1">
                        <Link href={"https://freefit.co.il/CLUBS/?CLUB=" + value.Id + "&SUBCLUBCATEGORY=" + activityId}
                            underline="none"
                            target="_blank"
                            rel="noopener"
                        >FreeFit לאתר
                        </Link>
                    </Typography>
                </CardActions>
            </Card>
        </Grid >
    )
    return searchResultesToShow;
}

export default mapThroughSearchValueArr;