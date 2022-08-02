import React from 'react';
import {Result, Button} from 'antd';
const NoFoundPage = ({onClick}: {onClick: () => void }) => {
  return (
      <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
          extra={
            <Button
                type="primary"
                onClick={onClick}
            >
              返回工作台
            </Button>
          }
      />
  );
}

export default NoFoundPage
