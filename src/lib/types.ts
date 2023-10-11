export type TAddress = string;

export type TWithAmount<T> = T & {
  amount: string;
};
