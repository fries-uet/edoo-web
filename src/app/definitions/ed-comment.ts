import {EdUser} from "./ed-user";

export class EdComment {
    id: number;
    content: string;
    is_solve: boolean;
    is_incognito: boolean;
    post_id: number;
    author: EdUser;
    votes: Array<any>;
    vote_count: number;
}