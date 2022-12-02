import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { StoreState } from '../../store/reducer';

const RecordContainer = styled.div`
  background-color: white;
  box-shadow: 2px 3px 5px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  width: 100%;
  margin-top: 10px;

  > .game-count {
    flex: 1;
    padding: 10px;
    display: flex;
    flex-direction: column;
    height: 150px;

    &:not(:last-child) {
      border-right: 1px solid #ddd;
    }

    > .title {
      font-size: 0.95rem;
    }

    > .count {
      font-size: 2rem;
      margin-top: auto;
      text-align: right;
      color: #282882;
    }

    > .unit {
      font-size: 0.95rem;
      text-align: right;
    }
  }

  .no-record {
    height: 80px;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;

    > .no-record-text {
      color: #282882;
      font-size: 20px;
    }
  }
`;

// Type => normal or rank

interface RecordInfoProps {
  type: string;
  className?: string;
}

const RecordInfo = ({ type }: RecordInfoProps) => {
  const record = useSelector((state: StoreState) => {
    if (type === 'normal') {
      return state.playerInfo.playerInfo.normalRecord;
    }
    if (type === 'rank') {
      return state.playerInfo.playerInfo.rankRecord;
    }
    return null;
  });
  return (
    <RecordContainer>
      {record ? (
        <>
          <div className="win-wrap game-count">
            <span className="title">승리</span>
            <span className="count">{record.winCount}</span>
            <span className="unit">회</span>
          </div>
          <div className="lose-wrap game-count">
            <span className="title">패배</span>
            <span className="count">{record.loseCount}</span>
            <span className="unit">회</span>
          </div>
          <div className="stop-wrap game-count">
            <span className="title">중단</span>
            <span className="count">{record.stopCount}</span>
            <span className="unit">회</span>
          </div>
        </>
      ) : (
        <div className="no-record">
          <span className="no-record-text">
            {type === 'normal'
              ? '이번 시즌 일반전 참여 기록이 없습니다.'
              : '이번 시즌 공식전 참여 기록이 없습니다.'}
          </span>
        </div>
      )}
    </RecordContainer>
  );
};

export default RecordInfo;
