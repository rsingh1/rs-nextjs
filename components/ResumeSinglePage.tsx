import React from 'react';
import ProfessionalSummary from './sections/ProfessionalSummary';
import WorkHistory from './sections/WorkHistory';
import Education from './sections/Education';
import ActivitiesInterests from './sections/ActivitiesInterests';
import WebsitesPortfolios from './sections/WebsitesPortfolios';
import Profiles from './sections/Profiles';
import Skills from './sections/Skills';
import Contact from './sections/Contact';

const ResumeSinglePage = () => {
    return (
        <div className="flex flex-col p-6">
            <header className="text-center mb-6">
                <h1 className="text-3xl font-bold">Raghuvendra Singh</h1>
                <h2 className="text-xl">Senior Specialist, Technology</h2>
            </header>
            <ProfessionalSummary />
            <WorkHistory />
            <Education />
            <ActivitiesInterests />
            <WebsitesPortfolios />
            <Profiles />
            <Skills />
            <Contact />
        </div>
    );
};

export default ResumeSinglePage;