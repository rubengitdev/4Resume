import InputGroup from '../Common/InputGroup/InputGroup.js';
import Buttons from '../Common/Buttons/Buttons.js';

function ExperienceForm(props) {
    const {
        companyName,
        positionTitle,
        location,
        description,
        startDate,
        endDate,
        id,
    } = props.form;

    const { onChange, cancel, save, remove } = props;

    return (
        <form
            className="experience-form section-form"
            id={id}
            data-array-name="experiences"
            onSubmit={(e) => e.preventDefault()}
        >
            <InputGroup
                type="text"
                id="company-name"
                labelText="Company Name"
                placeholder="e.g. Microsoft INC"
                value={companyName}
                onChange={onChange}
                data-key="companyName"
            />
            <InputGroup
                type="text"
                id="position-title"
                labelText="Position Title"
                placeholder="e.g. Junior Software Developer"
                value={positionTitle}
                onChange={onChange}
                data-key="positionTitle"
            />
            <div className="dates-group">
                <InputGroup
                    type="text"
                    id="date"
                    labelText="Start Date"
                    placeholder="e.g. January 2020"
                    value={startDate}
                    onChange={onChange}
                    data-key="startDate"
                />
                <InputGroup
                    type="text"
                    id="date"
                    labelText="End Date"
                    placeholder="e.g. August 2021"
                    value={endDate}
                    onChange={onChange}
                    data-key="endDate"
                />
            </div>
            <InputGroup
                type="text"
                id="location"
                labelText="Location"
                placeholder="e.g. New York, NY"
                value={location}
                onChange={onChange}
                data-key="location"
            />
            <InputGroup
                type="textarea"
                id="description"
                labelText="Description"
                placeholder="e.g. Collaborated with a team of 5 engineers to build software ..."
                value={description}
                onChange={onChange}
                data-key="description"
            />
            <Buttons save={save} cancel={cancel} remove={remove} />
        </form>
    );
}

export default ExperienceForm;
