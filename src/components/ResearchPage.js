import React from 'react';
import project1 from '../images/research/project1.jpg';
import project2 from '../images/research/project2.jpg';
import cern from '../images/CERN_logo.png';
import atlas from '../images/atlas.jpg';
import fermilab from '../images/FNAL-Logo-Black.jpg';
import atlasus from '../images/usatlas_logo.png';
import ResearchItem from './ResearchItem';
const ResearchPage = () => (
    <div className="page-header">
        <div className="content-container">
            <h1>Research</h1>
            <ResearchItem img={project1} />
            <ResearchItem img={atlas} />
            <ResearchItem img={project2} />
            <h3>Current and Past Research Sponsors</h3>
            <div className="sponsor-group">
                <img src={cern} alt="cern" className="sponsor-img" />
                <img src={fermilab} alt="fermilab" className="sponsor-img" />
                <img src={atlasus} alt="atlas" className="sponsor-img" />
            </div>

        </div>
    </div>
);


export default ResearchPage;