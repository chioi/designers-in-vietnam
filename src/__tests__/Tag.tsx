import React from "react";
import { act, create, ReactTestRenderer } from "react-test-renderer";
import Tag from "../Tag";

const tag = {
  id: "hs3l233",
  name: "ux"
};

const onClick = jest.fn();

describe("gets created", () => {
  let component: ReactTestRenderer;

  beforeAll(() => {
    component = create(<Tag tag={tag} onClick={onClick} isSelected={false} />);
  });

  it("matches the snapshot", () => {
    expect(component).toMatchSnapshot();
  });

  describe("gets clicked", () => {
    beforeAll(() => {
      component = create(<Tag tag={tag} onClick={onClick} isSelected={true} />);
      act(() => {
        component.root.findByType("label").props.onClick();
      });
    });

    it("calls the onClick function", () => {
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it("matches the snapshot", () => {
      expect(component).toMatchSnapshot();
    });
  });
});
