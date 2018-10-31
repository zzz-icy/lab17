import React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
    root: {
        marginTop: 16,
        width: "100%",
        marginRight: 'auto',
        marginLeft: 'auto'
    },
});

class ContentPaper extends React.Component {
    render() {
        const { classes } = this.props
        return (

            <Paper className={classes.root} elevation={1}>
                {this.props.children}
            </Paper>
        )
    }
}

export default withStyles(styles)(ContentPaper);
