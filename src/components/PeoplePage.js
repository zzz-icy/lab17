import React from 'react';
import PeopleExpansionPanel from './PeopleExpansionPanel';
import quans from '../images/peoplePhoto/quans.png';
import yejb from '../images/peoplePhoto/yejb.png';

const PeoplePage = () => (
    <div className="page-header">
        <div className="content-container">
            <PeopleExpansionPanel
                img={quans}
                name="Sun, Quan"
                title="Senior Research Associate"
                mobile="(469)450-6859"
                email="quans@smu.edu"
            />
            <PeopleExpansionPanel
                img={yejb}
                name="Ye, Jingbo"
                title="Professor of Experimental Physics"
                mobile="(214)768-2114"
                email="yejb@smu.edu"
            />

        </div>
    </div>
);


export default PeoplePage;