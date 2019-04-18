import React from "react";
import { create, ReactTestRenderer } from "react-test-renderer";
import { IDesigner } from "../Designer";
import DesignersList from "../DesignersList";

const designers: IDesigner[] = [
  {
    location: "Salamanca, Mexico",
    name: "Mario Gil",
    picture: { small: "", large: "" },
    tags: [],
    title: "UX designer",
    urls: {
      personal: "www.google.com"
    }
  }
];

describe("gets created", () => {
  describe("without designers", () => {
    let component: ReactTestRenderer;

    beforeAll(() => {
      component = create(<DesignersList designers={[]} />);
    });

    it("has no list elements", () => {
      expect(component.root.findAllByType("li")).toHaveLength(0);
    });

    it("matches the snapshot", () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe("with designers", () => {
    let component: ReactTestRenderer;

    beforeAll(() => {
      component = create(<DesignersList designers={designers} />);
    });

    it(`has ${designers.length} list elements`, () => {
      expect(component.root.findAllByProps({ designer: designers[0] })).toHaveLength(1);
    });

    it("matches the snapshot", () => {
      expect(component).toMatchSnapshot();
    });
  });
});
