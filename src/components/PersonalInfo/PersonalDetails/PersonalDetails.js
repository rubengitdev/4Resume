import InputGroup from '../../Common/InputGroup/InputGroup.js';
import './PersonalDetails.css';

function PersonalDetails({
    onChange,
    email,
    position,
    fullName,
    phoneNumber,
    address,
}) {
    return (
        <form className="personal-details">
            <h2>Personal Details</h2>
            <InputGroup
                type="text"
                id="full-name"
                labelText="Full name"
                placeholder="e.g. John Doe"
                value={fullName}
                onChange={onChange}
                data-key="fullName"
            />
            <InputGroup
                type="text"
                id="position"
                labelText="Position"
                placeholder="e.g. Software Developer"
                value={position}
                onChange={onChange}
                data-key="position"
                recommended
            />
            <InputGroup
                type="email"
                id="email"
                labelText="Email"
                placeholder="e.g. john.doe@example.com"
                value={email}
                onChange={onChange}
                data-key="email"
                recommended
            />
            <InputGroup
                type="tel"
                id="phone-number"
                labelText="Phone number"
                placeholder="e.g. +1 234 567 8910"
                value={phoneNumber}
                onChange={onChange}
                data-key="phoneNumber"
                recommended
            />
            <InputGroup
                type="text"
                id="address"
                labelText="Address"
                placeholder="e.g. Jakarta, IDN"
                value={address}
                onChange={onChange}
                data-key="address"
                recommended
            />
        </form>
    );
}
export default PersonalDetails;
