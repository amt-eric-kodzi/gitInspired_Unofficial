export interface User {
  loginId: string;
  password: string;
}

export interface Profile {
  id: string;
  userId: string;
  staffId: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  isVerified: boolean;
  createdAt: Date;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: Profile | null;
}

export interface ResetPassword{
  newPassword: string;
}