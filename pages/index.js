import React from 'react';

export default function Home() {
  return (
    <div>
      <style jsx>{`
        .post {
          background-color: #fff;
          border-radius: 18px;
          padding: 40px;
          border: 1px solid #ccc;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          margin : 40px;
          max-width : 500px;
        }

        .post-header {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
        }

        .post-header .header-left {
          margin-right: 10px;
        }

        .header-right {
          display: flex;
          flex-direction: column;
        }


        .profile-picture {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          margin-right: 3px;
        }

        .username {
          font-weight: bold;
          font-size: 14px
        }
        
        .post-time {
          font-size: 10px;
          color: #888;
        }

        .post-content {
          margin-bottom: 10px;
          padding-bottom: 20px;
        }

        .reactions {
          margin-bottom: 10px;
          display: flex;
          justify-content: space-between;
        }

        .reaction {
          font-weight: bold;
          font-size: 12px;
          color: #ccc;
          flex-grow: 1;
          text-align: center;
          margin: -2px 0 -2px 0
        }

        .post-stats {
          display: flex;
          flex-direction: row;
          margin-bottom: 10px;
          color: #888;
          text-align: flex;
          font-size: 12px;
        }

        .reacted-users {
          display: flex;
          align-items: flex-start
        }

        .reaction-count{
          padding: 0 4px 0 4px;
        }

        .reacted-users img {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          margin-right: 3px;
        }

        .share {
          margin-left: auto;
        }

        .separator {
          border: none;
          border-top: 1px solid #ccc;
          margin: 10px 0;
        }

        .comments {
          margin-bottom:10px;
        }

        .comment {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
        }

        .comment-picture {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          margin-right: 10px;
        }

        .comment-textbox {
          background-color: #efefef;
          border-radius: 14px;
          padding: 8px;
          text-align: center;
          flex-grow: 1;
          font-style: italic;
          border: none;
          outline: none;
          font-size: 12px;
          margin: 0 4px 0 4px
        }

        .send-button {
          background-color: #1877F2;
          color: #fff;
          border: none;
          border-radius: 18px;
          font-size: 8px;
          padding: 6px;
          cursor: pointer;
          margin-left: 5px;
        }

        .comments-stats {
          font-size: 12px;
          text-decoration: underline;
        }

        .comment-count {
          cursor: pointer;
        }
      `}</style>

      <div className="post">
        <div className="post-header">
          <div className="header-left">
            <img
              src="https://www.mirrormedia.com.tw/assets/images/20220506185252-b13a5be9cd1aff86a1c680abd966e9e1-mobile.png"
              alt="Profile Picture"
              className="profile-picture"
            />
          </div>
          <div className="header-right">
            <span className="username">沈玉琳</span>
            <span className="post-time">7 小時前</span>
          </div>
        </div>
        <div className="post-content">
          OMG OMG OMG!!! <br />潘若迪跟保姆又在泡澡啦！
        </div>
        <hr className="separator" />
        <div className="reactions">
          <span className="reaction">讚</span>
          <span className="reaction">留言</span>
          <span className="reaction">分享</span>
        </div>
        <hr className="separator" />
        <div className="post-stats">
          <div className="reacted-users">
            <img
              src="https://cdn2.ettoday.net/images/3546/d3546995.jpg"
              alt="Profile Picture"
              className="profile-picture"
            />
            <img
              src="https://s.yimg.com/ny/api/res/1.2/D0cb_IOwAHw8ZMqpq2DdOg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTY0MA--/https://media.zenfs.com/ko/ebc.net.tw/8c2cea5c864f94681e793aabfb386b2d"
              alt="Profile Picture"
              className="profile-picture"
            />
            <span className="reaction-count">徐熙悌和其他 6 人</span>
          </div>
          <span className="share">1 人分享這則貼文</span>
        </div>
        <hr className="separator" />
        <div className="comments">
          <div className="comment">
            <img
              src="https://yt3.googleusercontent.com/ytc/AGIKgqOodEF0_zuZdazPW8ulE3zDDYkLZc8mr2_ksIpNDQ=s900-c-k-c0x00ffffff-no-rj"
              alt="User Picture"
              className="comment-picture"
            />
            <input
              type="text"
              className="comment-textbox"
              placeholder="留個言吧"
            />
            <button className="send-button">Send</button>
          </div>
          <div className="comments-stats">
            <span className="comment-count">七則留言</span>
          </div>
        </div>
      </div>
    </div>
  );
}
