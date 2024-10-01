import { useRef, useState } from "react";
import { Button, Card, Form, FormGroup, Row } from
    "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './Login.css'

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({
        email: false,
        password: false,
    });

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const navigate = useNavigate();

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
        setErrors(prevErrors => ({
            ...prevErrors,
            email: event.target.value.length === 0
        }));
    };

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
        setErrors(prevErrors => ({
            ...prevErrors,
            password: event.target.value.length === 0
        }));
    };

    const handleLogin = () => {
        if (emailRef.current.value.length === 0) {
            alert("¡Email vacío!");
            emailRef.current.focus();   
            setErrors(prevErrors => ({
                ...prevErrors,
                email: true
            }));
            return;
        }

        if (password.length === 0) {
            alert("¡Password vacío!");
            passwordRef.current.focus();
            setErrors(prevErrors => ({
                ...prevErrors,
                password: true
            }));
            return;
        }
        onLogin();
        navigate("/");
    };

    return (
        <div className="d-flex flex-column align-items-center">

        <Card className="mt-5 mx-5 p-5 shadow login-container d-flex flex-column align-items-center">
            <Card.Body>
                <Row className="justify-content-center">
                    <h1 className="text-center form-title">Iniciar Sesión</h1>
                    <p className="text-center mt-2 text text-secondary">Ingresa tus credenciales para acceder a tu cuenta</p>
                </Row>
                <Form className="mt-5">
                <FormGroup className="mb-4">
                        <Form.Label>Correo Electrónico</Form.Label>
                        <Form.Control 
                        ref={emailRef}
                        value={email}
                        onChange={handleChangeEmail}
                        type="email"
                        required
                        placeholder="francocaivano2002@gmail.com"/>
                            {errors.email && <Form.Text className="text-danger">Debe ingresar un email</Form.Text>}
                    </FormGroup>
                    <FormGroup className="mb-4">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control 
                        ref={passwordRef}
                        value={password}
                        onChange={handleChangePassword}
                        type="password"
                        required
                        placeholder="!(1234)"/>
                        {errors.password && <Form.Text className="text-danger">Debe ingresar una contraseña</Form.Text>}
                    </FormGroup>
                    <Button id="form-button" onClick={handleLogin} className="w-100 p-2 border border-dark">Iniciar Sesión</Button>
                </Form>

            </Card.Body>
        </Card>
        </div>
    );
};
export default Login;