import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import axios from 'axios';
import './HomePage.css';


const HomePage = () => {
    const navigate = useNavigate(); // Initialize useNavigate
    const [form, setForm] = useState({
        name: '',
        phoneNumber: '',
        shoulder: '',
        chest: '',
        bust: '',
        waist: '',
        hipRound: '',
        armRound: '',
        sleeves: '',
        paneltyCrease: '',
        length: '',
        backNeck: '',
        frontNeck: '',
        note: '',
        dateOfDelivery: '',
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5003/api/orders/create', form);
            alert('Order created successfully!');
            console.log('Response:', response.data);
        } catch (err) {
            console.error(err.message);
            alert('Failed to create order. Please check the details.');
        }
    };

    const handleSearchRedirect = () => {
        navigate('/search'); // Redirect to the search page
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Create an Order</h1>
            <h1 className="text-2xl font-bold mb-4">Sonal Designer Bootique</h1>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 max-w-lg">
                <input
                    type="text"
                    name="name"
                    placeholder="Customer Name"
                    value={form.name}
                    onChange={handleChange}
                    className="border p-2 rounded"
                    required
                />
                <input
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={form.phoneNumber}
                    onChange={handleChange}
                    className="border p-2 rounded"
                    required
                />
                <input
                    type="number"
                    name="shoulder"
                    placeholder="Shoulder (in inches)"
                    value={form.shoulder}
                    onChange={handleChange}
                    className="border p-2 rounded"
                    required
                />
                <input
                    type="number"
                    name="chest"
                    placeholder="Chest (in inches)"
                    value={form.chest}
                    onChange={handleChange}
                    className="border p-2 rounded"
                    required
                />
                <input
                    type="number"
                    name="bust"
                    placeholder="Bust (in inches)"
                    value={form.bust}
                    onChange={handleChange}
                    className="border p-2 rounded"
                    required
                />
                <input
                    type="number"
                    name="waist"
                    placeholder="Waist (in inches)"
                    value={form.waist}
                    onChange={handleChange}
                    className="border p-2 rounded"
                    required
                />
                <input
                    type="number"
                    name="hipRound"
                    placeholder="Hip Round (in inches)"
                    value={form.hipRound}
                    onChange={handleChange}
                    className="border p-2 rounded"
                    required
                />
                <input
                    type="number"
                    name="armRound"
                    placeholder="Arm Round (in inches)"
                    value={form.armRound}
                    onChange={handleChange}
                    className="border p-2 rounded"
                    required
                />
                <input
                    type="number"
                    name="sleeves"
                    placeholder="Sleeves (in inches)"
                    value={form.sleeves}
                    onChange={handleChange}
                    className="border p-2 rounded"
                    required
                />
                <input
                    type="number"
                    name="paneltyCrease"
                    placeholder="Panelty Crease (in inches)"
                    value={form.paneltyCrease}
                    onChange={handleChange}
                    className="border p-2 rounded"
                    required
                />
                <input
                    type="number"
                    name="length"
                    placeholder="Length (in inches)"
                    value={form.length}
                    onChange={handleChange}
                    className="border p-2 rounded"
                    required
                />
                <input
                    type="number"
                    name="backNeck"
                    placeholder="Back Neck (in inches)"
                    value={form.backNeck}
                    onChange={handleChange}
                    className="border p-2 rounded"
                    required
                />
                <input
                    type="number"
                    name="frontNeck"
                    placeholder="Front Neck (in inches)"
                    value={form.frontNeck}
                    onChange={handleChange}
                    className="border p-2 rounded"
                    required
                />
                <textarea
                    name="note"
                    placeholder="Additional Notes"
                    value={form.note}
                    onChange={handleChange}
                    className="border p-2 rounded"
                />
                <input
                    type="date"
                    name="dateOfDelivery"
                    value={form.dateOfDelivery}
                    onChange={handleChange}
                    className="border p-2 rounded"
                    required
                />
                <div className="flex gap-4">
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                        Submit
                    </button>
                    <button
                        type="button"
                        className="bg-green-500 text-white p-2 rounded"
                        onClick={handleSearchRedirect}
                    >
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
};

export default HomePage;
