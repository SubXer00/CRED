
import React, { useState } from "react";
import InputForm from "./InputForm.jsx";
import OutputList from "./OutputList.jsx";
import ConfirmBox from "./ConfirmBox.jsx";

function Crud() {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        ID: '',
        age: '',
        email: '',
        telephone: '',
    });

    const [entries, setEntries] = useState([]);
    const [showConfirm, setShowConfirm] = useState(false);
    const [deleteIndex, setDeleteIndex] = useState(null);
    const [editIndex, setEditIndex] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prev => ({ ...prev, [name]: value }));
    };

    const resetFields = () => {
        setUser({
            firstName: '',
            lastName: '',
            ID: '',
            age: '',
            email: '',
            telephone: '',
        });
    };

    const handleOnSave = () => {
        const { firstName, lastName, ID, age, email, telephone } = user;
        if (!firstName || !lastName || !ID || !age || !email || !telephone) {
            alert("Please fill in all fields before saving.");
            return;
        }
        setEntries([...entries, user]);
        resetFields();
    };

    const handleEdit = (index) => {
        setUser(entries[index]);
        setEditIndex(index);
    };

    const handleUpdate = () => {
        const { firstName, lastName, ID, age, email, telephone } = user;
        if (!firstName || !lastName || !ID || !age || !email || !telephone) {
            alert("Please fill in all fields before updating.");
        return;
        }

        const updatedEntries = [...entries];
        updatedEntries[editIndex] = user;
        setEntries(updatedEntries);
        setEditIndex(null);
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

    return (
        <div className="container">
            <OutputList entries={entries} handleEdit={handleEdit} handleDelete={handleDelete} />

            <InputForm
                user={user}
                handleChange={handleChange}
                handleOnSave={handleOnSave}
                handleUpdate={handleUpdate}
                editIndex={editIndex}
            />

            {showConfirm && (
                <ConfirmBox confirmDelete={confirmDelete} cancelDelete={cancelDelete} />
            )}
        </div>
    );
}

export default Crud;
