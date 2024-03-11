import { useState, useEffect } from 'react';
import axios from 'axios';
import OnlineCourseCard from '../../components/OnlineCourseCard';
import PersistentDrawerLeft from '../../components/Drawer';
import '../../assets/css/onlinecourses.css';

const OnlineCourses = () => {
    const [courses, setCourses] = useState([]);
    const token = localStorage.getItem("token");

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/online-courses/', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    }
                });
                setCourses(response.data);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        fetchCourses();
    }, [token]);

    return (
        <div className="online-courses-container">
            <PersistentDrawerLeft />
            <div className="online-courses">
                {courses.map((course, index) => (
                    <div className="card" key={index}>
                        <OnlineCourseCard course={course} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OnlineCourses;