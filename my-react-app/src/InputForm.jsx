

function InputForm({ user, handleChange, handleOnSave, handleUpdate, editIndex }) {
    return (
        <div id="inputDiv">
            <input type="text" name="firstName" placeholder="Enter First Name" value={user.firstName} onChange={handleChange} />
            <input type="text" name="lastName" placeholder="Enter Last Name" value={user.lastName} onChange={handleChange} />
            <input type="text" name="ID" placeholder="Enter ID" value={user.ID} onChange={handleChange} />
            <input type="text" name="age" placeholder="Enter Age" value={user.age} onChange={handleChange} />
            <input type="text" name="email" placeholder="Enter Email" value={user.email} onChange={handleChange} />
            <input type="tel" name="telephone" placeholder="Enter Phone Number" value={user.telephone} onChange={handleChange} />

            <div className="button-container">
                {editIndex === null ? (
                    <button className="save-button" onClick={handleOnSave}>Save</button>
                    ) : (
                    <button className="save-button" onClick={handleUpdate}>Update</button>
                )}
            </div>
        </div>
    );
}

export default InputForm;
