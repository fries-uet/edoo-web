import {EdPost} from "./ed-post";
import {EdClass} from "./ed-class";
import {EdComment} from "./ed-comment";
import {EdVote} from "./ed-vote";

export class EdPostDetail extends EdPost {
    public 'class': EdClass;
    public comments: Array<EdComment>;
    public votes: Array<EdVote>;
}