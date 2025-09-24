import { Link } from "react-router-dom";
import Navbar from "../ComponentHelper/Navbar";

export default function NotFound() {
    return (
        <>
        <Navbar/>
            <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light text-center">
                <h1 className="display-1 fw-bold text-danger">404</h1>
                <p className="fs-3">
                    <span className="text-danger">Oops!</span> Page not found.
                </p>
                <p className="lead mb-4">
                    The page you’re looking for doesn’t exist or has been moved.
                </p>
                <Link to="/" className="btn btn-primary btn-lg shadow">
                    Go Back Home
                </Link>
            </div>
        </>
    );
}