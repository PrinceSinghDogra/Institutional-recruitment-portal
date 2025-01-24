import React, { useState } from "react";
import "./Announcements_Admin.css";
import Footer from "./Footer";

const Announcements_Admin = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newAnnouncement = { title, description, date: new Date().toLocaleString() };

        // Save the announcement to localStorage or send it to the backend
        let announcements = JSON.parse(localStorage.getItem("announcements")) || [];
        announcements.push(newAnnouncement);
        localStorage.setItem("announcements", JSON.stringify(announcements));

        setTitle("");
        setDescription("");
        alert("Announcement published successfully!");
    };

    return (
        <>
            <div className="announcements-admin">
                <h1>Create a New Announcement</h1>
                <form onSubmit={handleSubmit} className="announcement-form">
                    <div className="form-group">
                        <label htmlFor="title">Announcement Title</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn-submit">
                        Publish Announcement
                    </button>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default Announcements_Admin;
