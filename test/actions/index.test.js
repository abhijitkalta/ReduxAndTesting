import { expect } from '../test_helper';
import { SAVE_COMMENT } from "../../src/actions/types";
import { saveComment } from "../../src/actions/index";

describe(" Actions ", () => {
  describe(" Save Action Creator", () => {
    it(" should have the correct type", () => {
      const action = saveComment();
      expect(action.type).to.equal(SAVE_COMMENT);
    });

    it(" should have the correct payload", () => {
      const action = saveComment("New Comment");
      expect(action.payload).to.equal("New Comment");
    });
  });
});
