export const findFolder = (folders = [], folderId) =>
  folders.find((folder) => folder.id === parseFloat(folderId));

export const findNote = (notes = [], noteId) =>
  notes.find((note) => note.id === parseFloat(noteId));

export const getNotesForFolder = (notes = [], folderId) =>
  !folderId
    ? notes
    : notes.filter((note) => note.folder_id === parseFloat(folderId));

export const countNotesForFolder = (notes = [], folderId) =>
  notes.filter((note) => note.folder_id === parseFloat(folderId)).length;
