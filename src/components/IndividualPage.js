import React from 'react';
import { connect } from 'react-redux';
import yejb from '../images/peoplePhoto/yejb.png';
import EditableField from '../components/EditableField';
import AccessDialog from '../components/AccessDialog';
import { startAddPeople } from '../actions/people';

class IndividualPage extends React.Component {
    state = {
        open: false,
        disabled: true,
        auth: false,
        title: '',
        biography: '',
        // inputvalue: ''
    };
    handleClickOpen = () => {
        this.setState({
            open: true,
        });
    };

    handleClose = value => {
        this.setState({
            // inputvalue: value,
            open: false,
            disabled: value === '123' ? false : true,
        });

    };

    handleSave = () => {
        this.setState({
            disabled: true,
        });
        const data = {
            title: this.state.title,
            biography: this.state.biography
        }
        // console.log(data);
        this.props.startAddPeople(data);
        // this.setState({
        //     // inputvalue: value,
        //     title: this.props.title,
        //     biography: this.props.biography,
        // });
    }

    onTitleChange = (e) => {
        this.setState({
            title: e.target.value
        });
    }
    onBiographyChange = (e) => {
        this.setState({
            biography: e.target.value
        });
    }


    render() {
        console.log(this.props.people, this.state);
        // if (!!this.props.people) return (<p>No data</p>);
        return (

            <div className="page-header">
                <div className="content-container">
                    <div className="individual-container-row">
                        <img alt='avatar' src={yejb} className="individual-img" />
                        <div className="individual-container-colomn largePadding">
                            <h3>Ye, Jingbo</h3>
                            <h4>Title</h4>
                            <EditableField
                                key='title'
                                open={this.state.open}
                                disabled={this.state.disabled}
                                placeholder='your title goes here...'
                                onTextChange={this.onTitleChange}
                                // value={this.props.people[0].title}
                                value={this.state.title}

                            />
                            <h4>Biography</h4>
                            <EditableField
                                key="biography"
                                open={this.state.open}
                                disabled={this.state.disabled}
                                placeholder='your introduction goes here...'
                                onTextChange={this.onBiographyChange}
                                // value={this.props.people[0].biography}
                                value={this.state.biography}

                            />
                            {/*<h4>Publication</h4>
                            <EditableField
                                key='publications'
                                open={this.state.open}
                                disabled={this.state.disabled}
                                placeholder='your publication goes here...'
                            // onPublicationsChange={this.onPublicationsChange}
                            />*/}

                        </div>
                        {
                            !this.state.disabled
                            &&
                            <button
                                style={{ height: '10%', marginTop: 12 }}
                                onClick={this.handleSave}
                            >
                                save
                            </button>
                        }

                        {
                            this.state.disabled
                            &&
                            <button
                                style={{ height: '10%', marginTop: 12 }}
                                onClick={this.handleClickOpen}
                            >
                                Edit
                            </button>
                        }
                        <AccessDialog
                            // inputvalue={this.state.inputvalue}
                            open={this.state.open}
                            onClose={this.handleClose}
                        />
                    </div>

                </div>
            </div>
        );

    }
}
const mapStateToProps = (state) => {
    console.log(state);
    return ({
        people: state.people
    })
};
const mapDispatchToProps = (dispatch) => ({
    // addExpense: (expense) => (dispatch(addExpense(expense))),
    startAddPeople: (data) => (dispatch(startAddPeople(data)))

});
export default connect(
    // provide information about what we want connect
    // like we might only need a subset of the huge amount of states in store
    // mapStateToProps,
    mapStateToProps,
    mapDispatchToProps
)(IndividualPage);

