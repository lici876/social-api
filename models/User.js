const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Thoughts",
    },
  ],
    friends:[
        {
            type: Schema.Types.ObjectId,
            ref: "User",
        }
    ]
},
{
    toJson:{
        virtuals: true,
    },
    id:false,
}
)


const User = model("User",userSchema);

module.exports = User;