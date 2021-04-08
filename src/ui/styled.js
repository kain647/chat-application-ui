import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  box-sizing: border-box;
  grid-template-columns: 80px 1fr 2fr 1fr;
  grid-template-areas: "icons users chat chatInfo";
  max-width: 1400px;
  height: 700px;
  align-items: center;
  justify-content: center;
  border: 2px solid #1b1b1f;
  border-radius: 4px;
  background: #222429;
  box-shadow: 1px 0px 10px 0px rgb(0 0 0 / 40%);
  user-select: none;
`;
export const SidePanel = styled.div`
  display: flex;
  box-sizing: border-box;
  overflow: hidden;
  height: 100%;
  background-color: #0f0f13;
`;
export const SidePanelIcons = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  flex-direction: column;
  width: 80px;
  height: 100%;
  padding: 10px;
  background-color: #17171b;
  grid-area: icons;
  svg {
    width: var(--size);
    height: var(--size);
    --size: 18px;
    color: rgba(255, 255, 255, 0.5);
    margin-bottom: 27px;
    cursor: pointer;
    :hover {
      color: #fff;
    }
  }
`;
export const Users = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  flex-direction: column;
  grid-area: users;
  background-color: #0f0f13;
  padding: 15px;
  input {
    width: 100%;
    box-sizing: border-box;
    border-radius: 4px;
    border: 0;
    padding: 8px 8px 8px 16px;
    margin: 0 auto;
    background-color: #222429;
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
  }
`;
export const GroupTitle = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  font-size: 10px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 15px;
  svg {
    width: var(--size);
    height: var(--size);
    --size: 15px;
    cursor: pointer;
  }
`;
export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  color: #fff;
  text-decoration: none;
  font-size: 10px;
  border-radius: 50px;
  border: 1px solid #fff;
  margin: 15px 0 50px;
  cursor: pointer;
`;
export const ChatPanel = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  grid-area: chat;
  border-right: 1px solid #1b1b1f;
`;
export const ChatInfo = styled.div`
  display: flex;
  box-sizing: border-box;
  overflow: hidden;
  flex-direction: column;
  width: 100%;
  height: 100%;
  grid-area: chatInfo;
  align-items: center;
  padding: 0px 16px 16px 16px;
`;
export const UsersPerson = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
`;
export const User = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  margin-bottom: 10px;
  cursor: pointer;
  :before {
    width: 25px;
    height: 25px;
    border-radius: 100rem;
    background: ${({ minnie }) => (minnie ? "#C1292E" : "#235789")};
    content: "AM";
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 9px;
    margin-right: 1rem;
  }
`;
export const Notification = styled.div`
  display: flex;
  background-color: #ff3366;
  opacity: 0.6;
  color: #fff;
  padding: 0 0.5rem;
  border-radius: 4px;
  margin-left: auto;
`;
export const Tags = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 14px;
  opacity: 0.5;
  margin-bottom: 10px;
  cursor: pointer;
  svg {
    width: var(--size);
    height: var(--size);
    --size: 15px;
    margin-right: 10px;
  }
`;
export const InfoHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 120px;
  flex-direction: column;
  border-bottom: 1px solid #1b1b1f;
  padding: 16px;
  h2 {
    margin: 0;
    padding: 0;
    color: #fff;
    margin-bottom: 10px;
  }
  p {
    margin: 0;
    padding: 0;
    color: #fff;
    opacity: 0.5;
  }
`;
export const ChatHeader = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  width: 100%;
  height: 120px;
  align-items: center;
  border-bottom: 1px solid #1b1b1f;
  padding: 16px;
  z-index: 1;
  h1 {
    padding: 0;
    margin: 0;
    color: #fff;
  }
  svg {
    width: var(--size);
    height: var(--size);
    --size: 35px;
    margin-right: 10px;
    color: #fff;
    opacity: 0.5;
  }
  button {
    display: flex;
    align-items: center;
    background: transparent;
    border: 0;
    color: #fff;
    cursor: pointer;
    svg {
      width: var(--size);
      height: var(--size);
      --size: 14px;
      margin-right: 10px;
    }
  }
`;
export const OptionsChat = styled.div`
  display: flex;
  p {
    padding: 0;
    margin: 0;
    margin-right: 10px;
    color: rgba(255, 255, 255, 0.3);
    font-size: 14px;
    margin-left: 35px;
  }
`;
export const ButtonMember = styled.button`
  display: flex;
  svg {
    color: #fff;
  }
`;
export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
export const HeaderBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Message = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  padding: 16px;
  border-bottom: 1px solid #1b1b1f;
`;
export const Avatar = styled.div`
  display: flex;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    margin-right: 25px;
  }
`;
export const ChatText = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
  flex-direction: column;
  p {
    color: rgba(255, 255, 255, 0.6);
  }
`;
export const HeaderMsg = styled.div`
  display: flex;
  width: 50%;
  span {
    width: 100%;
    color: #fff;
  }
  time {
    width: 100%;
    color: #fff;
    opacity: 0.5;
  }
`;
export const Content = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  z-index: 0;
`;
