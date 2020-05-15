/* tslint:disable:no-unused-variable */

import { ReversePipe } from "./reverse.pipe";
import { TestBed } from "@angular/core/testing";

describe("Pipe: ReversePipe", () => {
  it("should create the app", () => {
    let reversePipe = new ReversePipe();
    expect(reversePipe.transform("hello")).toEqual("olleh");
  });
});
