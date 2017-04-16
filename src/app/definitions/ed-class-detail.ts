import {EdPost} from "./ed-post";

export class EdClassDetail {
    class_id: string;
    code: string;
    credit_count: number;
    name: string;
    pagination: any;
    posts: Array<EdPost>;
    semester: string;
    student_count: number;
    teacher_name: string;
    type: string;
}
