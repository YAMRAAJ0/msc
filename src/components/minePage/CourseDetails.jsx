import React from 'react';

const CourseDetails = ({ coursesData }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <h2 className="text-xl font-bold">1 Classroom Courses Available</h2>
      </div>
      {coursesData.map(course => (
        <div key={course.id} className="bg-white rounded-lg shadow-lg mb-6 p-6">
          <h3 className="text-blue-500 text-xl font-bold mb-2">{course.title}</h3>
          <div className="flex items-center mb-4">
            <div className="mr-6">
              <div className="flex items-center mb-1">
                <img src="/path/to/your/target-icon.png" alt="target" className="w-6 h-6 mr-2" />
                <span>For {course.target}</span>
              </div>
              <div className="flex items-center mb-1">
                <img src="/path/to/your/scholarship-icon.png" alt="scholarship" className="w-6 h-6 mr-2" />
                <span>{course.scholarship}</span>
              </div>
            </div>
            <div className="ml-auto">
              <a href={course.pdfLink} className="text-blue-500 flex items-center">
                <img src="/path/to/your/pdf-icon.png" alt="pdf" className="w-6 h-6 mr-2" />
                DOWNLOAD COURSE DETAILS
              </a>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <div className="mr-6">
              <div className="flex items-center mb-1">
                <img src="/path/to/your/calendar-icon.png" alt="calendar" className="w-6 h-6 mr-2" />
                <span>Batch Starting On</span>
              </div>
              <div className="ml-8">{course.batchStart}</div>
            </div>
            <div>
              <div className="flex items-center mb-1">
                <img src="/path/to/your/clock-icon.png" alt="clock" className="w-6 h-6 mr-2" />
                <span>Class Timings</span>
              </div>
              <div className="ml-8 whitespace-pre-line">{course.timings}</div>
            </div>
          </div>
          <div className="flex justify-around mt-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">PAY REGISTRATION FEE</button>
            <button className="bg-white border border-blue-500 text-blue-500 px-4 py-2 rounded">REQUEST A CALL BACK</button>
            <button className="bg-white border border-blue-500 text-blue-500 px-4 py-2 rounded">FIND CENTER LOCATION</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseDetails;
