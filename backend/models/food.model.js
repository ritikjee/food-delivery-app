import  mongoose from "mongoose"

const foodSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    mediumSize: {
        type: Number,
        required: true,
    },
    largeSize: {
        type: Number,
        required: true,
    },
    quantity: {
        type: String
    },
    isNonVeg: {
        type: Boolean,
        required: true
    },
    ratings: {
        type: Number,
        default: 0
    },
    likes: {
        type: Number,
        default: 0
    },
    dislikes: {
        type: Number,
        default: 0
    },
    discount:{
        type:Number,
        default:0
    },
    unitsSold:{
        type:Number,
        default:0
    },
    resturant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Resturant"
    }

},
    {
        timestamps: true
    }
)

export default mongoose.models.Foods||mongoose.model('Food',foodSchema)