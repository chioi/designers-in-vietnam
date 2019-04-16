import React, { useEffect, useState } from "react";
import "./App.css";

interface IPeopleResponse {
  content: IDesigner[];
}

interface IDesigner {
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

const designersURL = `${process.env.REACT_APP_DESIGNERS_API_URL}/people/1`;
const fetchDesigners = () => fetch(designersURL);

const DesignersList = (props: IDesignersListProps) => {
  const designerWrappers = props.designers.map((designer: IDesigner) => (
    <li key={designer.name}>{designer.name}</li>
  ));
  return <ul>{designerWrappers}</ul>;
};

const ConnectionError = () => (
  <div>
    <p>Something went wrong :-(</p>
    <p>Make sure you have internet connection</p>
  </div>
);

const App = () => {
  const [error, saveError] = useState(null);
  const [latestDesigners, saveDesigners] = useState([] as IDesigner[]);
  useEffect(() => {
    fetchDesigners()
      .then((response: Response) => response.json())
      .then((json: IPeopleResponse) => saveDesigners(json.content))
      .catch(saveError);
  }, [latestDesigners]);

  return (
    <main className="App">
      {error && <ConnectionError />}
      <DesignersList designers={latestDesigners} />
    </main>
  );
};

export default App;
