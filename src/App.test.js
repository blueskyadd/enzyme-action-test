import React from "react";
import { shallow, mount } from "enzyme";
import 'jsdom-global/register';
import App from "./App";

describe("Todo", () => {
  //将一个组件渲染成虚拟DOM对象，但是只渲染第一层，不渲染所有子组件，所以处理速度非常快
    it("组件渲染", () => {
        shallow(<App />);
    }) 
    it("查询li个数", () => {
      const wrapper = mount(<App />);
      expect(wrapper.find("li")).toHaveLength(2);
    });
    it("调用addList", () => {
      const wrapper = mount(<App />);
      wrapper.find("input").instance().value = "新增加一个";
      expect(wrapper.find("input").instance().value).toEqual("新增加一个");
      wrapper.find('[type="submit"]').simulate("click");
      expect(wrapper.find("li")).toHaveLength(3);
      expect(wrapper.find("li div span").last().text()).toEqual("新增加一个");
    });

    it("调用removeTodo", () => {
      const wrapper = mount(<App />);
      wrapper.find("li button").first().simulate('click');
      expect(wrapper.find("li")).toHaveLength(1);
      expect(wrapper.find("li div span").last().text()).toEqual("Take out the trash");
    })
});