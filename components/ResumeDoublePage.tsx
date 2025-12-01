import React from 'react';
import ProfessionalSummary from './sections/ProfessionalSummary';
import WorkHistory from './sections/WorkHistory';
import Education from './sections/Education';
import ActivitiesInterests from './sections/ActivitiesInterests';
import WebsitesPortfolios from './sections/WebsitesPortfolios';
import Profiles from './sections/Profiles';
import Skills from './sections/Skills';
import Contact from './sections/Contact';

const ResumeDoublePage = () => {
    return (
        <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-4">
                <ProfessionalSummary />
                <WorkHistory />
                <Education />
            </div>
            <div className="md:w-1/2 p-4">
                <ActivitiesInterests />
                <WebsitesPortfolios />
                <Profiles />
                <Skills />
                <Contact />
            </div>
        </div>
    );
};

export default ResumeDoublePage;