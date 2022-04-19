import React from "react";
import { render } from "@testing-library/react";
import Button from "./index";


test("Should render isDisabled", () => {
    const { container } = render(<Button type="button" isDisabled></Button>);
    expect(container.querySelector("div")).toBeInTheDocument();
  });

  test("Should render isPrimary", () => {
    const { container } = render(<Button type="button" isPrimary></Button>);
    expect(container.querySelector("div")).toBeInTheDocument();
  });
    