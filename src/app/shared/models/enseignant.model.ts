import { Department } from "../enum/department.enum";
import { Grade } from "../enum/grade.enum";

export class Enseignant {
    email: string;
    name: string;
    lastName: string;
    discipline: string;
    department: Department;
    grade: Grade;
}
