// Registration.jsx
import React, { useState } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'; 


const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    gender: '',
    city: '',
    education: ''
  });

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
      const response = await axios.post("http://localhost:3000/api/registration", formData);
      if (response.data.success) {
        setFormData({
          name: '',
          contact: '',
          gender: '',
          city: '',
          education: ''
        });
        toast.success(response.data.message);
        navigate('/list'); // Redirect to the list page after successful registration
      }
    } catch (error) {
      console.error('Error during registration:', error);
      toast.error('Registration failed. Please try again.');
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
                Register
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Registration;

// This code is a simple registration form using React and Bootstrap. It captures user input for name