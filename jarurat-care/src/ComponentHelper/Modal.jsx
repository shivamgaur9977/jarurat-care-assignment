import '../CSS/Modal.css';

export default function Modal({ modalData, setIsOpen }) {

    let closeModal = () => {
        setIsOpen(false);
    }
    return (
        // < !--Modal -- >
        <div id="myModal" className="modal">
            <div className="modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
                <h3>Patient Details</h3>
                <p><strong>Name:</strong> {modalData.name}</p>
                <p><strong>Age:</strong> {modalData.age}</p>
                <p><strong>Contact:</strong> {modalData.contact}</p>
                <p><strong>Disease:</strong> {modalData.disease}</p>
                <p><strong>Treatment:</strong> {modalData.treatment}</p>
                <p><strong>Treatment by:</strong> {modalData.doctorName}</p>
            </div>
        </div>
    )
}