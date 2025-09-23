import { useEffect, useState } from "react";
import FormField from "../ComponentHelper/FormField";
import validation from "../JSHelperFiles/Validate";
import Navbar from "../ComponentHelper/Navbar";
import { useNavigate } from "react-router-dom";

export default function AddPatient({setAllPatients}) {
    let navigate = useNavigate();

    let [newPatient, setNewPatients] = useState({name: "", age: 0, doctorName: "", contact: "", disease: "", treatment: ""});

    useEffect(() => {
        validation();
    }, []);

    let handleChange = (e) => {
        let fieldName = e.target.name;
        let fieldValue = e.target.value;
        setNewPatients((prevData) => {
            return {...prevData, [fieldName]: fieldValue};
        });
    };

    let handleSubmit = (e) => {
        e.preventDefault();
        setAllPatients((prevData) => {
            return [...prevData, newPatient];
        });
        navigate("/patients");
    }


    return (
        <>
            <Navbar />
            <div className="col-8 offset-2 mt-4">
                <h3 className="mb-4">Add New Patient</h3>
                <form className="needs-validation" noValidate onSubmit={handleSubmit}>
                    <FormField name={"name"} label={"Patient Name"} type={"text"} placeholder={"Enter Patient Name"} value={newPatient.name} handleChange={handleChange}/>
                    <FormField name={"age"} label={"Age"} type={"number"} placeholder={"Enter Patient's Age"} value={newPatient.age} handleChange={handleChange}/>
                    <FormField name={"contact"} label={"Contact "} type={"text"} placeholder={"Contact details"} value={newPatient.contact} handleChange={handleChange}/>
                    <FormField name={"disease"} label={"Disease"} type={"text"} placeholder={"Enter Disease"} value={newPatient.disease} handleChange={handleChange}/>
                    <FormField name={"treatment"} label={"Treatment"} type={"text"} placeholder={"Treatment"} value={newPatient .treatment} handleChange={handleChange}/>
                    <FormField name={"doctorName"} label={"Treatment By"} type={"text"} placeholder={"Enter Doctor's Name"} value={newPatient.doctorName} handleChange={handleChange}/>
                    <button className="btn btn-primary mt-3 mb-3" type="submit">Add Patient</button>
                </form>
            </div>
        </>
    )
}