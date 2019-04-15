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

const designersURL = "http://localhost:5000/people/1";
const fetchDesigners = () => fetch(designersURL);

const DesignersList = (props: IDesignersListProps) => {
  const designerWrappers = props.designers.map((designer: IDesigner) => (
    <li key={designer.name}>{designer.name}</li>
  ));
  return <ul>{designerWrappers}</ul>;
};

const App = () => {
  const [latestDesigners, saveDesigners] = useState([] as IDesigner[]);
  useEffect(() => {
    fetchDesigners()
      .then((response: Response) => response.json())
      .then((json: IPeopleResponse) => saveDesigners(json.content));
  });

  return (
    <main className="App">
      <DesignersList designers={latestDesigners} />
    </main>
  );
};

export default App;
