import { useState, useEffect } from 'react';
import { Container, Typography, Box, Button, TextField, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import { Add as AddIcon } from '@mui/icons-material';
import axios from 'axios';
import PersistentDrawerLeft from '../../components/Drawer';

const ReportCard = styled(Box)(({ theme }) => ({
 backgroundColor: theme.palette.background.paper,
 marginBottom: theme.spacing(2),
 padding: theme.spacing(2),
 borderRadius: theme.shape.borderRadius,
}));

const ReportForm = styled(Box)(({ theme }) => ({
 backgroundColor: theme.palette.background.paper,
 padding: theme.spacing(2),
 borderRadius: theme.shape.borderRadius,
 marginBottom: theme.spacing(2),
}));

const ReportsPage = () => {
 const [reports, setReports] = useState([]);
 const [showForm, setShowForm] = useState(false);
 const [newReport, setNewReport] = useState({ screenshot: null, complaint: '' });

 const token = localStorage.getItem("token");
 useEffect(() => {
  // Fetch reports from the backend
  axios.get('http://localhost:8080/api/reports/', {
     headers: {
       Authorization: `Bearer ${token}`,
       "Content-Type": "application/json",
     },
  })
  .then(response => {
     if (Array.isArray(response.data)) {
       setReports(response.data);
     } else {
       console.error('Expected an array of reports, but received:', response.data);
     }
  })
  .catch(error => {
     console.error('Error fetching reports:', error);
  });
 }, []); // Empty dependency array ensures this runs once on mount

 const handleFileChange = (event) => {
    setNewReport({ ...newReport, screenshot: event.target.files[0] });
 };

 const handleComplaintChange = (event) => {
    setNewReport({ ...newReport, complaint: event.target.value });
 };

 const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('screenshot', newReport.screenshot);
    formData.append('complaint', newReport.complaint);
   
    axios.post('http://localhost:8080/api/reports/post', formData, {
       headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`, // Include the Authorization header with the token
       },
    })
    .then(response => {
       setReports([...reports, response.data]);
       setNewReport({ screenshot: null, complaint: '' });
       setShowForm(false);
    })
    .catch(error => {
       console.error('Error submitting report:', error);
    });
   };

 return (
    <>
    <PersistentDrawerLeft/>
    <Container>
      <Typography variant="h4" gutterBottom>
        Reports
      </Typography>
      {reports.map((report, index) => (
 <ReportCard key={index}>
    <Typography variant="h6">Report #{report.id}</Typography>
    <Typography>{report.complaint}</Typography>
    {/* Use the Base64 encoded string for the screenshot */}
    {report.base64Screenshot && <img src={`data:image/png;base64,${report.base64Screenshot}`} alt="Screenshot" />}
 </ReportCard>
))}
      {showForm && (
          <ReportForm>
          <Typography variant="h6">New Report</Typography>
          <form onSubmit={handleSubmit}>
            <input type="file" onChange={handleFileChange} />
            <TextField
              label="Complaint"
              value={newReport.complaint}
              onChange={handleComplaintChange}
              fullWidth
              margin="normal"
            />
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </form>
        </ReportForm>
      )}
      <IconButton onClick={() => setShowForm(!showForm)}>
        <AddIcon />
      </IconButton>
    </Container>
              </>
 );
};

export default ReportsPage;