import { images } from "../assets/images";
import type { Book } from "./Types";

export const books: Book[] = [
    {
        id: 1,
        name: "The Coaching Habit",
        description: "A practical guide to becoming a better coach with simple questions and habits.",
        price: 19.99,
        originalPrice: 29.99,
        image: images.hero.h1,
        pages: 208,
        rating: 5
    },
    {
        id: 2,
        name: "Coaching for Performance",
        description: "Unlock your potential and achieve peak performance with proven coaching techniques.",
        price: 24.99,
        originalPrice: 34.99,
        image:  images.hero.h2,
        pages: 256,
        rating: 5
    },
    {
        id: 3,
        name: "The Life Coach",
        description: "Transform your life and help others do the same with this comprehensive coaching manual.",
        price: 17.99,
        originalPrice: 27.99,
        image: images.hero.h3,
        pages: 192,
        rating: 5
    },
    {
        id: 4,
        name: "Executive Presence",
        description: "Develop the leadership skills and presence needed to excel in executive roles.",
        price: 29.99,
        originalPrice: 39.99,
        image: images.aboutus.video,
        pages: 320,
        rating: 5
    },
    {
        id: 5,
        name: "Mindfulness for Coaches",
        description: "Incorporate mindfulness practices into your coaching to enhance client outcomes.",
        price: 15.99,
        originalPrice: 25.99,
        image:images.method.m1,
        pages: 176,
        rating: 5
    },
    {
        id: 6,
        name: "The Art of Coaching",
        description: "Master the art and science of coaching with this essential guide for professionals.",
        price: 21.99,
        originalPrice: 31.99,
        image: images.method.m2,
        pages: 288,
        rating: 5
    },
    {
        id: 7,
        name: "Coaching Psychology Manual",
        description: "A comprehensive manual on the psychology behind effective coaching practices.",
        price: 26.99,
        originalPrice: 36.99,
        image: images.method.m3,
        pages: 352,
        rating: 5
    }
];