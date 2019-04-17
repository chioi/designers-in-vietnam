import React from "react";
import { create, ReactTestRenderer } from "react-test-renderer";
import TagsList, { ITag } from "../TagsList";

const tags: ITag[] = [
  {
    id: "jjs234l",
    name: "UX"
  }
];

describe("gets created", () => {
  describe("without tags", () => {
    let component: ReactTestRenderer;

    beforeAll(() => {
      component = create(<TagsList tags={[]} />);
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
      component = create(<TagsList tags={tags} />);
    });

    it("has no list elements", () => {
      expect(component.root.findAllByType("li")).toHaveLength(tags.length);
    });

    it("matches the snapshot", () => {
      expect(component).toMatchSnapshot();
    });
  });
});
