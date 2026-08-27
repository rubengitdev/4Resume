import InputGroup from '../InputGroup';
import '../../styles/PersonalDetails.css';

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
                placeholder="First and last name"
                value={fullName}
                onChange={onChange}
                data-key="fullName"
            />
            <InputGroup
                type="text"
                id="position"
                labelText="Position"
                placeholder="Desired Position"
                value={position}
                onChange={onChange}
                data-key="position"
            />
            <InputGroup
                type="email"
                id="email"
                labelText="Email"
                placeholder="Enter email"
                value={email}
                onChange={onChange}
                data-key="email"
                recommended
            />
            <InputGroup
                type="tel"
                id="phone-number"
                labelText="Phone number"
                placeholder="Enter phone number"
                value={phoneNumber}
                onChange={onChange}
                data-key="phoneNumber"
                recommended
            />
            <InputGroup
                type="text"
                id="address"
                labelText="Address"
                placeholder="City, Country"
                value={address}
                onChange={onChange}
                data-key="address"
                recommended
            />
        </form>
    );
}
export default PersonalDetails;
