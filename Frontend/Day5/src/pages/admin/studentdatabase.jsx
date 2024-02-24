import React, { useState } from 'react';
import { Box, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Select, MenuItem, InputLabel, FormControl, DialogActions, Button, Dialog, DialogTitle, DialogContent} from '@mui/material';
import { makeStyles } from '@mui/styles';
import PersistentDrawerLeft from '../../components/Drawer';
import AdminPersistentDrawerLeft from '../../components/AdminDrawer';

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
  const [students, setStudents] = useState([
    { id:   1, name: 'John Doe', level: 'Intermediate', institution: 'Chess Club A', rank: '1st', location: 'New York', grade: 'A' },
    { id:   2, name: 'Jane Smith', level: 'Advanced', institution: 'Chess Club B', rank: '2nd', location: 'Los Angeles', grade: 'B' },
    { id:   3, name: 'Alex Johnson', level: 'Beginner', institution: 'Chess Club C', rank: '3rd', location: 'Chicago', grade: 'A' },
    // Add more students as needed
  ]);

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

  const handleOpen = (student = null) => {
    setSelectedStudent(student);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (selectedStudent) {
      // Update student
      const updatedStudents = students.map(student =>
        student.id === selectedStudent.id ? { ...selectedStudent, ...formData } : student
      );
      setStudents(updatedStudents);
    } else {
      // Add new student
      const newStudent = {
        id: students.length +  1,
        ...formData,
      };
      setStudents([...students, newStudent]);
    }
    handleClose();
  };
  const handleDelete = (id) => {
    const updatedStudents = students.filter(student => student.id !== id);
    setStudents(updatedStudents);
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

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (!selectedLevel || student.level === selectedLevel) &&
    (!selectedInstitution || student.institution === selectedInstitution)
  );

  return (
    <>
    <AdminPersistentDrawerLeft/>
    {/* <Container maxWidth="lg">
      <Box my={4}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <TextField
              label="Search by Name"
              variant="outlined"
              size="small"
              value={searchTerm}
              onChange={handleSearchChange}
              />
            <FormControl variant="outlined" size="small" style={{ minWidth:   120 }}>
              <InputLabel id="level-label">Level</InputLabel>
              <Select
                labelId="level-label"
                id="level-select"
                value={selectedLevel}
                onChange={handleLevelChange}
                label="Level"
                >
                <MenuItem value=""><em>None</em></MenuItem>
                <MenuItem value="Beginner">Beginner</MenuItem>
                <MenuItem value="Intermediate">Intermediate</MenuItem>
                <MenuItem value="Advanced">Advanced</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="outlined" size="small" style={{ minWidth:   120 }}>
              <InputLabel id="institution-label">Institution</InputLabel>
              <Select
                labelId="institution-label"
                id="institution-select"
                value={selectedInstitution}
                onChange={handleInstitutionChange}
                label="Institution"
                >
                <MenuItem value=""><em>None</em></MenuItem>
                <MenuItem value="Chess Club A">Chess Club A</MenuItem>
                <MenuItem value="Chess Club B">Chess Club B</MenuItem>
                <MenuItem value="Chess Club C">Chess Club C</MenuItem>
              </Select>
            </FormControl>
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
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </Container> */}
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
                {students.map((student) => (
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