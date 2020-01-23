import { ImmerReducer, createReducerFunction, createActionCreators } from 'immer-reducer';
import { PlayerInfoStateType, PlayerInfoActionParams, GameRecordType } from './types';

export const playerInfoState: PlayerInfoStateType = {
  basicInfo: {
    playerId: '',
    nickname: '',
    grade:    0,
  },
  playerInfo: {
    clanName:       null,
    ratingPoint:    null,
    maxRatingPoint: null,
    tierName:       null,
    normalRecord:   null,
    rankRecord:     null,
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
    if (records && records[0]) {
      records.forEach((record : GameRecordType) => {
        if (record.gameTypeId === 'normal') {
          this.draftState.playerInfo.normalRecord = record;
        } else if (record.gameTypeId === 'rating') {
          this.draftState.playerInfo.rankRecord = record;
        }
      });
    }
  }
}

export const playerInfoActions = createActionCreators(playerInfoReducer);
const reducer = createReducerFunction(playerInfoReducer, playerInfoState);

export default reducer;
