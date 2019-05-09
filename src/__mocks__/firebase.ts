import { designers } from "../testData/designers";
import tags from "../testData/tags";

const collection = (name: string) => {
  const collections: { [index: string]: any } = {
    tags: {
      get: () => {
        return new Promise(resolve => {
          resolve(tags);
        });
      }
    },
    "test-people": {
      get: () => {
        return new Promise(resolve => {
          resolve(designers);
        });
      }
    },
  };

  return collections[name];
};

export const firestore = {
  collection
};

const app = {
  firestore: () => firestore
}

export default app;
