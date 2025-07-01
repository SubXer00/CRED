import React from "react";
function ConfirmBox({ confirmDelete, cancelDelete }) {
    return (
        <div className="confirm-overlay">
            <div className="confirm-box">
                <p>Are you sure you want to delete?</p>
                <button onClick={confirmDelete}>Yes</button>
                <button onClick={cancelDelete}>Cancel</button>
            </div>
        </div>
    );
}

export default ConfirmBox;
