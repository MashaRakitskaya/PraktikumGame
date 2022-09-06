import React from 'react';
import { Message } from './ForumMessageItem.styles';

interface ForumMessageItemProps {
  messageText: string;
  isOtherPeopleMessages?: boolean;
}

const ForumMessageItem = ({
  messageText,
  isOtherPeopleMessages = false
}: ForumMessageItemProps) => {
  return (
    <Message isOtherPeopleMessages={isOtherPeopleMessages}>
      {messageText}
    </Message>
  );
};

export default ForumMessageItem;
