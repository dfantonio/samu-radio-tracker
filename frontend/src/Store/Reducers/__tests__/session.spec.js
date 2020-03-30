import sessionReducer, { Creators } from "../../Reducers/session";

describe("Session Reducer Tests", () => {
  it("call successSetToken", () => {
    sessionReducer(undefined, Creators.successSetToken());
  });
});
