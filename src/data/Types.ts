export interface TeamMember {
    id: number;
    name: string;
    role: string;
    image: string;
    skills?: string[]
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
}

export interface Testimonial {
    id: number;
    avatar: string;
    name: string;
    content: string;
}
type contentBlock =
    | { type: "paragraph"; text: string }
    | { type: "image"; src: string; alt?: string }
    | { type: "heading"; text: string }
    | { type: "quote"; text: string; src: string };// có thể mở rộng

export interface BlogPost {
    id: number;
    thumbnail: string;
    title: string;
    date: string;
    author?: string // remove ? later
    description?: string;// remove ? later
    contentBlock?: contentBlock[];// remove ? later
    
}

export interface PaginationState {
    currentPage: number;
    totalPages: number;
    itemsPerPage: number;
}

// Có thể mở rộng sau này cho các section khác
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