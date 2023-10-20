import React from 'react';
import Stack from 'react-bootstrap/Stack';

interface Props {
  title: string;
  text?: string;
  isNavigation?: boolean;
  onClick?: Function;
}

function Banner(props: Props) {
  const { text, isNavigation, onClick } = props;

  return (
    <Stack gap={2}>
      <div className="p-2">{props.title}</div>
      <div className="p-2">
      {isNavigation ? (
        <nav className="banner" onClick={() => onClick && onClick()}>
          {text}
        </nav>
      ) : (
        <div className="banner">
          {text}
        </div>
      )} 
      </div>
    </Stack>
  );
}

export default Banner;
