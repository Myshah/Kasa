import { useState } from "react";
import "./collapse.scss"

function Collapse({ id, title, content }) {
    const [isOpen, setOpen] = useState(false);

    const contentDetail = Array.isArray(content)
        ? (<ul>{content.map((item, idx) => <li key={idx}>{item}</li>)}</ul>)
        : content;

    return (
        <div className="collapseElement">
            <div className="collapseTitle" onClick={() => setOpen(!isOpen)}>
                <p>{title}</p>
                <i
                    className={`fa fa-solid fa-chevron-up arrow${isOpen ? " open" : ""}`}
                    aria-hidden="true"
                ></i>
            </div>
            <div
                aria-hidden={!isOpen}
                className={`collapseContent${isOpen ? " open" : ""}`}
            >
                {contentDetail}
            </div>
        </div>
    );
}

export default Collapse;