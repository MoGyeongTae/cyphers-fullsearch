import React from 'react';
import { NextPage, NextPageContext } from 'next';
// import styled from 'styled-components';
import axios, { AxiosInstance } from 'axios';
import { Store } from 'redux';
import { playerInfoActions } from '../../store/reducer/playerInfo';
import { PlayerInfoActionParams } from '../../store/reducer/playerInfo/types';
import SearchPage from '../../components/SearchPage';

const NEOPLE_API_URL = 'https://api.neople.co.kr/cy';
const NEOPLE_API_KEY = '9geTlpzorlbJs7uDIvZiw1d1jyORlx7x';

interface PlayerBasicInfo {
  playerId: string;
  nickname: string;
  grade: number;
}

interface Context extends NextPageContext {
  store: Store;
}

const Search: NextPage = () => <SearchPage />;

Search.getInitialProps = async (ctx: Context): Promise<any> => {
  const cyphersApi = (): AxiosInstance =>
    axios.create({
      baseURL: `${NEOPLE_API_URL}/players`,
      timeout: 30000,
    });

  // Player Default Info
  const getPlayerRes = await cyphersApi().get('', {
    params: {
      nickname: ctx.query.nickname,
      apikey: NEOPLE_API_KEY,
    },
  });
  const playerBasicInfo: PlayerBasicInfo = getPlayerRes.data.rows[0];

  if (!playerBasicInfo) {
    if (ctx.res) {
      ctx.res.writeHead(301, {
        Location: '/',
      });
      ctx.res.end();
    }
  }

  const { playerId, nickname, grade } = playerBasicInfo;
  ctx.store!.dispatch(
    playerInfoActions.setBasicInfo(playerId, nickname, grade),
  );

  // More Info
  const getPlayerInfo = await cyphersApi().get(`/${playerId}`, {
    params: {
      apikey: NEOPLE_API_KEY,
    },
  });

  console.log(getPlayerInfo.data);
  const { clanName, ratingPoint, maxRatingPoint, tierName, records } =
    getPlayerInfo.data;
  const playerInfo: PlayerInfoActionParams = {
    clanName,
    ratingPoint,
    maxRatingPoint,
    tierName,
    records,
  };
  ctx.store!.dispatch(playerInfoActions.setPlayerInfo(playerInfo));
  return null;
};
export default Search;
