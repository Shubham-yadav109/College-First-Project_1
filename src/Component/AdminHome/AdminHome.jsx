import React, { useState } from "react";
import "./AdminHome.css"; 

import Navber from '../../Component/Navbar/Navbar';
import Footer from '../../Component/Footer/Footer';

const AdminHome = () => {
    const [plant, setPlant] = useState({
        name: "",
        regularPrice: "",
        salePrice: "",
        discount: "",
    });
    const [image, setImage] = useState(null);

    const handleChange = (e) => {
        setPlant({ ...plant, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", plant.name);
        formData.append("regularPrice", plant.regularPrice);
        formData.append("salePrice", plant.salePrice);
        formData.append("discount", plant.discount);
        formData.append("image", image); 

        try {
            const response = await fetch("http://localhost:9393/plants/add", {
                method: "POST",
                body: formData, 
            });

            if (response.ok) {
                alert("Plant Added Successfully!");
                setPlant({ name: "", regularPrice: "", salePrice: "", discount: "" });
                setImage(null);
            } else {
                alert("Failed to add plant");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Error adding plant");
        }
    };

    return (
        <div>
            <Navber />
            <div className="admin-container">
                <h2 className="admin-heading">Add New Plant</h2>
                <form onSubmit={handleSubmit} className="admin-form">
                    <input type="text" name="name" placeholder="Plant Name" onChange={handleChange} value={plant.name} required />
                    <input type="text" name="regularPrice" placeholder="Regular Price" onChange={handleChange} value={plant.regularPrice} required />
                    <input type="text" name="salePrice" placeholder="Sale Price" onChange={handleChange} value={plant.salePrice} required />
                    <input type="text" name="discount" placeholder="Discount" onChange={handleChange} value={plant.discount} required />
                    <input type="file" onChange={handleImageChange} required /> 
                    <button type="submit">Add Plant</button>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default AdminHome;




