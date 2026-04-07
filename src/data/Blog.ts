import { images } from "../assets/images";
import type { BlogPost } from "./Types";

export const blogs: BlogPost[] = [
    {
        id: 1,
        title: "10 ways villas can make your holiday enjoyable",
        date: "June 13, 2024",
        thumbnail: images.hero.h1,
        description: 'Một số mẹo đơn giản để duy trì sức khỏe tinh thần tốt trong cuộc sống bận rộn.'
    },
    {
        id: 2,
        title: "Top 8 destinations & villas you must visit in 2024",
        date: "June 13, 2024",
        thumbnail: images.hero.h2,
        description: 'Một số mẹo đơn giản để duy trì sức khỏe tinh thần tốt trong cuộc sống bận rộn.'
    },
    {
        id: 3,
        title: "Plan your days and weeks to allocate time for Family",
        date: "June 8, 2024",
        thumbnail: images.hero.h3,
        description: 'Khám phá cách coaching có thể giúp bạn vượt qua khó khăn và đạt được mục tiêu.'
    },
    {
        id: 4,
        title: "Building Healthy Habits for a Better Life",
        author: 'By MindCare Team',
        date: "June 5, 2024",
        thumbnail: images.aboutus.picture,
        contentBlock: [
            {
                type: "paragraph",
                text: "In modern busy life, mental health care is often overlooked. However, mental health plays an important role in maintaining balance and happiness. This article will provide some simple tips for daily mental health care."
            },
            {
                type: "image",
                src: images.hero.h2,
                alt: "Meditation and relaxation"
            },
            { type: "heading", text: "1. Practice Breathing Exercises" },
            {
                type: "paragraph",
                text: "Deep breathing can help reduce stress and improve mood. Try the 4-7-8 technique: inhale for 4 seconds, hold for 7 seconds, and exhale for 8 seconds. This technique was developed by Dr. Andrew Weil and has been proven effective in reducing anxiety and improving sleep."
            },
            {
                type: "paragraph",
                text: "When practicing breathing exercises, find a quiet place, sit comfortably, and focus on your breath. Repeat this process several times a day for best results."
            },
            { type: "heading", text: "2. Maintain a Good Sleep Schedule" },
            {
                type: "paragraph",
                text: "Getting enough sleep is the foundation of mental health. Aim for 7–9 hours each night and keep a consistent sleep schedule. Lack of sleep can lead to depression, anxiety, and reduced concentration."
            },
            {
                type: "paragraph",
                text: "Create healthy sleep habits by avoiding electronic devices before bed, keeping your bedroom cool and dark, and avoiding caffeine after noon."
            },
            {
                type: "image",
                src: images.hero.h3,
                alt: "Healthy diet"
            },
            { type: "heading", text: "3. Eat a Healthy Diet" },
            {
                type: "paragraph",
                text: "A balanced diet provides energy for the brain. Include vegetables, fruits, and protein in your daily meals. Foods rich in omega-3 such as salmon, chia seeds, and walnuts can help improve mood."
            },
            {
                type: "paragraph",
                text: "Avoid excessive sugar and processed foods, as they can cause blood sugar fluctuations leading to unstable moods."
            },
            { type: "heading", text: "4. Exercise Regularly" },
            {
                type: "paragraph",
                text: "Physical activity releases endorphins, which improve mood. Even a short walk can make a difference. Regular exercise can reduce symptoms of depression and anxiety."
            },
            {
                type: "paragraph",
                text: "Find an activity you enjoy, whether yoga, running, or dancing. Aim for 150 minutes of moderate-intensity aerobic activity per week."
            },
            {
                type: "image",
                src: images.hero.h3,
                alt: "Social connection"
            },
            { type: "heading", text: "5. Connect with Others" },
            {
                type: "paragraph",
                text: "Social interaction is key to mental health. Spend time talking with family and friends. Social isolation can lead to loneliness and depression."
            },
            {
                type: "paragraph",
                text: "Join clubs, hobby groups, or volunteer. Even small interactions like greeting neighbors can improve mental health."
            },
            { type: "heading", text: "6. Practice Mindfulness" },
            {
                type: "paragraph",
                text: "Mindfulness helps you live in the present and reduce worries about the future. Spend 10–15 minutes each day meditating or practicing mindfulness."
            },
            {
                type: "paragraph",
                text: "There are many free apps like Headspace or Calm that can guide you to start practicing mindfulness."
            },
            { type: "heading", text: "7. Set Boundaries" },
            {
                type: "paragraph",
                text: "Learning to say 'no' and setting healthy boundaries helps prevent burnout and maintain balance in life."
            },
            {
                type: "paragraph",
                text: "Prioritize important activities and learn to delegate tasks when necessary."
            },
            {
                type: "paragraph",
                text: "Taking care of mental health is not a difficult task. By integrating these simple habits into daily life, you can significantly improve your quality of life. Start with one or two small changes and gradually build sustainable habits."
            },
            {
                type: "quote",
                text: "Mental health is just as important as physical health. Take time to care for yourself every day.",
                src: "MindCare Team"
            }

        ]
    },
    {
        id: 5,
        title: "The Power of Mindfulness in Daily Life",
        date: "June 1, 2024",
        thumbnail: images.method.m1
    },
    {
        id: 6,
        title: "How to Achieve Work-Life Balance",
        date: "May 28, 2024",
        thumbnail: images.method.m2
    },
    {
        id: 7,
        title: "Essential Tips for Mental Health Wellness",
        date: "May 25, 2024",
        thumbnail: images.method.m3
    }
];