import React from "react";
import {create, ReactTestRenderer} from "react-test-renderer";
import MainHeader from "./index";

describe("gets created", () => {
  let component: ReactTestRenderer;

  beforeAll(() => {
    component = create(<MainHeader />);
  });

  it("matches the snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
