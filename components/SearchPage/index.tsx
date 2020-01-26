import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { StoreState } from '../../store/reducer';
import RecordInfo from './RecordInfo';

const SearchContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;

  > .menu-wrapper {
    display: flex;
    width: 230px;
    height: 100%;
    background-color: #1d1d69;
  }

  > .info-wrapper {
    background-color: #e0e0e0;
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;

    .info-header {
      width: 100%;
      height: 50px;
      background-color: #282882;
      display: flex;
      align-items: center;
      padding: 0 20px;

      > .info-title {
        color: white;
        font-size: 1rem;
      }
    }

    .info-contents {
      padding: 30px;
      display: flex;
      flex-direction: column;

      .rating-wrap {
        width: 100%;
        display: flex;
        justify-content: space-between;

        .rating-box {
          flex: 1;
          height: 100px;
          background-color: white;
          box-shadow: 2px 3px 5px 0px rgba(0, 0, 0, 0.2);
          padding: 10px;
          display: flex;
          flex-direction: column;

          &:not(:last-child) {
            margin-right: 20px;
          }

          > .title {
            font-size: 0.95rem;
          }

          > .point {
            font-size: 2rem;
            line-height: 1;
            margin-top: 5px;
            color: #282882;
          }

          > .unit {
            font-size: 0.8rem;
          }
        }
      }

      .record-wrap {
        width: 100%;
        display: flex;

        .record-box {
          flex: 1;
          margin-top: 40px;

          &:first-child {
            margin-right: 20px;
          }
        }
      }

      .warning {
        width: 100%;
        margin-top: 20px;
        color: darken(#e0e0e0, 20%);
        font-size: 0.8rem;
        text-align: right;
      }
    }
  }
`;

const ProfileWrap = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  color: white;
  justify-content: center;

  > .profile-image {
    height: 90px;
    width: 90px;

    > img {
      width: 100%;
      height: 100%;
    }
  }

  > .profile-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    color: white;

    > span {
      margin-top: 5px;
    }

    > .nickname {
      font-size: 1.3rem;
    }
  }
`;

const SearchPage : React.FC = () => {
  const basicInfo = useSelector((state : StoreState) => state.playerInfo.basicInfo);
  const playerInfo = useSelector((state : StoreState) => state.playerInfo.playerInfo);

  return (
    <SearchContainer>
      <div className="menu-wrapper">
        <ProfileWrap>
          <div className="profile-image">
            <img src="/img/default_profile.png" alt="profile" />
          </div>
          <div className="profile-info">
            <span className="grade">
              {basicInfo.grade}
급
            </span>
            <span className="nickname">{basicInfo.nickname}</span>
            <span className="clan">
[
              {' '}
              {playerInfo.clanName}
              {' '}
]
            </span>
          </div>
        </ProfileWrap>
      </div>
      <div className="info-wrapper">
        <div className="info-header">
          <h2 className="info-title">플레이어 프리뷰</h2>
        </div>
        <div className="info-contents">
          <div className="rating-wrap">
            <div className="rating-tier rating-box">
              <h3 className="title">랭크</h3>
              <span className="point">
                {playerInfo.tierName ? playerInfo.tierName.split(' ')[0] : '배치 중'}
              </span>
              <span className="unit">
                {playerInfo.tierName ? playerInfo.tierName.split(' ')[1] : ''}
              </span>
            </div>
            <div className="rating-point rating-box">
              <h3 className="title">현재 랭크 포인트</h3>
              <span className="point">
                {playerInfo.ratingPoint ? playerInfo.ratingPoint : '배치 중'}
              </span>
              <span className="unit">{playerInfo.ratingPoint ? 'RP' : ''}</span>
            </div>
            <div className="max-rating-point rating-box">
              <h3 className="title">최고 랭크 포인트</h3>
              <span className="point">
                {playerInfo.maxRatingPoint ? playerInfo.maxRatingPoint : '배치 중'}
              </span>
              <span className="unit">
                {playerInfo.maxRatingPoint ? 'RP' : ''}
                {' '}
              </span>
            </div>
          </div>
          <div className="record-wrap">
            <div className="normal-wrap record-box">
              <h3 className="title">일반전 기록</h3>
              <RecordInfo type="normal" />
            </div>
            <div className="rank-wrap record-box">
              <h3 className="title">공식전 기록</h3>
              <RecordInfo type="rank" />
            </div>
          </div>
          <div className="warning">
            <p>※ 주의사항</p>
            <p>이 데이터는 현 시점의 데이터가 아닙니다.</p>
          </div>
        </div>
      </div>
    </SearchContainer>
  );
};

export default SearchPage;
