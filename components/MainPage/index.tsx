import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/dist/client/router';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: #fc5c7d;
  background: -webkit-linear-gradient(to left, #6a82fb, #fc5c7d);
  background: linear-gradient(to right, #6a82fb, #fc5c7d);
  align-items: center;
  justify-content: center;
`;

const SearchContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  max-width: 780px;
  margin-top: -100px;
  @media all and (max-width: 768px) {
    width: 80%;
  }
  > .title {
    color: white;
    font-size: 3rem;
    @media all and (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;

const SearchWrap = styled.div`
  display: flex;
  height: 65px;
  margin-top: 25px;
  width: 100%;
`;

const SearchButton = styled.div`
  height: 100%;
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: #6a82fb;
  color: white;
  font-size: 0.9rem;
  cursor: pointer;
`;

const SearchInput = styled.input`
  flex: 1;
  height: 100%;
  background-color: white;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  outline: none;
  border: none;
  padding-left: 15px;
  padding-right: 15px;
`;

const MainPage: React.FC = () => {
  const [nickname, setNickname] = useState('');
  const router = useRouter();
  const onChangeSearch = useCallback((e) => {
    if (e.target.value.length > 9) {
      e.preventDefault();
    } else {
      setNickname(e.target.value);
    }
  }, []);
  const searchAction = useCallback(() => {
    router.push(`/search/${nickname}`);
  }, [nickname, router]);

  const onKeyPressSearch = useCallback(
    (e) => {
      if (e.key === 'Enter') {
        searchAction();
      }
    },
    [searchAction],
  );
  return (
    <Container className="container">
      <SearchContainer>
        <h2 className="title">사이퍼즈 전적검색</h2>
        <SearchWrap>
          <SearchInput
            onChange={onChangeSearch}
            value={nickname}
            onKeyPress={onKeyPressSearch}
          />
          <SearchButton onClick={searchAction}>Search</SearchButton>
        </SearchWrap>
      </SearchContainer>
    </Container>
  );
};

export default MainPage;
