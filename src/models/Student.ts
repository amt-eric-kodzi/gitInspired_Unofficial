export interface NewStudent {
    firstName: string;
    lastName: string;
    email: string;
  }
  
  export interface Student extends NewStudent {
    id: string;
    userId: string;
    staffId: string;
  }

export interface StudentsState {
    students: Student[];
    isLoading: boolean;
    error: string | null;
  }