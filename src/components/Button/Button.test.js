import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount } from "enzyme";
import Button from "./Button";

it("renders without crashing", () => {
  const button = shallow(<Button />);
  expect(button).toMatchSnapshot();
});

it("renders with `text` prop and `children`", () => {
  const text = "Test";
  let button = mount(<Button>{text}</Button>);
  expect(button.text()).toBe(text);

  button = mount(<Button text={text} />);
  expect(button.text()).toBe(text);
});

it("renders with proper classes/styles", () => {
  const text = "Test";
  let button = mount(<Button className="other">{text}</Button>);
  expect(button.find("button").hasClass("button")).toBeTruthy(); // bulma specific
  expect(button.find("button").hasClass("other")).toBeTruthy(); // via props
});
