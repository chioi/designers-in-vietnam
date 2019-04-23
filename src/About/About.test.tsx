import React from "react";
import {create, ReactTestRenderer} from "react-test-renderer";
import About from "../About";

// TODO: Suppress the linter warnings
jest.mock("@reach/router", () => ({
  Link: ({ children, to }) => <a href={to}>{children}</a>,
}));

describe('gets created', () => {
  let component: ReactTestRenderer;

  beforeAll(() => {
    component = create(<About path="/about" />);
  });

  it('matches the snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
