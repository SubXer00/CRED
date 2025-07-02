
function OutputList({ entries, handleEdit, handleDelete }) {
    return (
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
  );
}

export default OutputList;
