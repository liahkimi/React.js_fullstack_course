import{model, Schema} from "mongoose"; 

const userSchema = new Schema({
    id : {type : String, unique: true, required: true}, 
    password : {type : String, required : true},
    name : String,
})

export default model("User", userSchema, "user")