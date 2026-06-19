import API from "./api";

export const getNotes = async () => {
  const response =
    await API.get("/notes");

  return response.data;
};

export const createNote = async (
  noteData
) => {
  const response =
    await API.post(
      "/notes",
      noteData
    );

  return response.data;
};

export const updateNote = async (
  id,
  noteData
) => {
  const response =
    await API.put(
      `/notes/${id}`,
      noteData
    );

  return response.data;
};

export const deleteNote = async (
  id
) => {
  const response =
    await API.delete(
      `/notes/${id}`
    );

  return response.data;
};