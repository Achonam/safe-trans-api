 import {Schema, model } from "mongoose";
import argon from "argon2"

    export const UserSchema = new Schema ( 
        {
            username: {
                type : String,
                required: true,
                unique:true
            },
        email: {
            type: String,
            reqiured: true,
            unique: true
        },

        password: {
            type: String,
            reqiured: true,
        },
        profilePicture: {
            type: String,
            default: null,
        },
        role: 
        {
            type: String,
            enum: ['admin', "superadmin", "driver", "user"],
           deault: "user",
        }
    },
    { timestamps: true}
);

UserSchema.pre('save', async function (next) {
    if ( this.isMordified('password')) {
        this.password = await argon.hash(this.password);
    }
    next()
});

export const getSecondsFromNow = (seconds) => {
  const currentTime = new Date();
  currentTime.setSeconds(currentTime.getSeconds() + seconds);
  return currentTime.getTime() / 1000;
};
//  export const user = Schema ('User', 'UserSchema')
export const User = model("User", UserSchema);