import React from 'react';
import { shallow } from 'enzyme';
import TodoContainer from "../container/TodoContainer";

describe('TodoContainer', () => {
  describe('#render', () => {
    it('should do smtg', () => {
      const wrapp = shallow(<TodoContainer />);
      console.log(wrapp.debug());
    });
  });
});
