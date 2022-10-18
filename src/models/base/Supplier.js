import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const courseSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstName: { type: String, required: true },
    lastName: { type: String },
    sortName: { type: String },
    phone: { type: String, required: true, trim: true, unique: true },
    birthday: { type: Date },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    },
    address: { type: String, trim: true },
    avatar: { type: String },
},
    {
        timestamps: true,
        versionKey: false,
    },
);

export default mongoose.model('Supplier', courseSchema);
