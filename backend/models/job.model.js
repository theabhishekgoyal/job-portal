import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: {
    typeof: 'string',
    required: true
  },
  description: {
    type: 'string',
    required: true
  },
  salary: {
    type: 'Number',
    required: true
  },
  location: {
    type: 'string',
    required: true
  },
  jobType: {
    type: 'string',
    required: true
  },
  postion: {
    type: 'Number',
    required: true
  },
  company: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Company',
    required: true
  },
  created_by: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true
  },
  applications: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Application',
  }
});
export const Job = mongoose.model('Job', jobSchema);