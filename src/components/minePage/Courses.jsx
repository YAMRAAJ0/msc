
import FilterSidebar from './FilterSidebar';
import CourseDetails from './CourseDetails';
const coursesData = [
    {
      id: 1,
      title: "OY Power Step Classroom Course for JEE (Main and Advanced) 2025",
      target: "Class 12-plus Students",
      scholarship: "Available",
      batchStart: "March/April 2024",
      timings: "Weekdays 3-4 hrs per day\nWeekends(Saturday and Sunday) 6 hrs per day",
      pdfLink: "#"
    },
    {
      id: 2,
      title: "OY Power Step Classroom Course for JEE M and A English Medium Phase 3",
      target: "Class 12-plus Students",
      scholarship: "Available",
      batchStart: "June/July 2024",
      timings: "Weekdays 3-4 hrs per day\nWeekends(Saturday and Sunday) 6 hrs per day",
      pdfLink: "#"
    }
  ];
function Courses(){
    return(
        <>
       <div className="App flex flex-col md:flex-row justify-center items-start mt-16 bg-gray-100 p-4">
      <FilterSidebar  />
      <CourseDetails coursesData={coursesData} />
    </div>
        </>
    )
}
export default Courses;