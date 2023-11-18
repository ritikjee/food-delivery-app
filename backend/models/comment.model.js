import mongoose from 'mongoose';

const CommentSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    resturant:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Resturant",
        required:true
    },
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Food",
        required:true
    },
    comment:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    }
},{
    timestamps:true
});


const Comment = mongoose.model('Comment', CommentSchema);
export default Comment|| mongoose.models.Comments;