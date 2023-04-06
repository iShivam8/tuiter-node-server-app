import mongoose from 'mongoose';

const schema = mongoose.Schema({
    topic: String,
    username: String,
    handle: String,
    time: String,
    title: String,
    image: String,
    liked: Boolean,
    likes: Number,
    replies: String,
    retuits: Number,
    dislikes: Number,
    disliked: Boolean,
    tuit: String
}, {collection: 'tuits'});

export default schema;