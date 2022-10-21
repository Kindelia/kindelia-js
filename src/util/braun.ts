import * as rustie from "rustie";
import { if_let } from "rustie";

import { TermJson } from "../types";

// Braun Tree
// ==========

export type BraunTree<T> = rustie.Enum<{
  Node: { value: T; left: BraunTree<T>; right: BraunTree<T> };
  Leaf: null;
}>;

// TODO: fix order
export const braun_tree_to_array = <T>(tree: BraunTree<T>): T[] =>
  if_let(tree)("Node")((n) => [
    n.value,
    ...braun_tree_to_array(n.left),
    ...braun_tree_to_array(n.right),
  ])(() => []);

// Converstion from Kindelia term
// ==============================

export type BraunTagsOpt = { leaf: string; node: string };
export const BRAUN_DEFAULT_TAGS: BraunTagsOpt = {
  leaf: "BrTree_leaf",
  node: "BrTree_node",
};

export const term_to_braun_tree =
  (tags: BraunTagsOpt = BRAUN_DEFAULT_TAGS) =>
  <T>(tree: TermJson): BraunTree<T> =>
    if_let(tree)("Ctr")((c) => {
      if (c.name == tags.leaf) {
        return { Leaf: null };
      } else if (c.name == tags.node) {
        let [value, left, right] = c.args;
        return {
          Node: {
            value: value as T,
            left: term_to_braun_tree(tags)<T>(left),
            right: term_to_braun_tree(tags)<T>(right),
          },
        };
      } else {
        throw new Error();
      }
    })(() => {
      throw new Error();
    });

export const braun_term_to_arr =
  (tags: BraunTagsOpt) =>
  <T>(term: TermJson): T[] => {
    const tree = term_to_braun_tree(tags)<T>(term);
    return braun_tree_to_array(tree);
  };
