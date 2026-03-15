import express from "express";
import multer from "multer";

import loadPDF from "../Services/pdfLoader.js";
import splitDocs from "../Services/textSplitter.js";
import storeChunks from "../Services/vectorStore.js";

const router = express.Router();

const upload = multer({ dest: "uploads/" });

router.post("/upload", upload.single("file"), async (req, res) => {

  const filePath = req.file.path;

  const docs = await loadPDF(filePath);

  const chunks = await splitDocs(docs);

  await storeChunks(chunks);

  res.json({
    message: "PDF uploaded and stored in vector DB",
    chunks: chunks.length
  });

});

export default router;