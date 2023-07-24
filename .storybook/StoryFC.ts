import { Story } from '@storybook/react';
import { A, S, B, U } from 'ts-toolbelt';

/**
 * The following will remove props that start with 'on' and are a callback from object
 * e.g. onClick, onChange, onSubmit, onAdd etc.
 */
type StartsWithOn<T> = T extends string
  ? A.Equals<A.Cast<S.Split<T, 'on'>, string[]>[0], ''>
  : never;
type UnknownNormalFunction = (...args: any[]) => any;
type IsACallback<Value, Prop> = B.And<
  StartsWithOn<Prop>,
  A.Extends<U.NonNullable<Value>, UnknownNormalFunction>
>;
type WithoutCallbacks<T extends object> = {
  [Prop in keyof T as IsACallback<T[Prop], Prop> extends 1 ? never : Prop]: T[Prop];
};
const errorMessage =
  'Callbacks are automatically declared by storybook, if you want to write a custom one try adding them in story functions';
type CallbackNotAllowedError = typeof errorMessage;
// select only callback props and makes them optional and assigns them an error string
type OnlyCallbacks<T extends object> = {
  [Prop in keyof T as IsACallback<T[Prop], Prop> extends 1
    ? Prop
    : never]?: CallbackNotAllowedError;
};
type ErrorOnCallbacks<T extends object> = WithoutCallbacks<T> & OnlyCallbacks<T>;

type PropsOf<T> = T extends React.ComponentType<infer P>
  ? P
  : T extends object
  ? T
  : never;

type RemoveChildren<T> = { [P in keyof T as P extends 'children' ? never : P]: T[P] };

type Parameters = (
  | {
      zeplinLink?: never;
      design: {
        type: 'figma';
        url: string;
      };
    }
  | {
      zeplinLink: string;
      design?: never;
    }
) & {
  msw?: any[];
  chromatic?: { disableSnapshot: boolean };
  [key: string]: any;
};

/**
 * accepts `typeof ReactComponent` or component `props type` (as an object type)
 */
export type StoryFC<T extends object = any> = Story<PropsOf<T>> & {
  args?: ErrorOnCallbacks<RemoveChildren<PropsOf<T>>>;
  parameters?: Parameters;
  bind: (obj: any) => StoryFC<T>;
};
