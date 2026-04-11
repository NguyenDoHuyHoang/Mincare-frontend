// src/data/UserData.ts

import { images } from "../assets/images";

export interface CouponData {
  code: string;
  discount: string;
  expiry: string;
}

export interface OrderData {
  id: string;
  course: string;
  date: string;
  price: string;
  paymentMethod: string;
  couponCode: string;
  quantity: number;
}

export interface UserProfile {
  id: number;
  username: string;
  password: string;
  fullName: string;
  email: string;
  phone: string;
  avatar: string;
  gender: string;
  address: string;
  dateOfBirth: string;
  idCard: string;
  points: number;
  coupons: CouponData[];
  orders: OrderData[];
  shippingAddress: string;
  additionalAddress: string;
  shippingPreference: string;
}

export const USERS: UserProfile[] = [
  {
    id: 1,
    username: "admin",
    password: "123456",
    fullName: "Tuan Tran",
    email: "tuantran@gmail.com",
    phone: "+84 915 659 223",
    avatar: images.team.member1,
    gender: "Male",
    address: "130 Xo Viet Nghe Tinh, Binh Thanh, HCMC",
    dateOfBirth: "01/11/1999",
    idCard: "362209685",
    points: 1250,
    shippingAddress: "130 Xo Viet Nghe Tinh, Binh Thanh, HCMC",
    additionalAddress: "",
    shippingPreference: "standard",
    coupons: [
      { code: "SAVE10", discount: "10% off", expiry: "12/31/2025" },
      { code: "WELCOME20", discount: "$20 off", expiry: "11/15/2025" },
    ],
    orders: [
      {
        id: "UD-20231001-1234567890",
        course: "Introduction to Coaching",
        date: "2023-10-01",
        price: "$0.00",
        paymentMethod: "Free Coupon",
        couponCode: "FREECOURSE2023",
        quantity: 1,
      },
      {
        id: "UD-20230915-0987654321",
        course: "Basic Life Skills",
        date: "2023-09-15",
        price: "$0.00",
        paymentMethod: "Free Coupon",
        couponCode: "FREECOURSE2023",
        quantity: 1,
      },
      {
        id: "UD-20230820-1122334455",
        course: "Mindfulness Fundamentals",
        date: "2023-08-20",
        price: "$0.00",
        paymentMethod: "Free Coupon",
        couponCode: "FREECOURSE2023",
        quantity: 1,
      },
    ],
  },
  {
    id: 2,
    username: "user",
    password: "password",
    fullName: "Nguyen Van A",
    email: "nguyenvana@example.com",
    phone: "+84 123 456 789",
    avatar: images.team.member2,
    gender: "Male",
    address: "123 ABC Street, XYZ District, HCMC",
    dateOfBirth: "05/05/1995",
    idCard: "123456789",
    points: 500,
    shippingAddress: "123 ABC Street, XYZ District, HCMC",
    additionalAddress: "",
    shippingPreference: "express",
    coupons: [{ code: "SAVE10", discount: "10% off", expiry: "12/31/2025" }],
    orders: [],
  },
];

/**
 * Validate login credentials against user data
 * Returns the matching user or null
 */
export function validateLogin(username: string, password: string): UserProfile | null {
  return USERS.find((u) => u.username === username && u.password === password) ?? null;
}

/**
 * Get user by id
 */
export function getUserById(id: number): UserProfile | null {
  return USERS.find((u) => u.id === id) ?? null;
}
