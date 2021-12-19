import { getRepository } from 'typeorm';

import { Post } from '../../entity/Post';

import {makePost} from './dtos/post.makePost.dtos';

export default class postService {
    async makePost(post: makePost){
        const postRepository = getRepository(Post);
        const {texto} = post;
    }
}