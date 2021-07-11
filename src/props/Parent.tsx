import { ChildAsFC } from './Child';

const Parent = () => {
  return (
  <ChildAsFC color='red' onClick={() => console.log('Clicked')}>
    Passing an Children
  </ChildAsFC>
  )
};

export default Parent;