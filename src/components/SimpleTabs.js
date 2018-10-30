import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';
// import Typography from '@material-ui/core/Typography';

const styles = () => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'rgb(86, 85, 85)',

    opacity: 0.9
  },
  label: {
    fontSize: 12,
    textShadow: '2px 4px 3px rgba(0,0,0,0.3)',

  },
  indicator: {
    backgroundColor: 'rgb(77, 195, 255)',
  }
});

class SimpleTabs extends React.Component {
  state = {
    value: 0,
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };
  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={this.handleChange}
            centered
            fullWidth
            classes={{
              root: classes.root,
              indicator: classes.indicator
            }}
          >
            <Tab
              classes={{
                label: classes.label
              }}
              exact="true"
              component={Link}
              to='/'
              label='Home'
            />

            <Tab
              classes={{
                label: classes.label
              }}
              component={Link}
              to='/research'
              label='Research'
            />
            <Tab
              classes={{
                label: classes.label
              }}
              component={Link}
              to='/publication'
              label='Publications'
            />

            <Tab
              classes={{
                label: classes.label
              }}
              component={Link}
              to='/facilities'
              label='Facilities'
            />
            <Tab
              classes={{
                label: classes.label
              }}
              component={Link}
              to='/people'
              label='People'
            />
          </Tabs>


        </AppBar>

      </div>
    );
  }
}



export default withStyles(styles)(SimpleTabs);