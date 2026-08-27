import './Resume.css';
import PersonalInfoSection from '../PersonalInfo/PersonalInfoSection/PersonalInfoSection.js';
import EducationInfoSection from '../Education/EducationInfoSection/EducationInfoSection.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ExperienceInfoSection from '../Experience/ExperienceInfoSection.js';

function Resume({ personalInfo, sections, layout }) {
    return (
        <div className="resume-container">
            <div className={`resume ${layout}`}>
                <PersonalInfoSection
                    fullName={personalInfo.fullName}
                    position={personalInfo.position}
                    email={personalInfo.email}
                    phoneNumber={personalInfo.phoneNumber}
                    address={personalInfo.address}
                />
                <div>
                    <EducationInfoSection educations={sections.educations} />
                    <ExperienceInfoSection experiences={sections.experiences} />
                </div>
            </div>
        </div>
    );
}

export default Resume;
