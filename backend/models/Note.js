import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },

    title: {
      type: String,
      required: true
    },

    description: {
      type: String,
      required: true
    },

    category: {
      type: String,
      default: "General"
    },

    tags: {
      type: [String],
      default: []
    },

    pinned: {
      type: Boolean,
      default: false
    },

    favorite: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

const Note = mongoose.model(
  "Note",
  noteSchema
);

export default Note;