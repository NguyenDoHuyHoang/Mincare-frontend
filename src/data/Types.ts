export interface TeamMember {
    id: number;
    name: string;
    role: string;
    image: string;
    Biography: string[];
    tags: string[];
    // specialty and benefit are paired — each specialty maps to one benefit in the sidebar
    specialties?: CoachSpecialty[]; 
    qualifications?: string[];
    location: string;
    review?: string;
}

// Keeps specialty label + its matching benefit together as one data unit
export interface CoachSpecialty {
    label: string;    // e.g. "Relationship Counseling"
    benefit: string;  // e.g. "Personalized strategies tailored to your unique situation"
}

export interface Course {
    id: number;
    name: string;
    description: string;
    price: number;
    originalPrice: number;
    image: string;
    duration: string;
    rating: number;
    instructor?: string;
    lessonCount?: number;
    level?: string;
    language?: string;
    contentBlock?: ContentBlock[];
}

export interface Book {
    id: number;
    name: string;
    description: string;
    pages: number;
    price: number;
    originalPrice: number;
    image: string;
    rating: number;
    author?: string;
    publisher?: string;
    publishYear?: number;
    language?: string;
    contentBlock?: ContentBlock[];
}

export interface Testimonial {
    id: number;
    avatar: string
    name: string;
    content: string;
}

// Shared rich-text content block — used in Blog, Book, and Course descriptions
type ContentBlock =
    | { type: "paragraph"; text: string }
    | { type: "image"; src: string; alt?: string }
    | { type: "heading"; text: string }
    | { type: "quote"; text: string; src: string };

export type { ContentBlock };

export interface BlogPost {
    id: number;
    thumbnail: string;
    title: string;
    date: string;
    author?: string;       // remove ? later
    description?: string;  // remove ? later
    contentBlock?: ContentBlock[];
}

// Course chapter — stored separately in CourseChapterData.ts
export interface CourseChapter {
    id: number;
    courseId: number; // links chapter to its Course
    title: string;
    summary: string;
}

export interface PaginationState {
    currentPage: number;
    totalPages: number;
    itemsPerPage: number;
}

// Can be extended later for other paginated sections
export interface PaginationConfig {
    team: PaginationState;
    courses: PaginationState;
    books: PaginationState;
    blog: PaginationState;
    testimonials: PaginationState;
    shopBooks?: PaginationState;
    shopCourses?: PaginationState;
    coaches?: PaginationState;
}
