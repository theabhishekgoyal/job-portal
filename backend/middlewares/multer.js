import multer from "multer";

const storage = multer.memoryStorage(); // Use memory storage to keep files in memory
export const singleUpload = multer({ storage }).single("file");



