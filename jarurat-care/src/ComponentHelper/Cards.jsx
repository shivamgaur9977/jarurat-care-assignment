import '../CSS/Cards.css';

export default function Cards({ filteredPatients, openModal }) {
    return (
        <div className='cards col-lg-10 offset-lg-2'>
            {filteredPatients.map((patient, idx) => {
                return (
                    <div className="card" key={idx}>
                        <div className="card-body">
                            <h5 className="card-title">Patient Name: {patient.name}</h5>
                            <p className="card-text">Patient Age: {patient.age}</p>
                            <p className="card-text">Patient Contact: {patient.contact}</p>
                            <a href="#" className="btn btn-primary" onClick={() => openModal(patient._id)}>View</a>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}