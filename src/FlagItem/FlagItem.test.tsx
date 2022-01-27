import React from "react";
import { mount } from "enzyme";
import FlagItem from "./FlagItem";
import { BrowserRouter } from "react-router-dom";
import { useState as useStateMock } from "react";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

describe("FlagItem", () => {
  let wrapper: any;

  const setState = jest.fn();

  beforeEach(() => {
    (useStateMock as jest.Mock).mockImplementation((initState) => [
      initState,
      setState,
    ]);
    wrapper = mount(
      <BrowserRouter>
        <FlagItem
          updateItem={function (param: any): void {
            throw new Error("Function not implemented.");
          }}
          section={""}
          id={0}
          name={""}
          isOn={false}
          subflags={[]}
          inputNotes={{
            input: "20",
            options: ["10", "20", "30", "40"],
          }}
        />
      </BrowserRouter>
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders", () => {
    expect(wrapper).toBeTruthy();
  });
});
