import { images } from "../assets/images";
import type { Course } from "./Types";

export const courses: Course[] = [
    {
        id: 1,
        name: "Transformational Coach",
        description: "This popular coaching course teaches you how to guide others through lasting, life-changing breakthroughs.",
        price: 250,
        originalPrice: 395,
        image: images.method.m1,
        duration: "12 Month Access",
        rating: 5
    },
    {
        id: 2,
        name: "Life Coach",
        description: "This popular coaching course teaches you how to guide others through lasting, life-changing breakthroughs.",
        price: 295,
        originalPrice: 395,
        image:images.method.m3,
        duration: "12 Month Access",
        rating: 5
    },
    {
        id: 3,
        name: "Business Coach",
        description: "Learn to coach entrepreneurs and business leaders to achieve their goals and overcome challenges.",
        price: 280,
        originalPrice: 400,
        image: images.method.m2,
        duration: "12 Month Access",
        rating: 5
    },
    {
        id: 4,
        name: "Health Coach",
        description: "Master the skills to help clients improve their health, wellness, and lifestyle habits.",
        price: 260,
        originalPrice: 380,
        image: images.hero.h2,
        duration: "12 Month Access",
        rating: 5
    },
    {
        id: 5,
        name: "Relationship Coach",
        description: "Develop expertise in coaching couples and individuals on relationship dynamics.",
        price: 290,
        originalPrice: 410,
        image: images.hero.h3,
        duration: "12 Month Access",
        rating: 5
    },
    {
        id: 6,
        name: "Career Coach",
        description: "Guide clients through career transitions, job searches, and professional development.",
        price: 240,
        originalPrice: 375,
        image: images.aboutus.picture,
        duration: "12 Month Access",
        rating: 5
    },
    {
        id: 7,
        name: "Executive Coach",
        description: "Specialize in coaching high-level executives and leaders in corporate environments.",
        price: 270,
        originalPrice: 390,
        image: images.hero.h3,
        duration: "12 Month Access",
        rating: 5
    }
]