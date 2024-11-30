import React, { useState } from 'react';
import axios from 'axios';
import './SearchPage.css'; // Import the custom CSS file

const SearchPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [results, setResults] = useState([]);
    const [error, setError] = useState('');

    const handleSearch = async () => {
        try {
            setError('');
            const response = await axios.get(`http://localhost:5003/api/orders/search`, {
                params: { query: searchQuery }, // Pass the query parameter here
            });
            setResults(response.data);
        } catch (err) {
            setError('Failed to fetch results. Please try again.');
            console.error(err.message);
        }
    };

    return (
        <div className="search-container">
            <h1 className="title">Search Orders</h1>
            <h1 className="title">Sonal Designer Bootique</h1>
            <div className="search-input">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Enter name or phone number"
                    className="input-field"
                />
                <button
                    onClick={handleSearch}
                    className="search-button"
                >
                    Search
                </button>
            </div>
            {error && <p className="error-message">{error}</p>}
            <div className="results-container">
                {results.length > 0 ? (
                    <table className="results-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Shoulder</th>
                                <th>Chest</th>
                                <th>Waist</th>
                                <th>Hip Round</th>
                                <th>Arm Round</th>
                                <th>Sleeves</th>
                                <th>Penalty Crease</th>
                                <th>Length</th>
                                <th>Back Neck</th>
                                <th>Front Neck</th>
                                <th>Note</th>
                                <th>Delivery Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {results.map((order) => (
                                <tr key={order._id}>
                                    <td>{order.name}</td>
                                    <td>{order.phoneNumber}</td>
                                    <td>{order.shoulder}</td>
                                    <td>{order.chest}</td>
                                    <td>{order.waist}</td>
                                    <td>{order.hipRound}</td>
                                    <td>{order.armRound}</td>
                                    <td>{order.sleeves}</td>
                                    <td>{order.penaltyCrease}</td>
                                    <td>{order.length}</td>
                                    <td>{order.backNeck}</td>
                                    <td>{order.frontNeck}</td>
                                    <td>{order.note}</td>
                                    <td>{order.dateOfDelivery}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="no-results">No results found. Try another search.</p>
                )}
            </div>
        </div>
    );
};

export default SearchPage;
