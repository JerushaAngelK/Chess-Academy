import React, { useState } from 'react';
import { Box, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import PersistentDrawerLeft from '../../components/Drawer';
import AdminPersistentDrawerLeft from '../../components/AdminDrawer';

const StudentDatabase = () => {
  const [students, setStudents] = useState([
    { id:   1, name: 'John Doe', level: 'Intermediate', institution: 'Chess Club A', rank: '1st', location: 'New York', grade: 'A' },
    { id:   2, name: 'Jane Smith', level: 'Advanced', institution: 'Chess Club B', rank: '2nd', location: 'Los Angeles', grade: 'B' },
    { id:   3, name: 'Alex Johnson', level: 'Beginner', institution: 'Chess Club C', rank: '3rd', location: 'Chicago', grade: 'A' },
    // Add more students as needed
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedInstitution, setSelectedInstitution] = useState('');

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
    <Container maxWidth="lg">
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
    </Container>
                </>
  );
};

export default StudentDatabase;