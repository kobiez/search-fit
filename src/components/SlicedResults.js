import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, CardActions } from '@mui/material';
import Link from '@mui/material/Link';

function mapThroughSearchValueArr(arrFromClientSearch, activityId) {
    const searchResultesToShow = arrFromClientSearch.map((value) =>
        <Grid item key={value.Id} xs={6} s={4} md={4} lg={2}>
            <Card
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    position: "relative",
                    maxWidth: "250px",
                    height: "300px"
                }}
            >
                <CardActionArea
                    href={"https://freefit.co.il/CLUBS/?CLUB=" + value.Id + "&SUBCLUBCATEGORY=" + activityId}
                    target="_blank"
                    rel="noopener"
                    sx={{ height:"70%" }}
                >
                    <CardMedia
                        component="img"
                        sx={{
                            marginLeft: "auto",
                            marginRight: "auto",
                            width: "100%",
                            maxHeight: "200px"
                        }}
                        image={'https://freefit.co.il' + value.LogoPath}
                        alt={value.Name}
                    />
                </CardActionArea>
                <CardContent
                    sx={{
                        padding: "5px",
                        position: "absolute",
                        right: "0",
                        top: "67%"
                    }}
                >
                    <Typography gutterBottom variant="h6" component="div">
                        <Typography variant="body2" textAlign="right">{value.Name}</Typography>
                    </Typography>
                </CardContent>
                <CardActions
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "flex-end",
                        position: "absolute",
                        top: "80%",
                        right: "1%"
                    }}
                >
                    <Typography variant="body1" >
                        <Link href={value.SiteUrl}
                            underline="none"
                            target="_blank"
                            rel="noopener"
                        >לאתר הבית
                        </Link>
                    </Typography>
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