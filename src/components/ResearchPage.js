import React from 'react';
import project1 from '../images/research/project1.jpg';
import project2 from '../images/research/project2.jpg';

import atlas from '../images/atlas.jpg';
import ResearchItem from './ResearchItem';
const ResearchPage = () => (
    <div className="page-header">
        <div className="content-container">
            <h1>Research</h1>
            <ResearchItem img={project1} />
            <ResearchItem img={atlas} />
            <ResearchItem img={project2} />
            <ResearchItem img={project1} />

        </div>
    </div>
);


export default ResearchPage;