import './Customize.css';
import AccentColorEdit from './AccentColorEdit/AccentColorEdit.js';
import FontEdit from './FontEdit/FontEdit.js';
import ResumeColsEdit from './ResumeColsEdit/ResumeColsEdit.js';

export default function Customize({ isShown, onColChange }) {
    return (
        <div
            className="customize"
            style={{ display: isShown ? undefined : 'none' }}
        >
            <div>
                <ResumeColsEdit onColChange={onColChange} />
            </div>
            <div>
                <AccentColorEdit />
            </div>
            <div>
                <FontEdit />
            </div>
        </div>
    );
}
