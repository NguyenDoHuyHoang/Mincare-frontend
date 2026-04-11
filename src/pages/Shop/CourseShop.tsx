import CourseShopSection from "../../components/shoping/CoursesShopSection";
import { courses } from "../../data/CourseData";

import RegistrationContactForm from "../../components/shoping/RegistrationContactForm";

const CourseShop = () => {
    return (
        <>
        
        <CourseShopSection courses={courses} itemsPerPage={8}/>
        <RegistrationContactForm/>
        </>
    )
};
export default CourseShop;