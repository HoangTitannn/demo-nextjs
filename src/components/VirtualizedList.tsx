import React from 'react';
import { Virtuoso } from 'react-virtuoso';

const VirtualizedList: React.FC = () => {
  return (
    <Virtuoso
      totalCount={1000}
      itemContent={(index: number) => (
        <div style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
          Item {index}
        </div>
      )}
      style={{ height: '400px', width: 'px' }}
    />
  );
};

export default VirtualizedList;