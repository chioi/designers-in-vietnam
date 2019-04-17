const collection = (name: string) => {
  const collections: { [index: string]: any } = {
    people: {
      get: () => {
        return new Promise(resolve => {
          resolve([]);
        });
      }
    }
  };

  return collections[name];
};

const firestore = {
  collection
};

export default firestore;
