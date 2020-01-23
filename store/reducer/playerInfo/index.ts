import { ImmerReducer, createReducerFunction, createActionCreators } from 'immer-reducer';
import { PlayerInfoStateType, PlayerInfoActionParams } from './types';

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

class playerInfoReducer extends ImmerReducer<PlayerInfoStateType> {
  setBasicInfo(playerId : string, nickname : string, grade : number) {
    this.draftState.basicInfo.playerId = playerId;
    this.draftState.basicInfo.nickname = nickname;
    this.draftState.basicInfo.grade = grade;
  }

  setPlayerInfo(info : PlayerInfoActionParams) {
    const {
      clanName, ratingPoint, maxRatingPoint, tierName, records,
    } = info;
    this.draftState.playerInfo.clanName = clanName;
    this.draftState.playerInfo.ratingPoint = ratingPoint;
    this.draftState.playerInfo.maxRatingPoint = maxRatingPoint;
    this.draftState.playerInfo.tierName = tierName;
    this.draftState.playerInfo.records = records;
  }
}

export const playerInfoActions = createActionCreators(playerInfoReducer);
const reducer = createReducerFunction(playerInfoReducer, playerInfoState);

export default reducer;
