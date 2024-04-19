import { FC, ReactNode } from 'react';

type H1Props = {
  children: ReactNode | string;
};

export const H1: FC<H1Props> = (props) => {
  return <h1 className="font-bold text-xl">{props.children}</h1>;
};
