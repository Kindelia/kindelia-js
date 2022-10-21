// import * as rustie from 'rustie';
import { match, if_let } from "rustie";

import * as T from "./types";
import { num_to_name } from "./name";
import { braun_term_to_arr } from "./util/braun";

const INPUT = {
  Ok: {
    Run: {
      done_term: {
        Ctr: {
          name: "Triple_new",
          args: [
            { Ctr: { name: "Tree_empty", args: [] } },
            { Ctr: { name: "Tree_empty", args: [] } },
            {
              Ctr: {
                name: "Tree_triple",
                args: [
                  {
                    Ctr: {
                      name: "Tree_triple",
                      args: [
                        {
                          Ctr: {
                            name: "T2",
                            args: [
                              { Num: { numb: "60" } },
                              { Num: { numb: "131" } },
                            ],
                          },
                        },
                        {
                          Ctr: {
                            name: "Tree_triple",
                            args: [
                              {
                                Ctr: {
                                  name: "T2",
                                  args: [
                                    { Num: { numb: "61" } },
                                    { Num: { numb: "131" } },
                                  ],
                                },
                              },
                              {
                                Ctr: {
                                  name: "Tree_triple",
                                  args: [
                                    {
                                      Ctr: {
                                        name: "T2",
                                        args: [
                                          { Num: { numb: "3892" } },
                                          { Num: { numb: "198" } },
                                        ],
                                      },
                                    },
                                    {
                                      Ctr: {
                                        name: "Tree_triple",
                                        args: [
                                          {
                                            Ctr: {
                                              name: "T2",
                                              args: [
                                                { Num: { numb: "2536" } },
                                                { Num: { numb: "385" } },
                                              ],
                                            },
                                          },
                                          {
                                            Ctr: {
                                              name: "Tree_triple",
                                              args: [
                                                {
                                                  Ctr: {
                                                    name: "T2",
                                                    args: [
                                                      { Num: { numb: "3528" } },
                                                      { Num: { numb: "329" } },
                                                    ],
                                                  },
                                                },
                                                {
                                                  Ctr: {
                                                    name: "Tree_empty",
                                                    args: [],
                                                  },
                                                },
                                                {
                                                  Ctr: {
                                                    name: "Tree_empty",
                                                    args: [],
                                                  },
                                                },
                                              ],
                                            },
                                          },
                                          {
                                            Ctr: {
                                              name: "Tree_empty",
                                              args: [],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                    {
                                      Ctr: {
                                        name: "Tree_triple",
                                        args: [
                                          {
                                            Ctr: {
                                              name: "T2",
                                              args: [
                                                { Num: { numb: "3524" } },
                                                { Num: { numb: "1" } },
                                              ],
                                            },
                                          },
                                          {
                                            Ctr: {
                                              name: "Tree_empty",
                                              args: [],
                                            },
                                          },
                                          {
                                            Ctr: {
                                              name: "Tree_empty",
                                              args: [],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                              },
                              {
                                Ctr: {
                                  name: "Tree_triple",
                                  args: [
                                    {
                                      Ctr: {
                                        name: "T2",
                                        args: [
                                          { Num: { numb: "3568" } },
                                          { Num: { numb: "1" } },
                                        ],
                                      },
                                    },
                                    {
                                      Ctr: {
                                        name: "Tree_triple",
                                        args: [
                                          {
                                            Ctr: {
                                              name: "T2",
                                              args: [
                                                { Num: { numb: "3522" } },
                                                { Num: { numb: "1" } },
                                              ],
                                            },
                                          },
                                          {
                                            Ctr: {
                                              name: "Tree_empty",
                                              args: [],
                                            },
                                          },
                                          {
                                            Ctr: {
                                              name: "Tree_empty",
                                              args: [],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                    {
                                      Ctr: {
                                        name: "Tree_triple",
                                        args: [
                                          {
                                            Ctr: {
                                              name: "T2",
                                              args: [
                                                { Num: { numb: "3526" } },
                                                { Num: { numb: "1" } },
                                              ],
                                            },
                                          },
                                          {
                                            Ctr: {
                                              name: "Tree_empty",
                                              args: [],
                                            },
                                          },
                                          {
                                            Ctr: {
                                              name: "Tree_empty",
                                              args: [],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                        },
                        {
                          Ctr: {
                            name: "Tree_triple",
                            args: [
                              {
                                Ctr: {
                                  name: "T2",
                                  args: [
                                    { Num: { numb: "2868" } },
                                    { Num: { numb: "8257" } },
                                  ],
                                },
                              },
                              {
                                Ctr: {
                                  name: "Tree_triple",
                                  args: [
                                    {
                                      Ctr: {
                                        name: "T2",
                                        args: [
                                          { Num: { numb: "3512" } },
                                          { Num: { numb: "1" } },
                                        ],
                                      },
                                    },
                                    {
                                      Ctr: {
                                        name: "Tree_triple",
                                        args: [
                                          {
                                            Ctr: {
                                              name: "T2",
                                              args: [
                                                { Num: { numb: "3521" } },
                                                { Num: { numb: "2" } },
                                              ],
                                            },
                                          },
                                          {
                                            Ctr: {
                                              name: "Tree_empty",
                                              args: [],
                                            },
                                          },
                                          {
                                            Ctr: {
                                              name: "Tree_empty",
                                              args: [],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                    {
                                      Ctr: {
                                        name: "Tree_triple",
                                        args: [
                                          {
                                            Ctr: {
                                              name: "T2",
                                              args: [
                                                { Num: { numb: "3525" } },
                                                { Num: { numb: "1" } },
                                              ],
                                            },
                                          },
                                          {
                                            Ctr: {
                                              name: "Tree_empty",
                                              args: [],
                                            },
                                          },
                                          {
                                            Ctr: {
                                              name: "Tree_empty",
                                              args: [],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                              },
                              {
                                Ctr: {
                                  name: "Tree_triple",
                                  args: [
                                    {
                                      Ctr: {
                                        name: "T2",
                                        args: [
                                          { Num: { numb: "2792" } },
                                          { Num: { numb: "1" } },
                                        ],
                                      },
                                    },
                                    {
                                      Ctr: {
                                        name: "Tree_triple",
                                        args: [
                                          {
                                            Ctr: {
                                              name: "T2",
                                              args: [
                                                { Num: { numb: "3523" } },
                                                { Num: { numb: "1" } },
                                              ],
                                            },
                                          },
                                          {
                                            Ctr: {
                                              name: "Tree_empty",
                                              args: [],
                                            },
                                          },
                                          {
                                            Ctr: {
                                              name: "Tree_empty",
                                              args: [],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                    {
                                      Ctr: {
                                        name: "Tree_triple",
                                        args: [
                                          {
                                            Ctr: {
                                              name: "T2",
                                              args: [
                                                { Num: { numb: "3527" } },
                                                { Num: { numb: "131" } },
                                              ],
                                            },
                                          },
                                          {
                                            Ctr: {
                                              name: "Tree_empty",
                                              args: [],
                                            },
                                          },
                                          {
                                            Ctr: {
                                              name: "Tree_empty",
                                              args: [],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                        },
                      ],
                    },
                  },
                  { Ctr: { name: "Tree_empty", args: [] } },
                  { Ctr: { name: "Tree_empty", args: [] } },
                ],
              },
            },
          ],
        },
      },
      used_mana: "639716",
      size_diff: "0",
      end_size: "13214",
    },
  },
} as T.BlockResultsJson;

const term_to_num = (term: T.TermJson): bigint =>
  if_let(term)("Num")((n) => BigInt(n.numb))(() => { throw new Error })

const term_to_key_value = (term: T.TermJson): [string, bigint] =>
  if_let(term)("Ctr")((c) => {
    if (c.name == "T2") {
      let key = num_to_name(term_to_num(c.args[0]));
      let val = term_to_num(c.args[1]);
      return [key, val] as [string, bigint];
    } else {
      throw new Error();
    }
  })(() => {
    throw new Error();
  });

(async () => {
  const braun_to_arr = braun_term_to_arr({node: "Tree_triple", leaf: "Tree_empty"})
  match(INPUT)({
    Err: () => {},
    Ok: (v) => {
      match(v)({
        Ctr: (v) => {},
        Fun: (v) => {},
        Run: (v) => {
          let done = v.done_term;
          // @ts-ignore
          const tree = done.Ctr.args[2];
          const items_arr = braun_to_arr<T.TermJson>(tree);
          for (const item_tree of items_arr) {
            const item_attr_arr = braun_to_arr<T.TermJson>(item_tree);
            console.log(item_attr_arr.map((x) => term_to_key_value(x)));
          }
          return;
        },
      });
    },
  });
})();
