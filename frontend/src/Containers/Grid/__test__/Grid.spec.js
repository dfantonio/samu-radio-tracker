import ReactDOM from "react-dom";
import React from "react";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import { Grid } from "..";

describe("Grid Component Test", () => {
  const div = document.createElement("div");

  it("should render with header and footer", () => {
    const mockStore = configureMockStore();
    const store = mockStore({
      router: {
        location: {
          pathname: "/"
        }
      },
      user: {
        name: "Antônio"
      }
    });
    ReactDOM.render(
      <Provider store={store}>
        <Grid>
          <p>Paragraph</p>
        </Grid>
      </Provider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should render without header and footer", () => {
    const mockStore = configureMockStore();
    const store = mockStore({
      router: {
        location: {
          pathname: undefined
        }
      },
      user: {
        name: "Antônio"
      }
    });
    ReactDOM.render(
      <Provider store={store}>
        <Grid>
          <p>Paragraph</p>
        </Grid>
      </Provider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
