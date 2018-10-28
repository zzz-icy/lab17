import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        width: "80%",
        marginTop: 16,
        marginBottom: 16,
        marginRight: 'auto',
        marginLeft: 'auto',
    },
    media: {
        height: 140,
    },
};

class NewsCard extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={this.props.img}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard
        </Typography>
                        <Typography component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">Share</Button>
                    <Button size="small" color="primary">Learn More</Button>
                </CardActions>
            </Card>
        );
    }
}

export default withStyles(styles)(NewsCard);