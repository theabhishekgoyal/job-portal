import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  fullname: {
    type: 'string',
    required: true,
  },
  email: {
    type: 'string',
    required: true,
    unique: true
  },
  phone: {
    type: 'Number',
    required: true,
  },
  password: {
    type: 'password',
    required: true,
  },
  role: {
    type: 'string',
    enum: ['student', 'recruiter'],
    required: true,
  },
  profile: {
    bio: {
      type: 'string',
    },
    skills: {
      type: 'string',
    },
    resume: {
      type: 'string', // url
    },
    resumeOriginalName: {
      type: 'string',
    },
    company: {
      type: mongoose.Schema.Types.ObjectId, ref: "Company",
    },
    profilePhoto: {
      type: 'string',
      default: '',
    }
  }

}, { timestamps: true });
export const user = mongoose.model('User', userSchema);