import React from "react";
import { create, ReactTestRenderer } from "react-test-renderer";
import { ITag } from "../Tag";
import TagsList from "../TagList";

const tags: ITag[] = [
  {
    id: "jjs234l",
    name: "UX"
  }
];

const selectTag = jest.fn();

describe("gets created", () => {
  describe("without tags", () => {
    let component: ReactTestRenderer;

    beforeAll(() => {
      component = create(
        <TagsList tags={[]} selectedTags={new Map()} selectTag={selectTag} />
      );
    });

    it("has no list elements", () => {
      expect(component.root.findAllByType("li")).toHaveLength(0);
    });

    it("matches the snapshot", () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe("with tags", () => {
    let component: ReactTestRenderer;

    beforeAll(() => {
      component = create(
        <TagsList tags={tags} selectedTags={new Map()} selectTag={selectTag} />
      );
    });

    it("has no list elements", () => {
      expect(component.root.findAllByType("li")).toHaveLength(tags.length);
    });

    it("matches the snapshot", () => {
      expect(component).toMatchSnapshot();
    });
  });
});
