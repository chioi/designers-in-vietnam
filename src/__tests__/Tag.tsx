import React from "react";
import { act, create, ReactTestRenderer } from "react-test-renderer";
import Tag from "../Tag";

const tag = {
  id: "hs3l233",
  name: "ux"
};

describe("gets created", () => {
  let component: ReactTestRenderer;

  beforeAll(() => {
    component = create(<Tag tag={tag} />);
  });

  it("matches the snapshot", () => {
    expect(component).toMatchSnapshot();
  });

  describe("gets clicked", () => {
    beforeAll(() => {
      act(() => {
        component.root.findByType("label").props.onClick();
      });
    });

    it("matches the snapshot", () => {
      expect(component).toMatchSnapshot();
    });
  });
});
