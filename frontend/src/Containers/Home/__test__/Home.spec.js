import Home from "../Home";
import React from "react";
import ReactDOM from "react-dom";

import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import { mount } from "enzyme";

const mockStore = configureMockStore();
const store = mockStore({ user: { error: { phone: "Telefone Inválido" } } });

describe("Home test", () => {
  it("Render", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Provider store={store}>
        <Home />
      </Provider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Should submit with value", () => {
    const wrapper = mount(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    wrapper
      .find("form")
      .simulate("submit", { target: { phone: { value: "5499999999" } } });
  });

  it("Render and Click on 'OK' button", () => {
    const element = mount(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    element
      .find({ name: "btnOk" })
      .at(2)
      .simulate("click");
  });
});
