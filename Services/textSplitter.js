import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";

const splitDocs = async (docs) => {

  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 200
  });

  const chunks = await splitter.splitDocuments(docs);

  return chunks;
};

export default splitDocs;