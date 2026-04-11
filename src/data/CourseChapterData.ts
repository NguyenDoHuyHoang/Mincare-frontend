import type { CourseChapter } from "./Types";

// Course chapters — linked to courses by courseId
// Each chapter maps to one Course in CourseData.ts
export const courseChapters: CourseChapter[] = [
    // Transformational Coach (courseId: 1)
    { id: 1,  courseId: 1, title: "Introduction to Transformational Coaching", summary: "Understand the foundations and philosophy of transformational coaching and how it differs from other coaching styles." },
    { id: 2,  courseId: 1, title: "The Coach Mindset", summary: "Develop the mindset, beliefs, and self-awareness required to guide clients through meaningful breakthroughs." },
    { id: 3,  courseId: 1, title: "Building Powerful Questions", summary: "Learn how to craft incisive questions that unlock insights and shift perspectives in your clients." },
    { id: 4,  courseId: 1, title: "Active Listening & Presence", summary: "Master the art of deep listening and being fully present to create a safe space for transformation." },
    { id: 5,  courseId: 1, title: "Goal Setting & Accountability", summary: "Help clients define meaningful goals and create sustainable accountability systems." },
    { id: 6,  courseId: 1, title: "Overcoming Limiting Beliefs", summary: "Identify and dismantle the mental blocks that hold clients back from their full potential." },
    { id: 7,  courseId: 1, title: "Emotional Intelligence in Coaching", summary: "Apply emotional intelligence principles to deepen client relationships and accelerate growth." },
    { id: 8,  courseId: 1, title: "Coaching Ethics & Boundaries", summary: "Navigate ethical considerations and maintain healthy professional boundaries with clients." },

    // Life Coach (courseId: 2)
    { id: 9,  courseId: 2, title: "Foundations of Life Coaching", summary: "Explore the core principles of life coaching and how to establish rapport with diverse clients." },
    { id: 10, courseId: 2, title: "Values Clarification", summary: "Guide clients through identifying their core values as the compass for life decisions." },
    { id: 11, courseId: 2, title: "Designing Your Ideal Life", summary: "Help clients envision and map out their ideal life across career, relationships, and well-being." },
    { id: 12, courseId: 2, title: "Habit Formation & Behavior Change", summary: "Apply behavioral science to help clients build lasting positive habits." },
    { id: 13, courseId: 2, title: "Managing Life Transitions", summary: "Support clients through major life changes such as career shifts, relationship changes, or relocation." },
    { id: 14, courseId: 2, title: "Building Resilience", summary: "Equip clients with tools to bounce back from setbacks and develop mental toughness." },
    { id: 15, courseId: 2, title: "Work-Life Integration", summary: "Coach clients on achieving sustainable balance between personal and professional life." },
    { id: 16, courseId: 2, title: "Launching Your Coaching Practice", summary: "Practical steps to build and grow a thriving life coaching business." },

    // Business Coach (courseId: 3)
    { id: 17, courseId: 3, title: "Business Coaching Fundamentals", summary: "Learn the unique skills required to coach entrepreneurs and business leaders effectively." },
    { id: 18, courseId: 3, title: "Strategic Vision & Planning", summary: "Help clients clarify their business vision and create actionable strategic plans." },
    { id: 19, courseId: 3, title: "Leadership Development", summary: "Coach founders and executives to step into confident, effective leadership roles." },
    { id: 20, courseId: 3, title: "Team Building & Culture", summary: "Guide clients in building high-performance teams and healthy organizational cultures." },
    { id: 21, courseId: 3, title: "Scaling & Growth Strategies", summary: "Explore frameworks for scaling businesses without sacrificing quality or culture." },
    { id: 22, courseId: 3, title: "Financial Literacy for Coaches", summary: "Understand key financial metrics so you can meaningfully coach business performance." },
    { id: 23, courseId: 3, title: "Navigating Business Challenges", summary: "Coach clients through common obstacles including pivots, conflict, and market disruption." },
    { id: 24, courseId: 3, title: "Business Coach Certification Prep", summary: "Review competencies and prepare for recognized business coaching certification exams." },
];

// Returns only the chapters belonging to a specific course
export const getChaptersByCourseId = (courseId: number): CourseChapter[] =>
    courseChapters.filter((chapter) => chapter.courseId === courseId);
