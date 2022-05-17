type AnyComponent = keyof React.ReactHTML | React.ComponentType;

type PropertiesOf<T> = T extends keyof JSX.IntrinsicElements
  ? JSX.IntrinsicElements[T]
  : T extends React.ComponentType<infer Properties>
  ? Properties & JSX.IntrinsicAttributes
  : never;
