import { Reducer } from 'redux';

export interface GameRecordType {
  gameTypeId: string;
  winCount: number;
  loseCount: number;
  stopCount: number;
}

export interface PlayerInfoStateType {
  basicInfo: {
    playerId: string;
    nickname: string;
    grade: number;
  },
  playerInfo: {
    clanName: string;
    ratingPoint: number;
    maxRatingPoint: number;
    tierName: string;
    records: GameRecordType[];
  }
}

export const playerInfoState: PlayerInfoStateType = {
  basicInfo: {
    playerId: '',
    nickname: '',
    grade:    0,
  },
  playerInfo: {
    clanName:       '',
    ratingPoint:    0,
    maxRatingPoint: 0,
    tierName:       '',
    records:        [],
  },
};

const playerInfoReducer: Reducer = (state = playerInfoState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default playerInfoReducer;
