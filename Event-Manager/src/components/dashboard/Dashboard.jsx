import { Card } from "react-bootstrap";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import './Dashboard.css';

const Dashboard = ({ events }) => {
    return (
    <div>
        <Navbar/>
        <div className="d-flex">
            <Sidebar/>
            <div className="content">
                <h1>Eventos disponibles</h1>
                {events.length > 0 ? (
                    events.map((event, index) => (
                        <Card key={index} className="my-3">
                            <Card.Body>
                                <Card.Title>{event.title}</Card.Title>
                                <Card.Text>{event.description}</Card.Text>
                                <Card.Text>{event.location}</Card.Text>
                                <Card.Text>${event.price}</Card.Text>
                            </Card.Body>
                        </Card>
                    ) 
                )) : (<h2>No hay eventos disponibles</h2>)}
            </div>
        </div>
    </div>
    )
}

export default Dashboard;