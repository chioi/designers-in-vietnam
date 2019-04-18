import React, { useEffect, useState } from "react";
import "./App.css";
import ConnectionError from "./ConnectionError";
import DesignersList, { IDesigner } from "./DesignersList";
import firestore from "./firestore";
import TagsList, { ITag } from "./TagsList";

interface IFirestoreDocument {
  id?: string;
}

const fetchFromFirestore = <T extends IFirestoreDocument>(
  collection: string
): Promise<T[]> => {
  return firestore
    .collection(collection)
    .get()
    .then(querySnapshot => {
      const latestTags: T[] = [];
      querySnapshot.forEach(doc => {
        latestTags.push({ id: doc.id, ...doc.data() } as T);
      });
      return latestTags;
    });
};

const App = () => {
  const [error, saveError] = useState(null);
  const [designers, saveDesigners] = useState([] as IDesigner[]);
  const [tags, saveTags] = useState([] as ITag[]);

  useEffect(() => {
    fetchFromFirestore<ITag>("tags")
      .then(saveTags)
      .catch(saveError);
  }, [tags]);

  useEffect(() => {
    fetchFromFirestore<IDesigner>("people")
      .then(saveDesigners)
      .catch(saveError);
  }, [designers]);

  return (
    <main className="App">
      <header>
        <h1>Designers in Vietnam</h1>
      </header>
      <section>
        <TagsList tags={tags} />
      </section>
      <section>
        {error && <ConnectionError />}
        <DesignersList designers={designers} />
      </section>
    </main>
  );
};

export default App;
