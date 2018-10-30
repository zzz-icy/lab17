import React from 'react';
import PeopleExpansionPanel from './PeopleExpansionPanel';
import quans from '../images/peoplePhoto/quans.png';
import yejb from '../images/peoplePhoto/yejb.png';
import gong from '../images/peoplePhoto/gong.png';
import liu from '../images/peoplePhoto/liu.png';
import kentl from '../images/peoplePhoto/kentl.png';
import axiang from '../images/peoplePhoto/axiang.png';
import guo from '../images/peoplePhoto/guo.jpg';




const PeoplePage = () => (
    <div className="page-header">
        <div className="content-container">
            <h2 className="peoplePage-title">Current Group Member</h2>
            <PeopleExpansionPanel
                id={1}
                img={yejb}
                name="Ye, Jingbo"
                title="Professor of Experimental Physics"
                mobile="(214)768-2114"
                email="yejb@smu.edu"
            />
            <PeopleExpansionPanel
                id={2}
                img={gong}
                name="Gong, Datao"
                title="Research Assistant Professor"
                mobile="(214)768-1472"
                email="dtgong@smu.edu"
            />
            <PeopleExpansionPanel
                id={3}
                img={liu}
                name="Liu, Tiankuan (Andy)"
                title="Research Associate Professor"
                mobile="(214)768-1472"
                email="liu@smu.edu"
            />
            <PeopleExpansionPanel
                id={4}
                img={kentl}
                name="Liu, Chonghan (Kent)"
                title="Research Associate Professor"
                mobile="(214)768-1472"
                email="kentl@smu.edu"
            />
            <PeopleExpansionPanel
                id={5}
                img={quans}
                name="Sun, Quan"
                title="Senior Research Associate"
                mobile="(469)450-6859"
                email="quans@smu.edu"
            />
            <h2 className="peoplePage-title">Current Visiting Scholars</h2>

            <PeopleExpansionPanel
                img={axiang}
                name="Xiang, Annie"
                title="Research Associate Professor"
                mobile="(214)768-1472"
                email="cxiang@smu.edu"
            />

            <h2 className="peoplePage-title">Previous Group Member</h2>

            <PeopleExpansionPanel
                img={axiang}
                name="Xiang, Annie"
                title="Research Associate Professor"
                mobile="(214)768-1472"
                email="cxiang@smu.edu"
            />

            <PeopleExpansionPanel
                img={guo}
                name="Guo, Di"
                title="Postdoctoral Researcher"
                mobile="(214)768-1472"
                email="dig@smu.edu"
            />
        </div>
    </div>
);


export default PeoplePage;