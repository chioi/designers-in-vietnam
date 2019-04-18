import React, { useEffect, useState } from "react";
import "./App.css";
import ConnectionError from "./ConnectionError";
import { IDesigner } from "./Designer";
import DesignersList from "./DesignersList";
import firestore from "./firestore";
import { ITag } from "./Tag";
import TagsList from "./TagsList";

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
  }, []);

  useEffect(() => {
    fetchFromFirestore<IDesigner>("people")
      .then(saveDesigners)
      .catch(saveError);
  }, []);

  return (
    <main className="App">
      <header>
        <h1 className="main-heading">Designers of Vietnam</h1>
      </header>
      <section>
        <TagsList tags={tags} />
      </section>
      <section>
        {error && designers === [] && <ConnectionError />}
        <DesignersList designers={designers} />
      </section>
    </main>
  );
};

export default App;
