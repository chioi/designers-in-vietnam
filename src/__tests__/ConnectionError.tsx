import React from "react";
import { create } from "react-test-renderer";
import ConnectionError from "../ConnectionError";

describe("gets created", () => {
  it("matches the snapshot", () => {
    expect(create(<ConnectionError />)).toMatchSnapshot();
  });
});
