export interface NewAssignment {
  title: string;
  description: string;
  deadline: string;
  students: string[]
  status: string;
}

export interface Assignment extends NewAssignment {
  createdAt: Date;
  id: string;
  lecturerId: string;
  status: string;
  uniqueCode: string;
  updatedAt: Date;
}

export interface AssignmentsState {
  assignments: Assignment[];
  isLoading: boolean;
  error: string | null;
}
