import React from "react";
import { messages } from "./data";
import { ReactComponent as Address } from "../upload/address.svg";
import { ReactComponent as Search } from "../upload/search.svg";
import { ReactComponent as Circle } from "../upload/circle.svg";
import { ReactComponent as Chart } from "../upload/chart.svg";
import { ReactComponent as Comment } from "../upload/comment.svg";
import { ReactComponent as Store } from "../upload/store.svg";
import { ReactComponent as Asterisk } from "../upload/asterisk.svg";
import { ReactComponent as Bandcamp } from "../upload/bandcamp.svg";
import { ReactComponent as Plus } from "../upload/plus.svg";
import { ReactComponent as Tag } from "../upload/tag.svg";
import { ReactComponent as Down } from "../upload/down.svg";
import { ReactComponent as Right } from "../upload/right.svg";
import {
  Container,
  SidePanel,
  ChatPanel,
  ChatInfo,
  SidePanelIcons,
  Logo,
  Users,
  GroupTitle,
  UsersPerson,
  User,
  Tags,
  Notification,
  InfoHeader,
  ChatHeader,
  OptionsChat,
  TitleContainer,
  HeaderBox,
  Content,
  Avatar,
  ChatText,
  HeaderMsg,
  Message,
  ButtonMember
} from "./styled";

const Chat = () => {
  return (
    <Container>
      <SidePanel>
        <SidePanelIcons>
          <Logo>AM</Logo>
          <Search />
          <Circle />
          <Chart />
          <Comment />
          <Store />
          <Asterisk />
          <Bandcamp />
          <Address />
        </SidePanelIcons>
      </SidePanel>
      <Users>
        <input type="text" placeholder="Search" />
        <GroupTitle>
          <h2>FAVOURITES</h2>
          <Plus />
        </GroupTitle>
        <input type="text" value="Pelican room" />
        <GroupTitle>
          <h2>DIRECT MESSAGES</h2>
          <Plus />
        </GroupTitle>
        <UsersPerson>
          <User minnie>Mathias Jorgensen</User>
          <User>Milla Huhtala</User>
          <User>
            Leroy Long
            <Notification>4</Notification>
          </User>
          <User>Leonard Pena</User>
          <User>Jill Cox</User>
        </UsersPerson>
        <GroupTitle>
          <h2>Groups</h2>
          <Plus />
        </GroupTitle>
        <Tags>
          <Tag />
          Crypto
        </Tags>
        <Tags>
          <Tag />
          Futures
        </Tags>
        <Tags>
          <Tag />
          Finance
        </Tags>
        <Tags>
          <Tag />
          Stocktalk Germany
        </Tags>
      </Users>
      <ChatPanel>
        <ChatHeader>
          <HeaderBox>
            <TitleContainer>
              <Tag />
              <h1>Pelican Room</h1>
            </TitleContainer>
            <OptionsChat>
              <p>5 Members</p>
              <ButtonMember>
                <Plus />
                Add Member
              </ButtonMember>
            </OptionsChat>
          </HeaderBox>
        </ChatHeader>
        <Content>
          {messages.map(messageText => {
            return <MessageText {...messageText} />;
          })}
        </Content>
      </ChatPanel>
      <ChatInfo>
        <InfoHeader>
          <h2>Group Info</h2>
          <p>Created 01/01/2022</p>
        </InfoHeader>
        <GroupTitle>
          <h2>Members</h2>
          <Down />
        </GroupTitle>
        <UsersPerson>
          <User minnie>Mathias Jorgensen</User>
          <User>Milla Huhtala</User>
          <User>
            Leroy Long
            <Notification>4</Notification>
          </User>
          <User>Leonard Pena</User>
          <User>Jill Cox</User>
        </UsersPerson>
        <GroupTitle>
          <h2>Shared files</h2>
          <Right />
        </GroupTitle>
        <GroupTitle>
          <h2>PINNED MESSAGES</h2>
          <Right />
        </GroupTitle>
        <GroupTitle>
          <h2>STARRED FILES</h2>
          <Right />
        </GroupTitle>
      </ChatInfo>
    </Container>
  );
};

const MessageText = props => {
  const { name, time, msg, userLogo } = props;
  return (
    <Message>
      <Avatar>
        <img src={userLogo} />
      </Avatar>
      <ChatText>
        <HeaderMsg>
          <span>{name}</span>
          <time>{time}</time>
        </HeaderMsg>
        <p>{msg}</p>
      </ChatText>
    </Message>
  );
};

export default Chat;
