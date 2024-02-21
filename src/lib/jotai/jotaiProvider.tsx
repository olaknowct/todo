"use client";

import { Provider } from "jotai";

export const JotaiProvider = (props: React.PropsWithChildren) => {
  return <Provider>{props.children}</Provider>;
};
