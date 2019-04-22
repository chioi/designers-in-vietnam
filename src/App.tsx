import React, {FC, useCallback, useEffect, useState} from "react";
import "./App.css";
import Stroke from "./assets/long-stroke.svg";
import ConnectionError from "./ConnectionError";
import { IDesigner } from "./Designer";
import DesignersList from "./DesignersList";
import firestore from "./firestore";
import { ITag } from "./Tag";
import TagsList from "./TagsList";

interface IFirestoreDocument {
  id?: string;
}

interface IAppProps {
  initialDesigners?: IDesigner[];
  initialTags?: ITag[];
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

const App:FC<IAppProps> = ({ initialDesigners = [], initialTags = [] }) => {
  const [error, saveError] = useState(null);
  const [designers, saveDesigners] = useState(initialDesigners);
  const [tags, saveTags] = useState(initialTags);
  const [selectedTags, saveSelectedTags] = useState(new Map());
  const selectTag = useCallback((tag: ITag) => {
    if (selectedTags.has(tag.name)) {
      selectedTags.delete(tag.name);
    } else {
      selectedTags.set(tag.name, tag);
    }
    saveSelectedTags(new Map(selectedTags));
  }, []);

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
      <header className="margin-bottom-large">
        <h1 className="main-heading">Designers of Vietnam</h1>
        <img alt="A brush stroke" src={Stroke} />
      </header>
      <section>
        <TagsList
          tags={tags}
          selectTag={selectTag}
          selectedTags={selectedTags}
        />
      </section>
      <section>
        {error && designers === [] && <ConnectionError />}
        <DesignersList designers={designers} />
      </section>
    </main>
  );
};

export default App;
