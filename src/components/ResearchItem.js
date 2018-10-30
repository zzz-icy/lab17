import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = () => ({
    root: {
        paddingTop: 5,
        paddingBottom: 5,
        marginTop: 5,
    },
});

function ResearchItem(props) {
    const { classes } = props;

    return (
        <div>
            <Paper className={classes.root} elevation={1}>
                <div className="research-container">
                    <div className="research-img-container">
                        <img
                            alt="project1"
                            src={props.img}
                            className="research-img"
                        />
                    </div>
                    <p
                        className="research-description"
                    >
                        responsible for ATLAS LAr trigger upgrade (ph-1) front-end readout optical links. Deliverables: ASICs in the LOC family (a total of about 20,000 chips) plus the optical modules MTx (about 3,000) and MTRx (about 700).
            </p>
                </div>
            </Paper>
        </div>
    );
}



export default withStyles(styles)(ResearchItem);