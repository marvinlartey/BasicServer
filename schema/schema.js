import mongoose from 'mongoose';
const {Schema,model} = mongoose;

const profileSchema = Schema({
    firstName:{
        type : String,
        required : true

    },

    LastName:{
        type:String,
        required:true 
    },

    dateOfBirth:{
        type: String,
        required: true
    },

    school:{
        type: String,
        required: true
    }
});

const profileModel= model('profile', profileSchema);
export default profileModel;
