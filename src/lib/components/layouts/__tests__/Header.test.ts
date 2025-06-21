import { describe, expect, test } from "vitest";
import Header from "../Header.svelte";
import {  logRoles, render, screen } from "@testing-library/svelte";

describe("Header", () => {
  test("Should render with proper title", () => {
    const {container}  = render(Header)

    logRoles(container)

    const heading = screen.getByRole("heading", {name: /pok/i})
    expect(heading).toHaveTextContent("Catch")
  })
})