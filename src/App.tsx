import React, { useEffect, useState } from "react";
import "./App.css";
import ConnectionError from "./ConnectionError";
import DesignersList, { IDesigner } from "./DesignersList";
import firestore from "./firestore";
import TagsList, { ITag } from "./TagsList";

const App = () => {
  const [error, saveError] = useState(null);
  const [designers, saveDesigners] = useState([] as IDesigner[]);
  const [tags, saveTags] = useState([] as ITag[]);

  useEffect(() => {
    firestore
      .collection("tags")
      .get()
      .then(querySnapshot => {
        const latestTags = [] as ITag[];
        querySnapshot.forEach(doc => {
          latestTags.push({ id: doc.id, ...doc.data() } as ITag);
        });
        return latestTags;
      })
      .then(saveTags)
      .catch(saveError);
  }, [tags]);

  useEffect(() => {
    firestore
      .collection("people")
      .get()
      .then(querySnapshot => {
        const latestDesigners = [] as IDesigner[];
        querySnapshot.forEach(doc => {
          latestDesigners.push({ id: doc.id, ...doc.data() } as IDesigner);
        });
        return latestDesigners;
      })
      .then(saveDesigners)
      .catch(saveError);
  }, [designers]);

  return (
    <main className="App">
      <header><h1>Designers in Vietnam</h1></header>
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
