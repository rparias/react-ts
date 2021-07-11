interface ChildProps {
  color: string;
  onClick: () => void;
}

// 1st way to define a react component with TS
export const Child = ({color, onClick}: ChildProps) => {
  return <div>{color}
  <button onClick={onClick}>Click me</button>
  </div>
}

// 2nd way to define a react component with TS, FC is Function Component
// this approach allows to use and insert children inside the component
export const ChildAsFC: React.FC<ChildProps> = ({color, onClick, children}) => {
  return (
  <div>
    {color}
    {children}
    <button onClick={onClick}>Click me</button>
  </div>)
}