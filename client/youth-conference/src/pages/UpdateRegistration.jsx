import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateRegistration = () => {
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        gender: '',
        city: '',
        education: ''
    });
    const params = useParams();
    const fetchData = async () => {
        const response = await axios.get(`http://localhost:3000/api/registration/${params.id}`)
        setFormData(response.data.registration)
    }
    useEffect(() => {
        fetchData();
    }, [])

    const { name, contact, gender, city, education } = formData;
    const navigate = useNavigate();
    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:3000/api/registration/${params.id}`, formData);
            if (response.data.success) {
                toast.success(response.data.message);
                navigate('/list');
            }
        } catch (error) {
            console.error('Error during update:', error);
            toast.error('Update failed. Please try again.');
        }
    };
    return (
        <Container className="d-flex justify-content-center align-items-center min-vh-100">
            <Card className="shadow-lg p-4" style={{ width: '100%', maxWidth: '500px' }}>
                <Card.Body>
                    <h3 className="text-center mb-4">AOG Youth Registration Form</h3>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your name"
                                name="name"
                                value={name}
                                onChange={onChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Contact No</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter contact number"
                                name="contact"
                                value={contact}
                                onChange={onChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Gender</Form.Label>
                            <Form.Select name="gender" value={gender} onChange={onChange} required>
                                <option value="">Select gender</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your city"
                                name="city"
                                value={city}
                                onChange={onChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Label>Education</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your education"
                                name="education"
                                value={education}
                                onChange={onChange}
                                required
                            />
                        </Form.Group>

                        <div className="d-grid">
                            <Button variant="primary" type="submit">
                                Update
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default UpdateRegistration