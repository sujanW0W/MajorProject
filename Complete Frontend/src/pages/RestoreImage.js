import React, { useContext, useEffect, useState } from "react";
import { PathContext } from "../components/UserContext";
import "./RestoreImage.css";
import axios from "axios";

export const RestoreImage = () => {
    const { imagePath } = useContext(PathContext);
    const [restore, setRestore] = useState(null);
    const [buttonText, setButtonText] = useState("Restore");

    const URL = "http://localhost:5000/api/v1/images/restoration";
    const payload = {
        imagePath,
    };

    const restoreImage = async () => {
        setButtonText("Loading...");
        const restoredPath = await axios.post(URL, payload, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        setRestore(restoredPath.data);
    };

    return (
        <div className="restoreOuterDiv">
            <div className="restoreInsideDiv">
                {restore === null ? (
                    <button className="restoreButton" onClick={restoreImage}>
                        {buttonText}
                    </button>
                ) : (
                    <div className="imageDiv">
                        <img src={`/resultImages/${restore}`} alt="NA" />
                        <a
                            type="button"
                            className="downloadAnchor"
                            href={`/resultImages/${restore}`}
                            download={`${restore}.jpg`}
                        >
                            Download
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};
