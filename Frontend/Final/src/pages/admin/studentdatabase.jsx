import { useState, useEffect } from 'react';
import { Box, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Select, MenuItem, InputLabel, FormControl, DialogActions, Button, Dialog, DialogTitle, DialogContent} from '@mui/material';
import { makeStyles } from '@mui/styles';
import AdminPersistentDrawerLeft from '../../components/AdminDrawer';
import axios from 'axios';

const useStyles = makeStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
  },
});

const StudentDatabase = () => {
  const classes = useStyles();
  const [students, setStudents] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    level: '',
    institution: '',
    rank: '',
    location: '',
    grade: '',
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedInstitution, setSelectedInstitution] = useState('');

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get('http://localhost:8080/api/admins/', {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          }
        });
        setStudents(response.data);
      } catch (error) {
        console.error('Failed to fetch students:', error);
      }
    };
    fetchStudents();
  }, []);

  const handleOpen = (student = null) => {
    if (student) {
       setFormData({
         name: student.name,
         level: student.level,
         institution: student.institution,
         rank: student.rank,
         location: student.location,
         grade: student.grade,
       });
    } else {
       setFormData({
         name: '',
         level: '',
         institution: '',
         rank: '',
         location: '',
         grade: '',
       });
    }
    setSelectedStudent(student);
    setOpen(true);
   };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      if (selectedStudent) {
        const token = localStorage.getItem("token");
        await axios.put(`http://localhost:8080/api/admins/${selectedStudent.id}`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          }
        });
        setStudents((prevStudents) =>
          prevStudents.map((student) =>
            student.id === selectedStudent.id ? { ...student, ...formData } : student
          )
        );
      } else {
        const token = localStorage.getItem("token");
        const response = await axios.post('http://localhost:8080/api/admins/post', formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          }
        });
        setStudents((prevStudents) => [...prevStudents, response.data]);
      }
      handleClose();
    } catch (error) {
      console.error('Failed to add/update student:', error);
    }
  };
  

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:8080/api/admins/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        }
      });
      setStudents((prevStudents) => prevStudents.filter((student) => student.id !== id));
    } catch (error) {
      console.error('Failed to delete student:', error);
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleLevelChange = (event) => {
    setSelectedLevel(event.target.value);
  };

  const handleInstitutionChange = (event) => {
    setSelectedInstitution(event.target.value);
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (!selectedLevel || student.level === selectedLevel) &&
    (!selectedInstitution || student.institution === selectedInstitution)
  );

  return (
    <>
      <AdminPersistentDrawerLeft />
      <Container maxWidth="lg">
        <Box my={4}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
              <Button variant="contained" color="primary" onClick={() => handleOpen()}>Add Student</Button>
            </Box>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Level</TableCell>
                    <TableCell>Institution</TableCell>
                    <TableCell>Rank</TableCell>
                    <TableCell>Location</TableCell>
                    <TableCell>Grade</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredStudents.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell>{student.id}</TableCell>
                      <TableCell>{student.name}</TableCell>
                      <TableCell>{student.level}</TableCell>
                      <TableCell>{student.institution}</TableCell>
                      <TableCell>{student.rank}</TableCell>
                      <TableCell>{student.location}</TableCell>
                      <TableCell>{student.grade}</TableCell>
                      <TableCell>
                        <Button variant="contained" color="primary" onClick={() => handleOpen(student)}>Edit</Button>
                        <Button variant="contained" color="secondary" onClick={() => handleDelete(student.id)}>Delete</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Box>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>{selectedStudent ? 'Edit Student' : 'Add Student'}</DialogTitle>
          <DialogContent>
            <form className={classes.form} noValidate autoComplete="off">
              <TextField name="name" label="Name" variant="outlined" value={formData.name} onChange={handleChange} />
              <TextField name="level" label="Level" variant="outlined" value={formData.level} onChange={handleChange} />
              <TextField name="institution" label="Insitution" variant="outlined" value={formData.institution} onChange={handleChange} />
              <TextField name="rank" label="Rank" variant="outlined" value={formData.rank} onChange={handleChange} />
              <TextField name="location" label="Location" variant="outlined" value={formData.location} onChange={handleChange} />
              <TextField name="grade" label="Grade" variant="outlined" value={formData.grade} onChange={handleChange} />
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleSubmit} color="primary">
              {selectedStudent ? 'Update' : 'Add'}
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </>
  );
};

export default StudentDatabase;
