import { Button } from '@base-ui/react';

type HeaderProps = {
  text: string;
};

export const Header = (props: HeaderProps) => {
  return (
    <ul>
      <li>{props.text}</li>
      <li>
        <Button>로그인</Button>
      </li>
    </ul>
  );
};
