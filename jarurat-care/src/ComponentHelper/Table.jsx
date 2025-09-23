import '../CSS/Table.css';

export default function Table({ filteredPatients, openModal }) {
    return (
        <div className="table-container col-lg-10 offset-lg-1">
            <table>
                <thead>
                    <tr>
                        <th>Serial Number</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Contact</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredPatients.map((patient, idx) => {
                        return (
                            <tr key={idx}>
                                <td>{idx + 1}</td>
                                <td>{patient.name}</td>
                                <td>{patient.age}</td>
                                <td>{patient.contact}</td>
                                <td><button onClick={() => openModal(patient._id)}>View</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}