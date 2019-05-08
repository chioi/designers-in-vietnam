import React from "react";
import { create, ReactTestRenderer } from "react-test-renderer";
import Link from "./Link";

describe("When it gets created", () => {
  let component: ReactTestRenderer;

  beforeAll(() => {
    component = create(<Link url="www.test.url">Test Link</Link>);
  });

  it("matches the snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
