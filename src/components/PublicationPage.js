import React from 'react';
import { connect } from 'react-redux';
import { startSetPublications, startAddPublication } from '../actions/publications';

class PublicationPage extends React.Component {
    componentDidMount() {
        // this.props.publications initial value is []
        if (!!this.props.publications) {

            this.props.startSetPublications();
        }
    }

    state = {
        editting: false,
        inputText: '',
        link: ''
    }
    handleAddItem = () => {
        this.setState(() => ({ editting: true }))
    }
    handleSaveItem = () => {
        // const length = this.state.publicationArray1.length;
        this.setState(() => ({ editting: false }));
        if (this.state.inputText !== '') {
            this.props.startAddPublication({
                content: this.state.inputText,
                link: this.state.link
            });
            this.props.startSetPublications();
        }
        this.setState({
            inputText: '',
            link: ''
        });
    }
    onTextChange = (e) => {
        this.setState({
            inputText: e.target.value
        });
    }
    onLinkChange = (e) => {
        this.setState({
            link: e.target.value
        });
    }
    render() {
        const publications = this.props.publications;
        if (!publications) return (<p>No data</p>);
        return (
            <div className="page-header">
                <div className="content-container">
                    <h2>Publications</h2>
                    {!this.state.editting && <button onClick={this.handleAddItem}>Add item</button>}
                    {
                        this.state.editting
                        &&
                        (
                            <div className='edit-group'>
                                <p>Content:</p>
                                <textarea
                                    rows="2"
                                    cols="30"
                                    value={this.state.inputText}
                                    onChange={this.onTextChange}
                                    className='publication-textarea'
                                />
                                <p>Link(optional):</p>

                                <textarea
                                    rows="1"
                                    cols="30"
                                    value={this.state.link}
                                    onChange={this.onLinkChange}
                                    className='publication-textarea'
                                />
                                <button
                                    className="publication-saveButton"
                                    onClick={this.handleSaveItem}
                                >
                                    Save
                                </button>
                            </div>
                        )
                    }

                    <div className="publication-container">
                        <ol>
                            {
                                publications.slice(0).reverse().map((item) => (

                                    item.link === '' ?
                                        <li key={item.id} className="publication-list-item">{item.content}</li>
                                        :
                                        <a
                                            key={item.id}
                                            alt={item.id}
                                            href={item.link}
                                        >
                                            <li key={item.id} className="publication-list-item">{item.content}</li>
                                        </a>
                                ))
                            }
                        </ol>
                    </div>
                    <h2>U.S. & International Patents</h2>
                    <div className="publication-container">
                        <ol>
                            {
                                publications.slice(0).reverse().map((item) => (

                                    item.link === '' ?
                                        <li key={item.id} className="publication-list-item">{item.content}</li>
                                        :
                                        <a
                                            key={item.id}
                                            alt={item.id}
                                            href={item.link}
                                        >
                                            <li key={item.id} className="publication-list-item">{item.content}</li>
                                        </a>
                                ))
                            }
                        </ol>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    // console.log(state);
    return ({
        // use selector here
        // we always want the filtered result to present
        publications: state.publications,  // have access to it as props
        // filters: state.filters,
    });
};

const mapDispatchToProps = (dispatch) => ({
    // addExpense: (expense) => (dispatch(addExpense(expense))),
    startSetPublications: () => (dispatch(startSetPublications())),
    startAddPublication: (data) => (dispatch(startAddPublication(data)))

});
export default connect(
    // provide information about what we want connect
    // like we might only need a subset of the huge amount of states in store
    mapStateToProps,
    mapDispatchToProps
)(PublicationPage);