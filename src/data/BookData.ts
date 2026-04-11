import { images } from "../assets/images";
import type { Book } from "./Types";

export const books: Book[] = [
    {
        id: 1,
        name: "The Coaching Habit",
        author: "Michael Bungay Stanier",
        publisher: "Box of Crayons Press",
        publishYear: 2016,
        language: "English",
        description: "A practical guide to becoming a better coach with simple questions and habits.",
        price: 19.99,
        originalPrice: 29.99,
        image: images.hero.h1,
        pages: 208,
        rating: 5,
        contentBlock: [
            {
                type: "paragraph",
                text: "The Coaching Habit is the most practical coaching book ever written. Author Michael Bungay Stanier distills coaching down to 7 essential questions that will unlock the full potential of any team or individual."
            },

            { type: "heading", text: "Why This Book Matters" },
            {
                type: "paragraph",
                text: "Most managers and leaders want to coach but don't know how to make it a habit. This book gives you a simple, joyful, and ultimately more effective way to have conversations that unlock potential."
            },
            { type: "heading", text: "The 7 Essential Questions" },
            {
                type: "paragraph",
                text: "From the Kickstart Question ('What's on your mind?') to the Learning Question ('What was most useful for you?'), each question builds a coaching conversation that empowers rather than creates dependency."
            },
            {
                type: "paragraph",
                text: "Each chapter is short, practical, and backed by neuroscience and behavioral economics. You will learn why old habits die hard and how to make new ones stick."
            },
            { type: "heading", text: "Who Should Read This" },
            {
                type: "paragraph",
                text: "Anyone who leads people — whether a first-time manager, seasoned executive, or professional coach — will find immediate value in these pages. The techniques work in one-on-one meetings, team sessions, and even difficult conversations."
            },
            {
                type: "quote",
                text: "Be lazy, be curious, be often — the three core principles that will transform how you lead.",
                src: "Michael Bungay Stanier"
            }
        ]
    },
    {
        id: 2,
        name: "Coaching for Performance",
        author: "Sir John Whitmore",
        publisher: "Nicholas Brealey Publishing",
        publishYear: 2017,
        language: "English",
        description: "Unlock your potential and achieve peak performance with proven coaching techniques.",
        price: 24.99,
        originalPrice: 34.99,
        image: images.hero.h2,
        pages: 256,
        rating: 5,
        contentBlock: [
            {
                type: "paragraph",
                text: "Coaching for Performance is the definitive guide to the coaching profession. It introduced the GROW model to the world and has sold over one million copies since its first publication."
            },

            { type: "heading", text: "The GROW Model" },
            {
                type: "paragraph",
                text: "GROW stands for Goal, Reality, Options, and Will (or Way Forward). This elegantly simple framework gives coaches and managers a repeatable structure for meaningful, results-oriented conversations."
            },
            { type: "heading", text: "Performance, Learning & Enjoyment" },
            {
                type: "paragraph",
                text: "Sir John Whitmore believed that true high performance requires both learning and enjoyment. This book shows how coaching unlocks intrinsic motivation and produces sustainable excellence rather than short-term compliance."
            },
            {
                type: "quote",
                text: "Coaching is unlocking a person's potential to maximize their own performance. It is helping them to learn rather than teaching them.",
                src: "Sir John Whitmore"
            }
        ]
    },
    {
        id: 3,
        name: "The Life Coach",
        author: "Eileen Mulligan",
        publisher: "Time Warner Books",
        publishYear: 2019,
        language: "English",
        description: "Transform your life and help others do the same with this comprehensive coaching manual.",
        price: 17.99,
        originalPrice: 27.99,
        image: images.hero.h3,
        pages: 192,
        rating: 5,
        contentBlock: [
            {
                type: "paragraph",
                text: "The Life Coach is a compassionate and actionable guide for anyone who wants to support others through major life changes. Eileen Mulligan draws on decades of coaching experience to make the practice accessible to everyone."
            },

            { type: "heading", text: "A Roadmap for Change" },
            {
                type: "paragraph",
                text: "The book walks readers through the full arc of a coaching relationship — from the initial session and establishing trust, to tackling deep-seated beliefs, to celebrating client breakthroughs."
            },
            {
                type: "paragraph",
                text: "Mulligan covers career coaching, relationship coaching, health coaching, and personal development coaching with equal depth and care."
            },
            {
                type: "quote",
                text: "Change is not something that happens to you. It is something you choose, prepare for, and step boldly into.",
                src: "Eileen Mulligan"
            }
        ]
    },
    {
        id: 4,
        name: "Executive Presence",
        author: "Sylvia Ann Hewlett",
        publisher: "Harper Business",
        publishYear: 2014,
        language: "English",
        description: "Develop the leadership skills and presence needed to excel in executive roles.",
        price: 29.99,
        originalPrice: 39.99,
        image: images.aboutus.video,
        pages: 320,
        rating: 5,
        contentBlock: [
            {
                type: "paragraph",
                text: "Executive Presence is based on a large-scale survey of senior executives across industries and reveals exactly what it takes to project leadership gravitas, communicate with conviction, and carry yourself with authority."
            },

            { type: "heading", text: "The Three Pillars of EP" },
            {
                type: "paragraph",
                text: "Hewlett identifies three core pillars: Gravitas (how you act), Communication (how you speak), and Appearance (how you look). All three must work together to create a convincing executive presence."
            },
            { type: "heading", text: "Practical and Research-Backed" },
            {
                type: "paragraph",
                text: "Drawing on interviews with 268 senior executives and surveys of over 4,000 professionals, this book goes beyond vague advice and gives concrete, actionable guidance for leaders at every level."
            },
            {
                type: "quote",
                text: "Presence is not about changing who you are — it is about communicating who you are with conviction.",
                src: "Sylvia Ann Hewlett"
            }
        ]
    },
    {
        id: 5,
        name: "Mindfulness for Coaches",
        author: "Liz Hall",
        publisher: "Kogan Page",
        publishYear: 2013,
        language: "English",
        description: "Incorporate mindfulness practices into your coaching to enhance client outcomes.",
        price: 15.99,
        originalPrice: 25.99,
        image: images.method.m1,
        pages: 176,
        rating: 5,
        contentBlock: [
            {
                type: "paragraph",
                text: "Mindfulness for Coaches is the first book to bring together mindfulness practice and professional coaching in a rigorous, research-informed way. Liz Hall shows coaches how to cultivate their own mindfulness and weave it into their work with clients."
            },

            { type: "heading", text: "Benefits for Coach and Client" },
            {
                type: "paragraph",
                text: "When a coach is fully present — not distracted, not reactive — clients sense it immediately. This book demonstrates how a coach's personal mindfulness practice is the most powerful tool they can bring to any session."
            },
            {
                type: "paragraph",
                text: "Practical exercises, case studies, and guided meditations are woven throughout, making this both a theoretical framework and a hands-on workbook."
            },
            {
                type: "quote",
                text: "Mindfulness is not an add-on to coaching. It is the ground from which truly transformative coaching grows.",
                src: "Liz Hall"
            }
        ]
    },
    {
        id: 6,
        name: "The Art of Coaching",
        author: "Elena Aguilar",
        publisher: "Jossey-Bass",
        publishYear: 2013,
        language: "English",
        description: "Master the art and science of coaching with this essential guide for professionals.",
        price: 21.99,
        originalPrice: 31.99,
        image: images.method.m2,
        pages: 288,
        rating: 5,
        contentBlock: [
            {
                type: "paragraph",
                text: "The Art of Coaching is Elena Aguilar's definitive guide to instructional coaching. While rooted in the education sector, the principles and practices apply to any domain where a coach works to develop human capability."
            },

            { type: "heading", text: "Transformational vs Facilitative" },
            {
                type: "paragraph",
                text: "Aguilar distinguishes between facilitative coaching (following the client's agenda) and transformational coaching (challenging assumptions and fostering deeper change). The best coaches know when to use each approach."
            },
            {
                type: "paragraph",
                text: "The book is structured around the coaching relationship lifecycle — from first conversations to handling resistance and celebrating growth — making it an invaluable companion through every phase of a coaching engagement."
            },
            {
                type: "quote",
                text: "Coaching is about creating the conditions for transformation — not delivering it.",
                src: "Elena Aguilar"
            }
        ]
    },
    {
        id: 7,
        name: "Coaching Psychology Manual",
        author: "Margaret Moore & Bob Tschannen-Moran",
        publisher: "Lippincott Williams & Wilkins",
        publishYear: 2010,
        language: "English",
        description: "A comprehensive manual on the psychology behind effective coaching practices.",
        price: 26.99,
        originalPrice: 36.99,
        image: images.method.m3,
        pages: 352,
        rating: 5,
        contentBlock: [
            {
                type: "paragraph",
                text: "The Coaching Psychology Manual is the textbook for health and wellness coaches. It synthesizes decades of psychological research — from positive psychology to motivational interviewing — into a practical coaching framework."
            },

            { type: "heading", text: "Science Meets Practice" },
            {
                type: "paragraph",
                text: "Authors Moore and Tschannen-Moran are pioneers of health coaching and bring rigorous academic grounding to every chapter. The result is a manual that satisfies both clinicians and professional coaches."
            },
            { type: "heading", text: "Key Topics Covered" },
            {
                type: "paragraph",
                text: "Topics include motivational interviewing, appreciative inquiry, the transtheoretical model of change, positive emotions, strengths-based approaches, mindful coaching, and evidence-based goal setting."
            },
            {
                type: "quote",
                text: "Sustainable behavior change is not about willpower. It is about creating the right inner and outer conditions for transformation.",
                src: "Margaret Moore"
            }
        ]
    }
];
