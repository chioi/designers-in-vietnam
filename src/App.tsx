import React, { useEffect, useState } from "react";
import "./App.css";
import ConnectionError from './ConnectionError';
import firestore from "./firestore";

interface IDesigner {
  id?: string;
  name: string;
  location: string;
  urls: {
    personal: string;
    social?: string;
  };
  picture: {
    small: string;
    large: string;
  };
  tags: string[];
}

interface IDesignersListProps {
  designers: IDesigner[];
}

const DesignersList = (props: IDesignersListProps) => {
  const designerWrappers = props.designers.map((designer: IDesigner) => (
    <li key={designer.name}>{designer.name}</li>
  ));
  return <ul>{designerWrappers}</ul>;
};

const App = () => {
  const [error, saveError] = useState(null);
  const [designers, saveDesigners] = useState([] as IDesigner[]);

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
      {error && <ConnectionError />}
      <DesignersList designers={designers} />
    </main>
  );
};

export default App;
