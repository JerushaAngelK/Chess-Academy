// // import Card1 from "../../components/Card1";
// // import PersistentDrawerLeft from '../../components/Drawer';
// // import Navbar from "../../components/Nav";
// // import '../../assets/css/home.css';
// // import '../../assets/css/onlinecourses.css'
// // import Card2 from "../../components/Card2";
// // import Card3 from "../../components/Card3";
// // import Card4 from "../../components/Card4";
// // import { Divider } from "@mui/material";
// // import Fab from '@mui/material/Fab';
// // import AddIcon from '@mui/icons-material/Add';
// // import Dialog from '@mui/material/Dialog';
// // import DialogTitle from '@mui/material/DialogTitle';
// // import DialogContent from '@mui/material/DialogContent';
// // import DialogActions from '@mui/material/DialogActions';
// // import Button from '@mui/material/Button';
// // import TextField from '@mui/material/TextField';
// // import { useState } from "react";
// // import axios from 'axios';

// // export default function OCourses(){

// // const [openAddCourse, setOpenAddCourse] = useState(false);

// // const handleAddCourseClick = () => {
// //  setOpenAddCourse(true);
// // };

// // const handleCloseAddCourse = () => {
// //  setOpenAddCourse(false);
// // };
// //    const handleAddCourseSubmit = async () => {
// //     // Collect the form data
// //     const newCourse = {
// //         id: document.getElementById('id').value,
// //         image: document.getElementById('image').value,
// //         title: document.getElementById('title').value,
// //         time: document.getElementById('time').value,
// //         description: document.getElementById('description').value,
// //     };

// //     try {
// //         const response = await axios.post('http://localhost:8080/api/online-courses/post', newCourse);
// //         if (response.status === 201) {
// //             // Handle the successful response (e.g., update the state, show a success message)
// //             console.log("Course added successfully:", response.data);
// //             // You may want to update the state with the new course data here
// //             // For example, if you have a state variable for courses, you could do:
// //             // setCourses([...courses, response.data]);
// //         } else {
// //             console.error("Failed to add course:", response.data);
// //         }
// //     } catch (error) {
// //         console.error("Network error:", error);
// //     } finally {
// //         handleCloseAddCourse();
// //     }
    
// // };
// //     return(
        
// //         <div className="ocourses"> 
// //             <Dialog open={openAddCourse} onClose={handleCloseAddCourse}>
// //  <DialogTitle>Add New Course</DialogTitle>
// //  <DialogContent>
// //     <TextField autoFocus margin="dense" id="id" label="ID" type="number" fullWidth />
// //     <TextField margin="dense" id="image" label="Image URL" type="text" fullWidth />
// //     <TextField margin="dense" id="title" label="Title" type="text" fullWidth />
// //     <TextField margin="dense" id="time" label="Time" type="text" fullWidth />
// //     <TextField margin="dense" id="description" label="Description" type="text" fullWidth />
// //  </DialogContent>
// //  <DialogActions>
// //     <Button onClick={handleCloseAddCourse}>Cancel</Button>
// //     <Button onClick={handleAddCourseSubmit}>Add Course</Button>
// //  </DialogActions>
// // </Dialog>
// //         <div className="in1" style={{display:"inline"}}>
// //             <PersistentDrawerLeft style={{ backgroundColor: "#A67B5B" }}/>
// //             <div className="oc1" style={{width:'33%',float:'left'}}> 
// //             <Card1/>
// //             </div>
// //             <div className="oc2" style={{width:'34%',float:'left'}}>
// //             <Card2/>
// //             </div>
// //             <div className="oc3" style={{width:'33%',float:'left'}}>
// //             <Card3/>
// //             </div>
// //         </div>

// //         <Divider/>

// //         <div className="in2" style={{display:"inline"}}>
// //             <PersistentDrawerLeft style={{ backgroundColor: "#A67B5B" }}/>
// //             <div className="oc1" style={{width:'33.33%',float:'left'}}> 
// //             <Card4/>
// //             </div>
// //             <div className="oc2" style={{width:'33.33%',float:'left'}}>
// //             <Card2/>
// //             </div>
// //             <div className="oc3" style={{width:'33.33%',float:'left'}}>
// //             <Card3/>
// //             </div>
// //         </div>
// //         <Fab color="primary" aria-label="add" style={{ position: 'fixed', bottom: '20px', right: '20px' }} onClick={handleAddCourseClick}>
// //  <AddIcon />
// // </Fab>
// //         </div>
// //     );
// // }

// import React, { useState } from 'react';
// import Card1 from "../../components/Card1";
// import PersistentDrawerLeft from '../../components/Drawer';
// import Navbar from "../../components/Nav";
// import '../../assets/css/home.css';
// import '../../assets/css/onlinecourses.css';
// import Card2 from "../../components/Card2";
// import Card3 from "../../components/Card3";
// import Card4 from "../../components/Card4";
// import { Divider } from "@mui/material";
// import Fab from '@mui/material/Fab';
// import AddIcon from '@mui/icons-material/Add';
// import Dialog from '@mui/material/Dialog';
// import DialogTitle from '@mui/material/DialogTitle';
// import DialogContent from '@mui/material/DialogContent';
// import DialogActions from '@mui/material/DialogActions';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import axios from 'axios';

// export default function OCourses() {
//  const [openAddCourse, setOpenAddCourse] = useState(false);

//  const handleAddCourseClick = () => {
//     setOpenAddCourse(true);
//  };

//  const handleCloseAddCourse = () => {
//     setOpenAddCourse(false);
//  };

//  const handleAddCourseSubmit = async () => {
//     // Collect the form data
//     const newCourse = {
//       id: document.getElementById('id').value,
//       image: document.getElementById('image').value,
//       title: document.getElementById('title').value,
//       time: document.getElementById('time').value,
//       description: document.getElementById('description').value,
//     };

//     try {
//       const response = await axios.post('http://localhost:8080/api/online-courses/post', newCourse);
//       if (response.status === 201) {
//         // Handle the successful response (e.g., update the state, show a success message)
//         console.log("Course added successfully:", response.data);
//         // You may want to update the state with the new course data here
//         // For example, if you have a state variable for courses, you could do:
//         // setCourses([...courses, response.data]);
//       } else {
//         console.error("Failed to add course:", response.data);
//       }
//     } catch (error) {
//       console.error("Network error:", error);
//     } finally {
//       handleCloseAddCourse();
//     }
//  };

//  return (
//     <div className="ocourses">
//       <Dialog open={openAddCourse} onClose={handleCloseAddCourse}>
//         <DialogTitle>Add New Course</DialogTitle>
//         <DialogContent>
//           <TextField autoFocus margin="dense" id="id" label="ID" type="number" fullWidth />
//           <TextField margin="dense" id="image" label="Image URL" type="text" fullWidth />
//           <TextField margin="dense" id="title" label="Title" type="text" fullWidth />
//           <TextField margin="dense" id="time" label="Time" type="text" fullWidth />
//           <TextField margin="dense" id="description" label="Description" type="text" fullWidth />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseAddCourse}>Cancel</Button>
//           <Button onClick={handleAddCourseSubmit}>Add Course</Button>
//         </DialogActions>
//       </Dialog>
//       <div className="in1" style={{ display: "inline" }}>
//         <PersistentDrawerLeft style={{ backgroundColor: "#A67B5B" }} />
//         <div className="oc1" style={{ width: '33%', float: 'left' }}>
//           <Card1 />
//         </div>
//         <div className="oc2" style={{ width: '34%', float: 'left' }}>
//           <Card2 />
//         </div>
//         <div className="oc3" style={{ width: '33%', float: 'left' }}>
//           <Card3 />
//         </div>
//       </div>

//       <Divider />

//       <div className="in2" style={{ display: "inline" }}>
//         <PersistentDrawerLeft style={{ backgroundColor: "#A67B5B" }} />
//         <div className="oc1" style={{ width: '33.33%', float: 'left' }}>
//           <Card4 />
//         </div>
//         <div className="oc2" style={{ width: '33.33%', float: 'left' }}>
//           <Card2 />
//         </div>
//         <div className="oc3" style={{ width: '33.33%', float: 'left' }}>
//           <Card3 />
//         </div>
//       </div>
//       <Fab color="primary" aria-label="add" style={{ position: 'fixed', bottom: '20px', right: '20px' }} onClick={handleAddCourseClick}>
//         <AddIcon />
//       </Fab>
//     </div>
//  );
// }

// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import OnlineCourseCard from '../../components/OnlineCourseCard'; // Import the OnlineCourseCard component
// import Dialog from '@mui/material/Dialog';
// import DialogTitle from '@mui/material/DialogTitle';
// import DialogContent from '@mui/material/DialogContent';
// import DialogActions from '@mui/material/DialogActions';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';

// const OnlineCourses = () => {
//     const [courses, setCourses] = useState([]);
//     const [openAddCourse, setOpenAddCourse] = useState(false);
//     const [newCourse, setNewCourse] = useState({
//         id: '',
//         image: '',
//         title: '',
//         time: '',
//         description: ''
//     });
//     const token = localStorage.getItem("token");
//     useEffect(() => {
//         // Fetch data from backend API
//         axios.get('http://localhost:8080/api/online-courses', {
//             headers: {
//                 Authorization: `Bearer ${token}`,
//                 "Content-Type": "application/json",
//             }
//         })
//         .then(response => {
//             setCourses(response.data); // Update state with fetched data
//         })
//         .catch(error => {
//             console.error('Error fetching courses:', error);
//         });
//     }, [token]); // Make sure to include token in the dependency array if it's a state variable

//     const handleAddCourseClick = () => {
//         setOpenAddCourse(true);
//     };

//     const handleCloseAddCourse = () => {
//         setOpenAddCourse(false);
//     };

//     const handleAddCourseSubmit = async () => {
//         try {
//             const response = await axios.post('http://localhost:8080/api/online-courses/post', newCourse, {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                     "Content-Type": "application/json",
//                 }
//             });
//             if (response.status === 201) {
//                 // If successful, add the new course to the courses array
//                 setCourses([...courses, response.data]);
//                 console.log("Course added successfully:", response.data);
//             } else {
//                 console.error("Failed to add course:", response.data);
//             }
//         } catch (error) {
//             console.error("Network error:", error);
//         } finally {
//             handleCloseAddCourse();
//         }
//     };

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setNewCourse({ ...newCourse, [name]: value });
//     };

//     return (
//         <div>
//             {/* Render OnlineCourseCard components for each course */}
//             {courses.map(course => (
//                 <OnlineCourseCard key={course.id} course={course} />
//             ))}
//             {/* Dialog for adding a new course */}
//             <Dialog open={openAddCourse} onClose={handleCloseAddCourse}>
//                 <DialogTitle>Add New Course</DialogTitle>
//                 <DialogContent>
//                     <TextField
//                         autoFocus
//                         margin="dense"
//                         id="id"
//                         name="id"
//                         label="ID"
//                         type="number"
//                         fullWidth
//                         value={newCourse.id}
//                         onChange={handleInputChange}
//                     />
//                     <TextField
//                         margin="dense"
//                         id="image"
//                         name="image"
//                         label="Image URL"
//                         type="text"
//                         fullWidth
//                         value={newCourse.image}
//                         onChange={handleInputChange}
//                     />
//                     <TextField
//                         margin="dense"
//                         id="title"
//                         name="title"
//                         label="Title"
//                         type="text"
//                         fullWidth
//                         value={newCourse.title}
//                         onChange={handleInputChange}
//                     />
//                     <TextField
//                         margin="dense"
//                         id="time"
//                         name="time"
//                         label="Time"
//                         type="text"
//                         fullWidth
//                         value={newCourse.time}
//                         onChange={handleInputChange}
//                     />
//                     <TextField
//                         margin="dense"
//                         id="description"
//                         name="description"
//                         label="Description"
//                         type="text"
//                         fullWidth
//                         value={newCourse.description}
//                         onChange={handleInputChange}
//                     />
//                 </DialogContent>
//                 <DialogActions>
//                     <Button onClick={handleCloseAddCourse}>Cancel</Button>
//                     <Button onClick={handleAddCourseSubmit}>Add Course</Button>
//                 </DialogActions>
//             </Dialog>
//             {/* Button to open the dialog for adding a new course */}
//             <Button onClick={handleAddCourseClick} variant="contained" color="primary">
//                 Add New Course
//             </Button>
//         </div>
//     );
// }

// export default OnlineCourses;

// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import OnlineCourseCard from '../../components/OnlineCourseCard';
// import Dialog from '@mui/material/Dialog';
// import DialogTitle from '@mui/material/DialogTitle';
// import DialogContent from '@mui/material/DialogContent';
// import DialogActions from '@mui/material/DialogActions';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';

// const OnlineCourses = () => {
//     const [courses, setCourses] = useState([]);
//     const [openAddCourse, setOpenAddCourse] = useState(false);
//     const [newCourse, setNewCourse] = useState({
//         id: '',
//         image: '',
//         title: '',
//         time: '',
//         description: ''
//     });
//     const token = localStorage.getItem("token");

//     useEffect(() => {
//         const fetchCourses = async () => {
//             try {
//                 const response = await axios.get('http://localhost:8080/api/online-courses/', {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                         "Content-Type": "application/json",
//                     }
//                 });
//                 setCourses(response.data);
//             } catch (error) {
//                 console.error('Error fetching courses:', error);
//             }
//         };

//         fetchCourses();
//     }, [token]);

//     const handleAddCourseClick = () => {
//         setOpenAddCourse(true);
//     };

//     const handleCloseAddCourse = () => {
//         setOpenAddCourse(false);
//     };

//     const handleAddCourseSubmit = async () => {
//         try {
//             const response = await axios.post('http://localhost:8080/api/online-courses/post', newCourse, {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                     "Content-Type": "application/json",
//                 }
//             });
//             if (response.status === 201) {
//                 setCourses([...courses, response.data]);
//                 console.log("Course added successfully:", response.data);
//             } else {
//                 console.error("Failed to add course:", response.data);
//             }
//         } catch (error) {
//             console.error("Network error:", error);
//         } finally {
//             handleCloseAddCourse();
//         }
//     };

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setNewCourse({ ...newCourse, [name]: value });
//     };

//     return (
//         <div>
//             {courses.map(course => (
//                 <OnlineCourseCard key={course.id} course={course} />
//             ))}
//             <Dialog open={openAddCourse} onClose={handleCloseAddCourse}>
//                 <DialogTitle>Add New Course</DialogTitle>
//                 <DialogContent>
//                     <TextField
//                         autoFocus
//                         margin="dense"
//                         id="id"
//                         name="id"
//                         label="ID"
//                         type="number"
//                         fullWidth
//                         value={newCourse.id}
//                         onChange={handleInputChange}
//                     />
//                     <TextField
//                         margin="dense"
//                         id="image"
//                         name="image"
//                         label="Image URL"
//                         type="text"
//                         fullWidth
//                         value={newCourse.image}
//                         onChange={handleInputChange}
//                     />
//                     <TextField
//                         margin="dense"
//                         id="title"
//                         name="title"
//                         label="Title"
//                         type="text"
//                         fullWidth
//                         value={newCourse.title}
//                         onChange={handleInputChange}
//                     />
//                     <TextField
//                         margin="dense"
//                         id="time"
//                         name="time"
//                         label="Time"
//                         type="text"
//                         fullWidth
//                         value={newCourse.time}
//                         onChange={handleInputChange}
//                     />
//                     <TextField
//                         margin="dense"
//                         id="description"
//                         name="description"
//                         label="Description"
//                         type="text"
//                         fullWidth
//                         value={newCourse.description}
//                         onChange={handleInputChange}
//                     />
//                 </DialogContent>
//                 <DialogActions>
//                     <Button onClick={handleCloseAddCourse}>Cancel</Button>
//                     <Button onClick={handleAddCourseSubmit}>Add Course</Button>
//                 </DialogActions>
//             </Dialog>
//             <Button onClick={handleAddCourseClick} variant="contained" color="primary">
//                 Add New Course
//             </Button>
//         </div>
//     );
// }

// export default OnlineCourses;

import { useState, useEffect } from 'react';
import axios from 'axios';
import OnlineCourseCard from '../../components/OnlineCourseCard';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import '../../assets/css/onlinecourses.css';
import AdminPersistentDrawerLeft from '../../components/AdminDrawer';

const OnlineCoursess = () => {
    const [courses, setCourses] = useState([]);
    const [openAddCourse, setOpenAddCourse] = useState(false);
    const [newCourse, setNewCourse] = useState({
        id: '',
        image: '',
        title: '',
        time: '',
        description: ''
    });
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

    const handleAddCourseClick = () => {
        setOpenAddCourse(true);
    };

    const handleCloseAddCourse = () => {
        setOpenAddCourse(false);
    };

    const handleAddCourseSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/online-courses/post', newCourse, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                }
            });
            if (response.status === 201) {
                setCourses([...courses, response.data]);
                console.log("Course added successfully:", response.data);
            } else {
                console.error("Failed to add course:", response.data);
            }
        } catch (error) {
            console.error("Network error:", error);
        } finally {
            handleCloseAddCourse();
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewCourse({ ...newCourse, [name]: value });
    };

    return (
        <div className="online-courses-container">
            <AdminPersistentDrawerLeft />
            <div className="online-courses">
                {courses.map((course, index) => (
                  <div className='card' key={index} >
                    <OnlineCourseCard course={course} />
                    </div>
                ))}
            </div>
            <Dialog open={openAddCourse} onClose={handleCloseAddCourse}>
                <DialogTitle>Add New Course</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="id"
                        name="id"
                        label="ID"
                        type="number"
                        fullWidth
                        value={newCourse.id}
                        onChange={handleInputChange}
                    />
                    <TextField
                        margin="dense"
                        id="image"
                        name="image"
                        label="Image URL"
                        type="text"
                        fullWidth
                        value={newCourse.image}
                        onChange={handleInputChange}
                    />
                    <TextField
                        margin="dense"
                        id="title"
                        name="title"
                        label="Title"
                        type="text"
                        fullWidth
                        value={newCourse.title}
                        onChange={handleInputChange}
                    />
                    <TextField
                        margin="dense"
                        id="time"
                        name="time"
                        label="Time"
                        type="text"
                        fullWidth
                        value={newCourse.time}
                        onChange={handleInputChange}
                    />
                    <TextField
                        margin="dense"
                        id="description"
                        name="description"
                        label="Description"
                        type="text"
                        fullWidth
                        value={newCourse.description}
                        onChange={handleInputChange}
                    />
                    {/* Other text fields for new course properties */}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseAddCourse}>Cancel</Button>
                    <Button onClick={handleAddCourseSubmit}>Add Course</Button>
                    {/* <Button onClick={handleAddCourseSubmit}>Add Course</Button> */}
                </DialogActions>
            </Dialog>
            {/* Floating add button */}
            <Fab color="primary" aria-label="add" className="add-button" onClick={handleAddCourseClick}>
                <AddIcon />
            </Fab>
        </div>
    );
}

export default OnlineCoursess
