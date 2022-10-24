import * as rustie from "rustie";
import { if_let } from "rustie";

import { TermJson } from "../types";

// Braun Tree
// ==========

export type BraunTree<T> = rustie.Enum<{
  Node: BraunTreeNode<T>;
  Leaf: null;
}>;

type BraunTreeNode<T> = { value: T; left: BraunTree<T>; right: BraunTree<T> };

export const braun_tree_to_array = <T>(tree: BraunTree<T>): T[] =>
  braun_to_array_aux([tree])

const braun_to_array_aux = <T>(ts: BraunTree<T>[]): T[] => {
  const us: BraunTreeNode<T>[] = [];
  for (const t of ts) {
    if_let(t)("Node")((node) => {
      us.push(node);
    })(() => {});
  }
  if (ts.length == 0) {
    return [];
  } else {
    const roots = us.map(get_value)
    const lefts = us.map(get_left)
    const rights = us.map(get_right)
    return [...roots, ...braun_to_array_aux([...lefts, ...rights])]
  }
};

const get_value = <T>(node: BraunTreeNode<T>): T => node.value;

const get_left = <T>(node: BraunTreeNode<T>): BraunTree<T> => node.left;

const get_right = <T>(node: BraunTreeNode<T>): BraunTree<T> => node.right;

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
