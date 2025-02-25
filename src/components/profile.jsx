import { useState, useEffect, useMemo } from "react";
import { FiCamera, FiEdit2, FiSave } from "react-icons/fi";
import { useNavigate } from "react-router-dom"; // Optimize navigation
import "../styles/Profile.css";

const Profile = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [profileImage, setProfileImage] = useState(null);
    const [editing, setEditing] = useState(false);
    const [updatedUser, setUpdatedUser] = useState({});

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    setError("User not authenticated");
                    setLoading(false);
                    return;
                }

                const response = await fetch("https://botigashop-api.onrender.com/api/users/profile", {
                    headers: { Authorization: `Bearer ${token}` },
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch user data");
                }

                const data = await response.json();
                setUser(data);
                setUpdatedUser(data);
                setProfileImage(data.profileImage || "https://via.placeholder.com/150");
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    const handleImageUpload = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = async () => {
                const imageBase64 = reader.result;
                setProfileImage(imageBase64); 

                try {
                    const token = localStorage.getItem("token");
                    const response = await fetch("https://botigashop-api.onrender.com/api/users/update-profile-image", {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                        body: JSON.stringify({ profileImage: imageBase64 }),
                    });

                    if (!response.ok) {
                        throw new Error("Failed to upload image.");
                    }

                    const updatedData = await response.json();
                    setUser(updatedData);
                    setUpdatedUser(updatedData);

                } catch (error) {
                    console.error("Image upload error:", error);
                    alert("Error uploading image.");
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handleInputChange = (e) => {
        setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
    };

    const saveProfile = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await fetch("https://botigashop-api.onrender.com/api/users/profile", {
                method: "PUT", 
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(updatedUser),
            });

            if (!response.ok) {
                throw new Error("Failed to update profile.");
            }

            const updatedData = await response.json();
            setUser(updatedData);
            setUpdatedUser(updatedData); 
            setEditing(false);
            alert("Profile updated successfully!");

        } catch (error) {
            console.error("Profile update error:", error);
            alert("Error updating profile.");
        }
    };

    // Optimize rendering using useMemo to avoid unnecessary re-renders
    const profileDisplay = useMemo(() => {
        return (
            <div className="profile-info">
                <label>Name:</label>
                {editing ? (
                    <input type="text" name="name" value={updatedUser.name || ""} onChange={handleInputChange} />
                ) : (
                    <p>{user?.name}</p>
                )}

                <label>Email:</label>
                <p>{user?.email}</p>

                <label>Phone:</label>
                {editing ? (
                    <input type="text" name="phone" value={updatedUser.phone || ""} onChange={handleInputChange} />
                ) : (
                    <p>{user?.phone || "Not provided"}</p>
                )}

                <label>Address:</label>
                {editing ? (
                    <input type="text" name="address" value={updatedUser.address || ""} onChange={handleInputChange} />
                ) : (
                    <p>{user?.address || "Not provided"}</p>
                )}
            </div>
        );
    }, [editing, updatedUser, user]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p className="error">{error}</p>;

    return (
        <div className="profile-container">
            <h2>User Profile</h2>

            <div className="profile-image-section">
                <label className="profile-image-label">
                    <input type="file" accept="image/*" onChange={handleImageUpload} hidden />
                    <div className="profile-image">
                        <img src={profileImage || "https://via.placeholder.com/150"} alt="Profile" />
                        <div className="overlay">
                            <FiCamera />
                        </div>
                    </div>
                </label>
            </div>

            {profileDisplay}

            <div className="profile-actions">
                {editing ? (
                    <button className="save-btn" onClick={saveProfile}>
                        <FiSave /> Save
                    </button>
                ) : (
                    <button className="edit-btn" onClick={() => setEditing(true)}>
                        <FiEdit2 /> Edit Profile
                    </button>
                )}
            </div>
        </div>
    );
};

export default Profile;
