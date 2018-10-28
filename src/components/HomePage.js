import React from 'react';
import labPeople from '../images/labPeople.jpg';
import labPano from '../images/labPano.jpg';
import cms from '../images/cms.jpg';
import chip from '../images/chip.jpg';
import atlas from '../images/atlas.jpg';
import NewsCard from './NewsCard';
import SimpleExpansionPanel from './SimpleExpansionPanel';

const HomePage = () => (
    <div className="page-header">
        <div className="content-container">
            <div>
                <img
                    alt="group people"
                    src={labPeople}
                    className="page-header__img"
                />
                <div className="dispaly-group-row">
                    <div className="dispaly-group-column">
                        <p className="paragraph-title">About ACE</p>
                        <p className="paragraph">
                            The opto-electronics laboratory was established in 1998 and has been mainly for research and developments (R&D) of optical links for the ATLAS experiment, in particular for the Liquid Argon Calorimeter detector front-end readout. the lab has been equipped through project funds, the major research initiative funds (MRI) of the National Science Foundation and from private donations. Since 2004, we added ASIC R&D capability and have developed the LOC ASIC family for the Phase-1 upgrade program of the ATLAS detector. In ASICs and the related optical module developments, we also collaborate with national and international labs such as the SLAC and CERN in projects such as the lpGBT and the Versatile Link.
                        </p>
                        <img
                            alt="group people"
                            src={labPano}
                            className="page-header__img"
                        />
                        <SimpleExpansionPanel />
                    </div>
                    <div className="dispaly-group-column">
                        <p className="paragraph-title">What's happening...</p>
                        <NewsCard img={chip} />
                        <NewsCard img={cms} />
                        <NewsCard img={atlas} />
                    </div>
                </div>
            </div>
        </div>
    </div>
);


export default HomePage;
