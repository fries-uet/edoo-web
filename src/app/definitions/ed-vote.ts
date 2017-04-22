import {EdUser} from "./ed-user";

export class EdVote {
    author: EdUser;
    id: string;
    post_id: number;
    comment_id: number;
    type: string;
    up: number;
}