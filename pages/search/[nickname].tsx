import React from 'react';
import { NextPage } from 'next';
// import styled from 'styled-components';
import axios, { AxiosInstance } from 'axios';

const NEOPLE_API_URL = 'https://api.neople.co.kr/cy';
const NEOPLE_API_KEY = '9geTlpzorlbJs7uDIvZiw1d1jyORlx7x';

interface PlayerBasicInfo {
  playerId: string;
  nickname: string;
  grade: number;
}

const Search: NextPage = () => (
  <div />
);

Search.getInitialProps = async (ctx: any): Promise<any> => {
  const cyphersApi = (): AxiosInstance => axios.create({
    baseURL: `${NEOPLE_API_URL}/players`,
    timeout: 30000,
  });

  const getPlayerRes = await cyphersApi().get('', {
    params: {
      nickname: ctx.query.nickname,
      apikey:   NEOPLE_API_KEY,
    },
  });

  const playerBasicInfo: PlayerBasicInfo = getPlayerRes.data.rows[0];

  const getPlayerInfo = await cyphersApi().get(`/${playerBasicInfo.playerId}`, {
    params: {
      apikey: NEOPLE_API_KEY,
    },
  });

  console.log(getPlayerInfo.data);
};
export default Search;
