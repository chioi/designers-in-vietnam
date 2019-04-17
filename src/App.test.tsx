import React from "react";
import { create, ReactTestRenderer } from "react-test-renderer";
import App from "./App";
import ConnectionError from "./ConnectionError";
import DesignersList from "./DesignersList";

describe("gets created", () => {
  describe.skip("has error", () => {
    // TODO: Find out how to mock an error
    let component: ReactTestRenderer;

    beforeAll(() => {
      component = create(<App />);
    });

    it("shows the error message", () => {
      expect(component.root.findAllByType(ConnectionError)).toHaveLength(1);
    });

    it("does not show the designer list", () => {
      expect(component.root.findAllByType(DesignersList)).toHaveLength(0);
    });
  });

  describe("has no error", () => {
    let component: ReactTestRenderer;

    beforeAll(() => {
      jest.unmock('./firestore.ts');
      component = create(<App />);
    });

    it("shows the designer list", () => {
      expect(component.root.findAllByType(DesignersList)).toHaveLength(1);
    });
  });
});
