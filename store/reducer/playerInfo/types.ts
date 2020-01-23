enum ActionType {
  SET_BASIC_INFO = 'playerInfo/SET_BASIC_INFO',
  SET_PLAYER_INFO = 'playerInfo/SET_PLAYER_INFO',
}

/**
 * * Record Type
 */
export interface GameRecordType {
  gameTypeId: string;
  winCount: number;
  loseCount: number;
  stopCount: number;
}

/**
 * * Set Player Basic Action Return Info
 */
export interface SetBasicInfoAction {
  type: ActionType.SET_BASIC_INFO,
  playerId: string;
  nickname: string;
  grade: number;
}

export interface PlayerInfoActionParams {
  clanName: string | null;
  ratingPoint: number | null;
  maxRatingPoint: number | null;
  tierName: string | null;
  records : GameRecordType[] | null;
}

export interface SetPlayerInfoAction {
  type: ActionType.SET_PLAYER_INFO
  clanName: string | null;
  ratingPoint: number | null;
  maxRatingPoint: number | null;
  tierName: string | null;
  records: GameRecordType[] | null
}

export interface PlayerInfoStateType {
  basicInfo: {
    playerId: string;
    nickname: string;
    grade: number;
  },
  playerInfo: {
    clanName: string | null;
    ratingPoint: number | null;
    maxRatingPoint: number | null;
    tierName: string | null;
    normalRecord : GameRecordType | null,
    rankRecord : GameRecordType | null
  }
}

export default ActionType;
