import Note from "../models/Note.js";

// Create Note
export const createNote = async (
  req,
  res
) => {
  try {
    const {
      title,
      description,
      category,
      tags,
      color,
    } = req.body;

    const note = await Note.create({
      user: req.user._id,
      title,
      description,
      category,
      tags,
      color,
    });

    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Notes
export const getNotes = async (
  req,
  res
) => {
  try {
    const notes = await Note.find({
      user: req.user._id,
    }).sort({
      createdAt: -1,
    });

    res.json(notes);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Update Note
export const updateNote = async (
  req,
  res
) => {
  try {
    const note = await Note.findById(
      req.params.id
    );

    if (!note) {
      return res.status(404).json({
        message: "Note not found",
      });
    }

    note.title =
      req.body.title || note.title;

    note.description =
      req.body.description ||
      note.description;

    note.category =
      req.body.category ||
      note.category;

    note.pinned =
      req.body.pinned ??
      note.pinned;

    note.favorite =
      req.body.favorite ??
      note.favorite;

    note.tags =
      req.body.tags || note.tags;

    note.color =
      req.body.color || note.color;

    const updated =
      await note.save();

    res.json(updated);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Note
export const deleteNote = async (
  req,
  res
) => {
  try {
    const note = await Note.findById(
      req.params.id
    );

    if (!note) {
      return res.status(404).json({
        message: "Note not found",
      });
    }

    await note.deleteOne();

    res.json({
      message:
        "Note deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};