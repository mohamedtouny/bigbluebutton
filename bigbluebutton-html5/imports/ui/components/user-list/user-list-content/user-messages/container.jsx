import React, { useContext } from 'react';
import UserMessages from './component';
import { ChatContext } from '/imports/ui/components/components-data/chat-context/context';
import { GroupChatContext } from '/imports/ui/components/components-data/group-chat-context/context';
import { UsersContext } from '/imports/ui/components/components-data/users-context/context';
import Service from '/imports/ui/components/user-list/service';
import Auth from '/imports/ui/services/auth';

const UserMessagesContainer = () => {
  const usingChatContext = useContext(ChatContext);
  const usingUsersContext = useContext(UsersContext);
  const usingGroupChatContext = useContext(GroupChatContext);
  const { chats: groupChatsMessages } = usingChatContext;
  const { users } = usingUsersContext;
  const { groupChat: groupChats } = usingGroupChatContext;
  const activeChats = Service.getActiveChats({ groupChatsMessages, groupChats, users:users[Auth.meetingID] });
  const { roving } = Service;

  return <UserMessages {...{ activeChats, roving }} />;
};

export default UserMessagesContainer;
