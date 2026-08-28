import './PersonalInfoSection.css';

function PersonalInfoSection({
    email,
    fullName,
    position,
    phoneNumber,
    address,
}) {
    const isEmpty =
        !fullName && !position && !email && !phoneNumber && !address;

    if (isEmpty) {
        return (
            <div className="personal-info">
                <p class="preview-placeholder">Preview Resume</p>
            </div>
        );
    }

    return (
        <div className="personal-info">
            <h1 className="resume-name">{fullName}</h1>
            <h4 className="position">{position}</h4>
            <div className="contact-info">
                {email && (
                    <div>
                        <i className="fa-solid fa-envelope" />
                        <span>{email}</span>
                    </div>
                )}

                {phoneNumber && (
                    <div>
                        <i className="fa-solid fa-phone" />
                        <span>{phoneNumber}</span>
                    </div>
                )}

                {address && (
                    <div>
                        <i className="fa-solid fa-location-dot" />
                        <span>{address}</span>
                    </div>
                )}
            </div>
        </div>
    );
}

export default PersonalInfoSection;
