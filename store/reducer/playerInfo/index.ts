import { Reducer } from 'redux';

enum ActionType {
  SET_BASIC_INFO = 'playerInfo/SET_BASIC_INFO'
}

interface SetBasicInfoAction {
  type: ActionType.SET_BASIC_INFO,
  playerId: string;
  nickname: string;
  grade: number;
}

export const setBasicInfo = (
  playerId: string, nickname: string, grade: number,
): SetBasicInfoAction => ({
  type: ActionType.SET_BASIC_INFO,
  playerId,
  nickname,
  grade,
});

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
    case ActionType.SET_BASIC_INFO: {
      return state;
    }
    default: {
      return state;
    }
  }
};

export default playerInfoReducer;
