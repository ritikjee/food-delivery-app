import mongoose from 'mongoose'

const resturantSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    addressLine: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true
    },
    pinCode: {
        type: Number,
        required: true
    },
    likes: {
        type: Number,
        default: 0
    },
    dislikes: {
        type: Number,
        default: 0
    },
    followers: {
        type: Number,
        default: 0
    },
    openingTime:{
        type:String,
        default:'9:00'
    },
    closingTime:{
        type:String,
        default:'21:00'
    },
    wholeNightShift:{
        type:Boolean,
        default:false
    },
    foodDelivered:{
        type:Number,
        default:0
    }
    ,
    food: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Food"
        }
    ]
},
    {
        timestamps: true
    })

export default mongoose.models.Resturants || mongoose.model('Resturant', resturantSchema)