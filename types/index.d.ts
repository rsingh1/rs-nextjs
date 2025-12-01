interface WorkExperience {
    jobTitle: string;
    company: string;
    startDate: string;
    endDate: string;
    responsibilities: string[];
}

interface Education {
    degree: string;
    institution: string;
    graduationYear: number;
}

interface Activity {
    name: string;
    description: string;
}

interface WebsitePortfolio {
    title: string;
    url: string;
}

interface Profile {
    platform: string;
    url: string;
}

interface Skill {
    name: string;
    level: 'beginner' | 'intermediate' | 'advanced';
}

interface Contact {
    name: string;
    email: string;
    message: string;
}

interface ResumeData {
    professionalSummary: string;
    workHistory: WorkExperience[];
    education: Education[];
    activities: Activity[];
    websites: WebsitePortfolio[];
    profiles: Profile[];
    skills: Skill[];
    contact: Contact;
}