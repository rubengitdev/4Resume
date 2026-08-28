import InputGroup from '../../Common/InputGroup/InputGroup.js';
import Buttons from '../../Common/Buttons/Buttons.js';

function EducationForm(props) {
    const { degree, schoolName, location, startDate, endDate, id } = props.form;
    const { onChange, cancel, save, remove } = props;

    return (
        <form
            className="education-form section-form"
            id={id}
            data-array-name="educations"
            onSubmit={(e) => e.preventDefault()}
        >
            <InputGroup
                type="text"
                id="school-name"
                labelText="School"
                placeholder="e.g. Harvard University"
                value={schoolName}
                onChange={onChange}
                data-key="schoolName"
            />
            <InputGroup
                type="text"
                id="degree"
                labelText="Degree"
                placeholder="e.g. Bachelor of Science in Computer Science"
                value={degree}
                onChange={onChange}
                data-key="degree"
            />
            <div className="dates-group">
                <InputGroup
                    type="text"
                    id="date"
                    labelText="Start Date"
                    placeholder="e.g. September 2020"
                    value={startDate}
                    onChange={onChange}
                    data-key="startDate"
                />
                <InputGroup
                    type="text"
                    id="date"
                    labelText="End Date"
                    placeholder="e.g. June 2026"
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
                optional
            />

            <Buttons save={save} cancel={cancel} remove={remove} />
        </form>
    );
}

export default EducationForm;
