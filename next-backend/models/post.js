const mongoose =require("mongoose")
const Schema = mongoose.Schema




const PostSchema = new Schema({
  title: {type:String,
          required:true,
          unique:true, },
  thumbnail:{type:String,
            default:"" },
  id:String,
  summary:{type:String},
  manualDesc:{type:String},
        
  content:{type:String,
          required:true},
  difficulty:{type:String,},

  skills:{type:Array,
          default:[],},
  gitpath:{type:String,
            default:""},
  workImg:{type:String,
            default:""}
},{timestamps:true})

module.exports = mongoose.model("Post",PostSchema)