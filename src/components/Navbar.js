import { Link } from 'react-router-dom'

export default function Navbar (props) {
  const showModal = () => {
    props.setAddModal(true)
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{padding: 20}}>
      <div className="container-fluid">
        <button className="navbar-brand btn">Simple Contact</button>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link active"><strong>Home</strong></Link>
            </li>
            <li className="nav-item">
              <button className="btn" style={{color: "#fff"}} onClick={showModal}><strong>Create</strong></button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}