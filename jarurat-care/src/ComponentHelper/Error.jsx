export default function Error({ error }) {
    return (
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
            {error}.
        </div>
    )
}