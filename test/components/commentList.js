import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/commentList';

describe(" CommentList ", () => {
  let component;
  beforeEach(() => {
    const props = { comments: ["New comment 1", "New Comment 2"]};
    component = renderComponent(CommentList, null, props);
  });

  it("should have a li for each comment", () => {
    expect(component.find("li").length).to.equal(2);
  });

  it("should display comment as provided", () => {
    expect(component).to.contain("New comment 1");
    expect(component).to.contain("New comment 2");
  });
})
