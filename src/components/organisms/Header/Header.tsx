import React from 'react';
import styled, { css } from 'styled-components';
import { useHistory } from 'react-router-dom';
import { Avatar } from '../../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { TabNavigation } from '../../../components';

const HeaderWrapper = styled.div(({ theme }) => {
  const { background } = theme;

  return css`
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-size: cover;
    background-color: ${background.primary};
    margin-top: -50px;
  `;
});

const OnClickWrapper = styled.div`
  margin: 40px;
`;

const HeaderText = styled.p`
  display: flex;
  color: white;
  font-size: 50px;
`;

const TabNavWrapper = styled.div`
  width: 100vw;
`;

export default function Header() {
  const history = useHistory();

  const goHome = () => {
    alert('Home!');
    history.push('/newsfeed');
  };
  return (
    <>
      <HeaderWrapper>
        <OnClickWrapper>
          <FontAwesomeIcon
            icon={faHome}
            size="4x"
            className="icon"
            onClick={goHome}
          />
        </OnClickWrapper>
        <HeaderText>Local Issues</HeaderText>
        <OnClickWrapper>
          <Avatar
            src="http://stump.zackrose.net/images/avatar_sm.png"
            size="3x"
          />
        </OnClickWrapper>
      </HeaderWrapper>
      <TabNavWrapper>
        <TabNavigation
          tabs={[
            {
              text: 'Elections',
              onClick: () => alert('Elections'),
              isActive: false,
            },
            {
              text: 'Initiatives',
              onClick: () => alert('Initiatives'),
              isActive: true,
            },
          ]}
          linePosition="bottom"
        />
      </TabNavWrapper>
    </>
  );
}
