import React from "react";
import TestUtils from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";

import { describe, it, expect } from "../../tester/runner";

const List = require("../src/pages/List").default;

// https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/testing.md
describe("List", () => {
  it("renders three repo links", () => {
    const rendered = TestUtils.renderIntoDocument(
      <MemoryRouter>
        <List />
      </MemoryRouter>
    );
    const repos = TestUtils.scryRenderedDOMComponentsWithTag(rendered, "li");
    expect(repos.length).toEqual(3);
  });
});
