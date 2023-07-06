export interface NewLecturer {
    firstName: string;
    lastName: string;
    email: string;
  }
  
  export interface Lecturer extends NewLecturer {
    id: string;
    userId: string;
    lecturerId: string;
  }

export interface LecturersState {
    lecturers: Lecturer[];
    isLoading: boolean;
    error: string | null;
  }