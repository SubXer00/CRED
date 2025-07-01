import React, {useState} from "react";
function Cred(){

    const [entries, setEntries] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [ID, setID] = useState(''); 
    const [age, setAge] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [telephone, setTelephone] = useState('');

    const [showConfirm, setShowConfirm] = useState(false);
    const [deleteIndex, setDeleteIndex] = useState(null);
    const [editIndex, setEditIndex] = useState(null);

    const resetFields = () => {
        setFirstName('');
        setLastName('');
        setID('');
        setAge('');
        setEmail('');
        setTelephone('');
    };


    const handleOnSave = () => {
        if (
            !firstName.trim() ||
            !lastName.trim() ||
            !ID.trim() ||
            !age.trim() ||
            !email.trim() ||
            !telephone.trim()
        ) {
            alert("Please fill in all fields before saving.");
            return;
        }
        const newEntry = {
            firstName,
            lastName,
            ID,
            age,
            email,
            telephone,
        }
        setEntries([...entries, newEntry]);

        resetFields();
        
    };

    const handleDelete = (index) => {
        setDeleteIndex(index);
        setShowConfirm(true);
    };

    const confirmDelete = () => {
        const updated = entries.filter((_, i) => i !== deleteIndex);
        setEntries(updated);
        setShowConfirm(false);
        setDeleteIndex(null);
    };

    const cancelDelete = () => {
        setShowConfirm(false);
        setDeleteIndex(null);
    };

    const handleEdit = (index) => {
        const entry = entries[index];
        setFirstName(entry.firstName);
        setLastName(entry.lastName);
        setID(entry.ID);
        setAge(entry.age);
        setEmail(entry.email);
        setTelephone(entry.telephone);
        setEditIndex(index);
    };

    const handleUpdate = () => {
        if (!firstName.trim() || !lastName.trim() || !ID.trim() || !age.trim() || !email.trim() || !telephone.trim()) {
            alert("Please fill in all fields before updating.");
            return;
        }

        const updatedEntry = {
            firstName,
            lastName,
            ID,
            age,
            email,
            telephone,
        };

        const updatedEntries = [...entries];
        updatedEntries[editIndex] = updatedEntry;
        setEntries(updatedEntries);
        setEditIndex(null);
        resetFields();
    };

    return(
            <>
            <div className="container">
                <div id="outputDiv">
                {entries.map((entry, index) => (
                    <div key={index} className="card">
                    <div className="card-content">
                        <div>
                        <p className="details"><strong>Name:</strong> {entry.firstName} {entry.lastName}</p>
                        <p className="details"><strong>ID:</strong> {entry.ID}</p>
                        <p className="details"><strong>Age:</strong> {entry.age}</p>
                        <p className="details"><strong>Email:</strong> {entry.email}</p>
                        <p className="details"><strong>Phone:</strong> {entry.telephone}</p>
                        </div>
                        <div className="card-buttons">
                            <button className="editButton" onClick={() => handleEdit(index)}>Edit</button>
                            <button className="deleteButton" onClick={() => handleDelete(index)}>Delete</button>
                        </div>
                    </div>
                    </div>
                ))}
                </div>

                <div id="inputDiv">
                <input type="text" placeholder="Enter First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                <input type="text" placeholder="Enter Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                <input type="text" placeholder="Enter ID" value={ID} onChange={(e) => setID(e.target.value)} required />
                <input type="text" placeholder="Enter Age" value={age} onChange={(e) => setAge(e.target.value)} required />
                <input type="text" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="tel" placeholder="Enter Phone Number" pattern="[0-9]{10}" value={telephone} onChange={(e) => setTelephone(e.target.value)} required />
                    <div className="button-container">
                        {editIndex === null ? (
                        <button className="save-button" onClick={handleOnSave}>Save</button>
                        ) : (
                        <button className="save-button" onClick={handleUpdate}>Update</button>
                        )}
                    </div>
                </div>
            </div>

            {showConfirm && (
                <div className="confirm-overlay">
                <div className="confirm-box">
                    <p>Are you sure you want to delete?</p>
                    <button onClick={confirmDelete}>Yes</button>
                    <button onClick={cancelDelete}>Cancel</button>
                </div>
                </div>
            )}
        </>
    );
}

export default Cred