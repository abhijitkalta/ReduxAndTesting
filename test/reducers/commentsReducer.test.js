import { expect } from '../test_helper';
import commentsReducer from '../../src/reducers/commentsReducer';
import { SAVE_COMMENT } from '../../src/actions/types';


describe(" Comments Reducer", () => {
  it(" should handle unknown actions", () => {
    expect(commentsReducer(undefined, {})).to.be.instanceof(Array);
    expect(commentsReducer(undefined, {})).to.eql([]);
  });

  it(" should handle save comment actions", () => {
    const action = { type: SAVE_COMMENT, payload: 'new comment'};
    expect(commentsReducer([], action)).to.be.instanceof(Array);
    expect(commentsReducer([], action)).to.eql(['new comment']);
  });
})
