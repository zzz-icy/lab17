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

            <PeopleExpansionPanel
                img={yejb}
                name="Ye, Jingbo"
                title="Professor of Experimental Physics"
                mobile="(214)768-2114"
                email="yejb@smu.edu"
            />
            <PeopleExpansionPanel
                img={gong}
                name="Gong, Datao"
                title="Professor of Experimental Physics"
                mobile="(214)768-2114"
                email="yejb@smu.edu"
            />
            <PeopleExpansionPanel
                img={liu}
                name="Liu, Tiankuan (Andy)"
                title="Professor of Experimental Physics"
                mobile="(214)768-2114"
                email="yejb@smu.edu"
            />
            <PeopleExpansionPanel
                img={kentl}
                name="Liu, Chonghan (Kent)"
                title="Professor of Experimental Physics"
                mobile="(214)768-2114"
                email="yejb@smu.edu"
            />
            <PeopleExpansionPanel
                img={axiang}
                name="Xiang, Annie"
                title="Professor of Experimental Physics"
                mobile="(214)768-2114"
                email="yejb@smu.edu"
            />
            <PeopleExpansionPanel
                img={quans}
                name="Sun, Quan"
                title="Senior Research Associate"
                mobile="(469)450-6859"
                email="quans@smu.edu"
            />
            <PeopleExpansionPanel
                img={guo}
                name="Guo, Di"
                title="Professor of Experimental Physics"
                mobile="(214)768-2114"
                email="yejb@smu.edu"
            />

        </div>
    </div>
);


export default PeoplePage;