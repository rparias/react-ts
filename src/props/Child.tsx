interface ChildProps {
  color: string;
}

// 1st way to define a react component with TS
export const Child = ({color}: ChildProps) => {
  return <div>{color}</div>
}

// 2nd way to define a react component with TS, FC is Function Component
export const ChildAsFC: React.FC<ChildProps> = ({color}) => {
  return <div>{color}</div>
}