import React from "react";
import { create, ReactTestRenderer } from "react-test-renderer";
import DesignersList from "../DesignersList";
import {designers} from "../testData/designers";

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
