import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';

const Math = ({ children, block = false, ...props }) => {
  if (block) {
    return <BlockMath math={children} {...props} />;
  }
  return <InlineMath math={children} {...props} />;
};

export default Math;