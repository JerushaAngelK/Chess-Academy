import * as React from 'react';

const StudentList = ({ students }) => {
  return (
    <div className="student-list">
      <h3>Students</h3>
      <ul>
        {students.map(student => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;