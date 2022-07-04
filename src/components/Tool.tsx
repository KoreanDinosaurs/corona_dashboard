import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import themeState from '../recoil/ThemeMode';

const ChangeModeBtn = styled.button`
  color: ${(props) => props.theme.textColor};
`;

function Tool() {
  const [theme, setTheme] = useRecoilState(themeState);

  const onClick = () => {
    setTheme(!theme);
  };

  return (
    <aside>
      <ChangeModeBtn type="button" onClick={onClick}>
        낮
      </ChangeModeBtn>
    </aside>
  );
}

export default Tool;
