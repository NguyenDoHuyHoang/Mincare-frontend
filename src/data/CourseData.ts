import { images } from "../assets/images";
import type { Course } from "./Types";

export const courses: Course[] = [
    {
        id: 1,
        name: "Transformational Coach",
        instructor: "Dr. Sarah Mitchell",
        duration: "12 Month Access",
        lessonCount: 24,
        level: "Beginner to Advanced",
        language: "English",
        description: "This popular coaching course teaches you how to guide others through lasting, life-changing breakthroughs.",
        price: 250,
        originalPrice: 395,
        image: images.method.m1,
        rating: 5,
        contentBlock: [
            {
                type: "paragraph",
                text: "The Transformational Coach course is designed for aspiring and practicing coaches who want to help clients achieve profound, lasting change. You will learn how to facilitate deep inner shifts — not just behavioral tweaks."
            },

            { type: "heading", text: "What You Will Learn" },
            {
                type: "paragraph",
                text: "This course blends psychology, neuroscience, and practical coaching skills. You will learn how to create safety and trust, ask powerful questions, work with limiting beliefs, and guide clients to sustainable breakthroughs."
            },
            { type: "heading", text: "Who This Course Is For" },
            {
                type: "paragraph",
                text: "Whether you are new to coaching or a seasoned professional wanting to deepen your impact, this course meets you where you are. The curriculum scales from foundational listening skills all the way to advanced transformation frameworks."
            },
            {
                type: "paragraph",
                text: "The course includes video lessons, live Q&A sessions, downloadable worksheets, peer coaching practice, and access to our private coaching community."
            },
            {
                type: "quote",
                text: "Transformation is not an event. It is an ongoing process — and this course gives you the tools to guide it.",
                src: "Dr. Sarah Mitchell"
            }
        ]
    },
    {
        id: 2,
        name: "Life Coach",
        instructor: "Emma Richardson",
        duration: "12 Month Access",
        lessonCount: 20,
        level: "Beginner to Intermediate",
        language: "English",
        description: "This popular coaching course teaches you how to guide others through lasting, life-changing breakthroughs.",
        price: 295,
        originalPrice: 395,
        image: images.method.m3,
        rating: 5,
        contentBlock: [
            {
                type: "paragraph",
                text: "The Life Coach course is a comprehensive training program that prepares you to support clients across every area of life — career, relationships, health, purpose, and personal growth."
            },

            { type: "heading", text: "A Holistic Approach" },
            {
                type: "paragraph",
                text: "Life coaching is about the whole person. This course teaches you to help clients identify their values, design a fulfilling life vision, and take consistent action — even when fear and resistance arise."
            },
            { type: "heading", text: "Build Your Coaching Practice" },
            {
                type: "paragraph",
                text: "The final module covers the business of coaching — attracting clients, setting fees, managing sessions, and building a sustainable practice. You will leave ready to coach professionally from day one."
            },
            {
                type: "quote",
                text: "Life coaching is not about fixing people. It is about revealing the wholeness that was always there.",
                src: "Emma Richardson"
            }
        ]
    },
    {
        id: 3,
        name: "Business Coach",
        instructor: "James Hartley",
        duration: "12 Month Access",
        lessonCount: 22,
        level: "Intermediate to Advanced",
        language: "English",
        description: "Learn to coach entrepreneurs and business leaders to achieve their goals and overcome challenges.",
        price: 280,
        originalPrice: 400,
        image: images.method.m2,
        rating: 5,
        contentBlock: [
            {
                type: "paragraph",
                text: "The Business Coach course prepares you to work with founders, executives, and business owners who are building organizations and navigating complex leadership challenges."
            },

            { type: "heading", text: "Strategic and Leadership Focus" },
            {
                type: "paragraph",
                text: "You will learn how to coach clients on strategic planning, team development, leadership presence, decision-making under pressure, and scaling their organizations effectively."
            },
            { type: "heading", text: "Real-World Case Studies" },
            {
                type: "paragraph",
                text: "The course includes case studies from real coaching engagements across industries — from startups to Fortune 500 companies — giving you practical exposure to the full range of business coaching challenges."
            },
            {
                type: "quote",
                text: "The best business coaches are not consultants who give answers. They are partners who ask better questions.",
                src: "James Hartley"
            }
        ]
    },
    {
        id: 4,
        name: "Health Coach",
        instructor: "Dr. Priya Nair",
        duration: "12 Month Access",
        lessonCount: 18,
        level: "Beginner to Intermediate",
        language: "English",
        description: "Master the skills to help clients improve their health, wellness, and lifestyle habits.",
        price: 260,
        originalPrice: 380,
        image: images.hero.h2,
        rating: 5,
        contentBlock: [
            {
                type: "paragraph",
                text: "The Health Coach course trains you to support clients in making meaningful, lasting improvements to their physical and mental well-being. You will blend behavioral coaching with evidence-based wellness knowledge."
            },

            { type: "heading", text: "Behavior Change Science" },
            {
                type: "paragraph",
                text: "At the core of this course is behavior change science. You will learn motivational interviewing, habit formation, stages of change, and how to tailor your coaching approach to each client's readiness."
            },
            {
                type: "paragraph",
                text: "Topics include nutrition fundamentals, movement and exercise science, sleep hygiene, stress management, and mindful eating — all approached through the lens of coaching rather than prescription."
            },
            {
                type: "quote",
                text: "Health coaching meets the client where they are — not where we wish they were.",
                src: "Dr. Priya Nair"
            }
        ]
    },
    {
        id: 5,
        name: "Relationship Coach",
        instructor: "Kimberly Bishop",
        duration: "12 Month Access",
        lessonCount: 16,
        level: "Beginner to Intermediate",
        language: "English",
        description: "Develop expertise in coaching couples and individuals on relationship dynamics.",
        price: 290,
        originalPrice: 410,
        image: images.hero.h3,
        rating: 5,
        contentBlock: [
            {
                type: "paragraph",
                text: "The Relationship Coach course gives you the skills to help clients build healthier, more fulfilling relationships — whether with a partner, family members, colleagues, or themselves."
            },

            { type: "heading", text: "Couples and Individual Coaching" },
            {
                type: "paragraph",
                text: "You will learn how to work with both individuals navigating relationship challenges and couples seeking to deepen their connection. The curriculum covers attachment theory, communication skills, conflict resolution, and emotional intimacy."
            },
            { type: "heading", text: "Ethics and Boundaries" },
            {
                type: "paragraph",
                text: "Relationship coaching touches deeply personal territory. This course devotes significant attention to maintaining professional boundaries, recognizing when to refer clients to therapy, and holding space with compassion."
            },
            {
                type: "quote",
                text: "Every relationship struggle is ultimately a communication challenge — and communication is a skill that can always be learned.",
                src: "Kimberly Bishop"
            }
        ]
    },
    {
        id: 6,
        name: "Career Coach",
        instructor: "Marcus Chen",
        duration: "12 Month Access",
        lessonCount: 15,
        level: "Beginner to Intermediate",
        language: "English",
        description: "Guide clients through career transitions, job searches, and professional development.",
        price: 240,
        originalPrice: 375,
        image: images.aboutus.picture,
        rating: 5,
        contentBlock: [
            {
                type: "paragraph",
                text: "The Career Coach course prepares you to guide clients through every stage of their professional journey — from identifying their strengths and values, to navigating job searches, interviews, and career transitions."
            },

            { type: "heading", text: "Modern Career Landscape" },
            {
                type: "paragraph",
                text: "Careers today are rarely linear. You will learn how to help clients thrive in a dynamic labor market — whether they are early-career professionals, mid-career changers, or executives redefining their purpose."
            },
            {
                type: "paragraph",
                text: "The course covers strengths assessment, resume and LinkedIn strategy, interview preparation, salary negotiation, and building professional networks."
            },
            {
                type: "quote",
                text: "A career coach does not find you a job. They help you discover who you are at your best — and then the right opportunities follow.",
                src: "Marcus Chen"
            }
        ]
    },
    {
        id: 7,
        name: "Executive Coach",
        instructor: "Victoria Walsh",
        duration: "12 Month Access",
        lessonCount: 20,
        level: "Advanced",
        language: "English",
        description: "Specialize in coaching high-level executives and leaders in corporate environments.",
        price: 270,
        originalPrice: 390,
        image: images.hero.h3,
        rating: 5,
        contentBlock: [
            {
                type: "paragraph",
                text: "The Executive Coach course is an advanced program for coaches who want to work at the highest levels of organizations. You will learn how to coach C-suite leaders, board members, and senior executives through complex challenges."
            },

            { type: "heading", text: "High-Stakes Coaching" },
            {
                type: "paragraph",
                text: "Executive coaching happens in high-stakes environments where the decisions of a single leader can affect thousands of people. This course equips you to hold that weight with confidence, clarity, and ethical grounding."
            },
            { type: "heading", text: "Systemic and Organizational Lens" },
            {
                type: "paragraph",
                text: "You will learn to coach not just the individual but the system they operate in — organizational culture, power dynamics, stakeholder relationships, and the broader strategic context."
            },
            {
                type: "quote",
                text: "The most effective executive coaches are trusted partners who challenge leaders to see their blind spots with compassion rather than judgment.",
                src: "Victoria Walsh"
            }
        ]
    }
];
