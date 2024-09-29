import { Button, Card, Form, FormGroup, Row } from "react-bootstrap";
import { useState } from "react"; 

const NewEvent = ({ addEvent }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [location, setLocation] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    // const [errors, setErrors] = useState({});
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!title || !description || !location || !price){
            alert("Por favor complete todos los campos.");
        }

        const newEvent = {
            title,
            description,
            location,
            price
        }

        addEvent(newEvent);

        setTitle("");
        setDescription("");
        setDate("");
        setLocation("");
        setCategory("");
        setPrice("");
        alert("Evento creado con éxito");
    }

    //AGREGAR LOS REFS A LOS INPUTS
    return (
        <div className="d-flex flex-column align-items-center">
            <Card className="mt-5 mx-5 p-5 shadow d-flex flex-column">
                <Card.Body>
                    <Row className="justify-content-center">
                        <h1>Crear nuevo evento</h1>
                        <p>Complete los detalles para crear un nuevo evento</p>
                    </Row>
                    <Form className="mt-5" onSubmit={handleSubmit}>
                        <FormGroup>
                            <Form.Label>Título del evento</Form.Label>
                            <Form.Control
                            value={title}
                            type="text"
                            required
                            placeholder="Ingrese el título del evento"
                            onChange={(e) => setTitle(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup className="mt-3">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control
                            value={description}
                            as="textarea"
                            required
                            placeholder="Describa el evento"
                            onChange={(e) => setDescription(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup className="mt-3">
                            <Form.Label>Ubicación</Form.Label>
                            <Form.Control
                            value={location}
                            type="text"
                            required
                            placeholder="Ingrese la ubicación"
                            onChange={(e) => setLocation(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup className="mt-3">
                            <Form.Label>Precio</Form.Label>
                            <Form.Control
                            value={price}
                            type="number"
                            required
                            placeholder="$ 0.00"
                            onChange={(e) => setPrice(e.target.value)}
                            />
                        </FormGroup>
                            <Button type="submit" className="mt-5">
                                Crear Evento
                            </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default NewEvent;