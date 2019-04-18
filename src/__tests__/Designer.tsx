import React from "react";
import { create } from "react-test-renderer";
import Designer from "../Designer";

const designer = {
  location: "Salamanca, Mexico",
  name: "Mario Gil",
  picture: { small: "", large: "" },
  tags: [],
  title: "UX designer",
  urls: {
    personal: "www.google.com"
  }
};

describe("gets created", () => {
  it("matches snapshot", () => {
    expect(create(<Designer designer={designer} />));
  });
});
