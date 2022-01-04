import mongoose from 'mongoose';
const {Schema,model} = mongoose;

const contactsSchema = Schema({
    contactName:{
        type : String,
        required : true

    },

    contactNumber:{
        type:String,
        required:true 
    },

    contactEmail:{
        type: String,
        required: false
    },

    contactGroup:{
        type: String,
        required: false
    }
});

const contactsModel= model('contact', contactsSchema);
export default contactsModel;
