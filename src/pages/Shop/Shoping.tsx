import HeroSection from "../../components/shoping/HeroSection";

import BookShopSection from "../../components/shoping/BookShopSection";
import { books } from "../../data/BookData";

import CourseShopSection from "../../components/shoping/CoursesShopSection";
import { courses } from "../../data/CourseData";

const Shopping = () => {
    return (
        <>
        <HeroSection/>
        <BookShopSection books={books} itemsPerPage={4}/>
        <CourseShopSection courses={courses} itemsPerPage={4}/>
        </>
    )
};
export default Shopping;