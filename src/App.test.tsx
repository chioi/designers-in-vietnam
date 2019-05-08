import React from "react";
import {
  act,
  create,
  ReactTestInstance,
  ReactTestRenderer
} from "react-test-renderer";
import App, { getSelectedDesigners, hasASelectedTag, tagLookup } from "./App";
import ConnectionError from "./ConnectionError";
import Designer from "./Designer";
import DesignersList from "./DesignersList";
import { ITag } from "./Tag";
import TagsList from "./TagList";
import { designers as initialDesigners } from "./testData/designers";
import mockTags from "./testData/tags";

jest.mock("./firebase");

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
      // TODO: I don't think the component creation should be wrapped in act()
      // there is a discussion here https://github.com/facebook/react/issues/14769
      component = create(
        <App initialDesigners={initialDesigners} initialTags={mockTags} />
      );
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
        tagsList = component.root.findByType(TagsList);
        tag = tagsList.findByProps({ id: "Writer-tag" });
        act(() => {
          tag.props.onClick();
        });
      });

      it("only shows the designers with the selected tags", () => {
        designersList = component.root.findByType(DesignersList);
        designers = designersList.findAllByType(Designer);
        expect(designers).toHaveLength(1);
      });
    });
  });
});

describe("tag utilities", () => {
  const tags = new Map<string, ITag>();
  beforeAll(() => {
    tags.set(mockTags[0].name, mockTags[0]);
    tags.set(mockTags[1].name, mockTags[1]);
  });

  describe("tag lookup", () => {
    describe("when the tag is present", () => {
      it("returns true", () => {
        expect(tagLookup(tags)(mockTags[0].name)).toBe(true);
      });
    });

    describe("when the tag is not present", () => {
      it("returns false", () => {
        expect(tagLookup(tags)("zoroaster")).toBe(false);
      });
    });
  });

  describe("tag intersection", () => {
    describe("when it has at least one selected tag", () => {
      it("returns true", () => {
        expect(hasASelectedTag(tagLookup(tags))(initialDesigners[1])).toBe(
          true
        );
      });
    });

    describe("when it does not have at least one selected tag", () => {
      it("returns false", () => {
        expect(hasASelectedTag(tagLookup(tags))(initialDesigners[0])).toBe(
          false
        );
      });
    });
  });

  describe("designer filtering", () => {
    beforeAll(() => {
      tags.delete(mockTags[0].name);
    });

    it("filters the designers who do not have a selected tag", () => {
      expect(getSelectedDesigners(tags, initialDesigners)).toEqual([
        initialDesigners[1]
      ]);
    });
  });
});
