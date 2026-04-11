export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

export const users: User[] = [
  { id: 1, name: "Hoang", email: "hoang@example.com", password: "123456" },
  { id: 2, name: "Admin", email: "admin@example.com", password: "admin123" },
];

export const verifyLogin = (email: string, password: string): User | null => {
  return users.find(u => u.email === email && u.password === password) || null;
};