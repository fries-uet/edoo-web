import {EdUser} from "./ed-user";

export class EdPost {
    id: number;
    author: EdUser;
    class_id: string;
    comment_count: number;
    content: string;
    created_at: string;
    description: string;
    is_incognito: boolean;
    is_post_teacher: boolean;
    is_seen: boolean;
    is_solve: boolean;
    tag: string;
    title: string;
    type: string;
    updated_at: string;
    vote_count: number;
}
