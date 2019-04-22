import React from "react";
import {
  act,
  create,
  ReactTestInstance,
  ReactTestRenderer
} from "react-test-renderer";
import App from "./App";
import ConnectionError from "./ConnectionError";
import Designer from "./Designer";
import DesignersList from "./DesignersList";
import TagsList from './TagsList';
import { designers as initialDesigners } from "./testData/designers";
import mockTags from "./testData/tags";

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
    let designersList: ReactTestInstance;
    let designers: ReactTestInstance[];

    beforeAll(() => {
      // TODO: Remove the next line and fix whatever happens
      jest.unmock("./firestore.ts");
      component = create(<App initialDesigners={initialDesigners} initialTags={mockTags} />);
      designersList = component.root.findByType(DesignersList);
      designers = designersList.findAllByType(Designer);
    });

    it("shows the designer list", () => {
      expect(designers).toHaveLength(2);
    });

    describe("there is a selected tag", () => {
      let tagsList: ReactTestInstance;
      let tag: ReactTestInstance;

      beforeAll(() => {
        /* TODO: Optimize this test. I suspect the lookup by props takes
            a lot of time. */
        tagsList = component.root.findByType(TagsList);
        tag = tagsList.findByProps({id: "Writer-tag"});
        act(() => {
          tag.props.onClick();
        });
      });

      it("only shows the designers with the selected tags", () => {
        expect(designers).toHaveLength(1);
      });
    });
  });
});
