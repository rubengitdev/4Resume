import './Navbar.css';

export default function Navbar({ onGoToPage, page }) {
    return (
        <nav className="navbar">
            {/* Input Resume Button */}
            <button
                onClick={() => onGoToPage('content')}
                data-selected={page === 'content'}
            >
                <i className="fa-regular fa-file-lines" />
                Input Resume
            </button>

            {/* Customize Button */}
            <button
                onClick={() => onGoToPage('customize')}
                data-selected={page === 'customize'}
            >
                <i className="fa-solid fa-pen-ruler" />
                Customize
            </button>

            {/* Download Button */}
            <button>
                <i className="fa-solid fa-download" />
                Download
            </button>
        </nav>
    );
}
