import '../CSS/Patients.css';
import { useEffect, useState } from "react"
import axios from "axios";
import Cards from '../ComponentHelper/Cards';
import Table from '../ComponentHelper/Table';
import Modal from '../ComponentHelper/Modal';
import Navbar from '../ComponentHelper/Navbar';
import Loader from '../ComponentHelper/Loader';
import Error from '../ComponentHelper/Error';

export default function Patients({ allPatients, setAllPatients, setIsFetched, isFetched }) {

    let [query, setQuery] = useState("");
    let [filteredPatients, setFilteredPatients] = useState([]);
    let [isOpen, setIsOpen] = useState(false);
    let [modalData, setModalData] = useState();
    let [layout, setLayout] = useState("table");
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState("");
    let [sucessMsg, setSucessMsg] = useState("")

    useEffect(() => {
        let getAllUsers = async () => {
            setLoading(true);
            try {
                let res = await axios.get("http://localhost:8080/patients");
                setAllPatients(res.data);
                setIsFetched(true);
                setLoading(false);
            } catch (err) {
                setLoading(false);
                console.log(err)
                setError(err.message);
                return err;
            }
        }
        if (!isFetched) {
            getAllUsers();
        }
    }, []);

    let handleSearchQuery = (e) => {
        let query = e.target.value;
        setQuery(query);
    };

    useEffect(() => {
        if (allPatients) {
            // Filtered patients based on query
            const filteredPatients = allPatients.filter(patient =>
                patient.name.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredPatients(filteredPatients);
            if (!query) {
                setFilteredPatients(allPatients);
            }
        };
    }, [query, allPatients]);

    let openModal = (id) => {
        let modalData = allPatients.filter((patient) => patient._id === id);
        setModalData(modalData[0]);
        setIsOpen(true);
    };

    let handleLayout = (layout) => {
        setLayout(layout);
    }

    return (
        <>
            <Navbar />
            <div>
                {error && <Error error={error} />}
                <div className='patient-container'>
                    <input className='mt-3 mb-3 search-bar col-8 offset-2 rounded-5 px-4 py-2' placeholder="Search Patient Name" name="query" onChange={handleSearchQuery} />
                    <div className='layout'>
                        <h2>Patients</h2>
                        <div className='layout-icons'>
                            <i className="fa-solid fa-table fa-lg" onClick={() => handleLayout("table")} style={{ color: layout == "table" ? '#04509c' : 'black' }}></i>
                            <i className="fa-solid fa-grip fa-lg" onClick={() => handleLayout("grid")} style={{ color: layout == "grid" ? '#04509c' : 'black' }}></i>
                        </div>
                    </div>
                    {filteredPatients && layout == "table" && <Table filteredPatients={filteredPatients} openModal={openModal} />}
                    {filteredPatients && layout == "grid" && <Cards filteredPatients={filteredPatients} openModal={openModal} />}
                </div>
            </div>
            {isOpen && <Modal modalData={modalData} setIsOpen={setIsOpen} />}
            {loading && <Loader loading={loading} />}
        </>
    )
}