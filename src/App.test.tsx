import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import App from './App';
import Board from './Board';
import Cell from './Cell'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('sanity test', () => {
  const wrapper = shallow(<App/>)
  expect(wrapper.find('.app')).toHaveLength(1)
})

describe.skip('app', () => {
  let wrapper:any = null
  beforeEach(() => {
    wrapper = mount(<App/>)
  })

  describe('should render', () => {
    it('.app container element', () => {
      expect(wrapper.find('.app')).toHaveLength(1)
    })
    it('Board component', () => {
      expect(wrapper.find(Board)).toHaveLength(1)
    })
    it('Cell component', () => {
      expect(wrapper.find(Cell)).toHaveLength(400)
    })    
  })
})

