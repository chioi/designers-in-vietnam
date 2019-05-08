import { RouteComponentProps } from "@reach/router";
import React, { FC, useCallback, useEffect, useState } from "react";
import ReactGA from "react-ga";
import "./App.css";
import ConnectionError from "./ConnectionError";
import { IDesigner } from "./Designer";
import DesignersList from "./DesignersList";
import { firestore } from "./firebase";
import { ITag } from "./Tag";
import TagsList from "./TagList";
import "./global.sass";

interface IFirestoreDocument {
  id?: string;
}

interface IAppProps extends RouteComponentProps {
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

export const tagLookup = (tags: Map<string, ITag>) => (name: string) =>
  tags.has(name);

export const hasASelectedTag = (predicate: (x: string) => boolean) => (
  designer: IDesigner
) => {
  return designer.tags.some(predicate);
};

export const getSelectedDesigners = (
  selectedTags: Map<string, ITag>,
  designers: IDesigner[]
) => {
  if (selectedTags.size === 0) {
    return designers;
  } else {
    const isSelectedTag = tagLookup(selectedTags);
    return designers.filter(hasASelectedTag(isSelectedTag));
  }
};

const App: FC<IAppProps> = ({ initialDesigners = [], initialTags = [] }) => {
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
    fetchFromFirestore<IDesigner>(process.env.REACT_APP_PEOPLE_COLLECTION || "")
      .then(saveDesigners)
      .catch(saveError);
  }, []);

  const memoGetSelectedDesigners = useCallback(getSelectedDesigners, [
    selectedTags,
    designers
  ]);

  const selectedDesigners = memoGetSelectedDesigners(selectedTags, designers);

  if (process.env.NODE_ENV === "production") {
    ReactGA.pageview("/home");
  }
  return (
    <>
      <section>
        <TagsList
          tags={tags}
          selectTag={selectTag}
          selectedTags={selectedTags}
        />
      </section>
      <section>
        {error && selectedDesigners === [] && <ConnectionError />}
        <DesignersList designers={selectedDesigners} />
      </section>
    </>
  );
};

export default App;
