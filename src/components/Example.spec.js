import React from "react";

describe("Example test", () => {
  it("test filter by selected props.", () => {
    const selectedProps = ["id", "title", "checked"];
    const exampleTask = {type: "checkbox", id: 100, title: "Task 1", checked: false, label: "100. Task 1"};
    // label: "100. Task 1" must be removed
    const taskTarget = Object.entries(exampleTask).filter(
        ([k, v]) => selectedProps.includes(k)).reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {});

    expect(taskTarget).toEqual({id: 100, title: "Task 1", checked: false});
  });
});
