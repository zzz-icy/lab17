import React from 'react';

class PublicationPage extends React.Component {

    state = {
        publicationArray1: [
            {
                key: 1,
                content:
                    'Goel, M., Saba, E., Stiber, M., Whitmire, E., Fromm, J., Larson, E. C., Borriello, G., & Patel, S. N. (2016). SpiroCall: Measuring Lung Function over a Phone Call.. Paper presented at the CHI.'
            }, {
                key: 2,
                content:
                    'Larson, E. C., Saba, E., Kaiser, S., Goel, M., & Patel, S. N. (2016). Pulmonary Monitoring Using Smartphones (Vol. 1) editors James M. Rehg, Susan A. Murphy, & Santosh Kumar.'
            }

        ],
        editting: false,
        inputText: ''
    }
    handleAddItem = () => {
        this.setState(() => ({ editting: true }))
    }
    handleSaveItem = () => {
        const length = this.state.publicationArray1.length;
        this.setState(() => ({ editting: false }));
        this.state.publicationArray1.unshift({
            key: length + 1,
            content: this.state.inputText,
        });
    }
    onTextChange = (e) => {
        this.setState({
            inputText: e.target.value
        });
    }
    render() {
        const pubArr1 = this.state.publicationArray1;
        // console.log(pubArr1);
        return (
            <div className="page-header">
                <div className="content-container">
                    <h2>U.S. & International Patents</h2>
                    <button onClick={this.handleAddItem}>Add item</button>
                    {
                        this.state.editting
                        &&
                        (
                            <div className='edit-group'>
                                <textarea
                                    rows="2"
                                    cols="30"
                                    value={this.state.inputText}
                                    onChange={this.onTextChange}
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
                                pubArr1.map((item) => (
                                    <li key={item.key} className="publication-list-item">{item.content}</li>
                                ))
                            }
                        </ol>
                    </div>
                    <h2>Publications</h2>
                    <div className="publication-container">
                        <ol>
                            {
                                pubArr1.map((item) => (
                                    <li key={item.key} className="publication-list-item">{item.content}</li>
                                ))
                            }
                        </ol>
                    </div>
                </div>
            </div>
        );
    }

}




export default PublicationPage;