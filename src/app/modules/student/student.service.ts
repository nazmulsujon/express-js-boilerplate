import { Student } from './student.interface';
import { StudentModel } from './student.model';

const createStudentIntoDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return {
    ...result.toObject(),
    createdAt: result.createdAt,
    updatedAt: result.updatedAt,
  };
};

const getStudentFromDB = async () => {
  const results = await StudentModel.find();
  return results.map((student) => ({
    ...student.toObject(),
    createdAt: student.createdAt,
    updatedAt: student.updatedAt,
  }));
};

const getSingleStudentFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  if (!result) throw new Error('Student not found');
  return {
    ...result.toObject(),
    createdAt: result.createdAt,
    updatedAt: result.updatedAt,
  };
};

export const StudentServices = {
  createStudentIntoDB,
  getStudentFromDB,
  getSingleStudentFromDB,
};
