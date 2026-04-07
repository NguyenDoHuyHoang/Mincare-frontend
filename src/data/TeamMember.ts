import { images } from "../assets/images";
import type { TeamMember } from "./Types";
// src/data/teamMembers.ts


export const teamMembers: TeamMember[] = [
    {
        id: 1,
        name: "Nguyễn Văn A",
        role: "Chuyên Gia Dinh Dưỡng",
        image: images.team.member1,
        skills: [
            "Leadership",
            "Strategy",
            "Mentoring",
            "Innovation"]
    },
    {
        id: 2,
        name: "Trần Thị B",
        role: "Huấn Luyện Viên Cá Nhân",
        image: images.team.member2,
        skills: [
            "Professional Coaching and Guidance",
            "Cognitive Behavioral Therapy",
            "Individual Counseling Sessions",
            "Emotional Support and Care"]
    },

    {
        id: 3,
        name: "Phạm Văn C",
        role: "Bác Sĩ Tư Vấn Sức Khỏe",
        image: images.team.member3,
        skills: [
            "Motivational Speaking and Workshops",
            "Goal Setting and Achievement Coaching",
            "Personal Development Programs",
            "Leadership Training and Guidance"]
    },
    {
        id: 4,
        name: "Lê Thị D",
        role: "Chuyên Gia Tâm Lý",
        image: images.team.member4,
        skills: [
            "Nutrition",
            "Fitness",
            "Holistic Health",
            "Wellness Planning"]
    },
    {
        id: 5,
        name: "Hoàng Văn E",
        role: "Chuyên Gia Yoga",
        image: images.team.member5
    },
    {
        id: 6,
        name: "Vũ Thị F",
        role: "Chuyên Gia Thiền Định",
        image: images.team.member1
    },
    {
        id: 7,
        name: "Đặng Văn G",
        role: "Huấn Luyện Viên CEO",
        image: images.team.member2
    }

];