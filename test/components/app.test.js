import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('renders something', () => {
    expect(component).to.exist;
    expect(component).to.not.contain('React simple starter');
  });

  it("should have a comment box", () => {
    expect(component.find(".comment-box")).to.exist;
  });

  it("should have a comment list", () => {
    expect(component.find(".comment-list")).to.exist;
  });
});
