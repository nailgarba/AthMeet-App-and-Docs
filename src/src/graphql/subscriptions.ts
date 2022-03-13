/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      username
      name
      email
      image
      posts {
        items {
          id
          content
          userID
          image
          createdAt
          updatedAt
        }
        nextToken
      }
      mainGym
      mainSport
      level
      chatRoomUser {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
        }
        nextToken
      }
      followInfo {
        id
        userID
        user {
          id
          username
          name
          email
          image
          mainGym
          mainSport
          level
          createdAt
          updatedAt
        }
        followed {
          id
          username
          name
          email
          image
          mainGym
          mainSport
          level
          createdAt
          updatedAt
        }
        followers {
          id
          username
          name
          email
          image
          mainGym
          mainSport
          level
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      username
      name
      email
      image
      posts {
        items {
          id
          content
          userID
          image
          createdAt
          updatedAt
        }
        nextToken
      }
      mainGym
      mainSport
      level
      chatRoomUser {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
        }
        nextToken
      }
      followInfo {
        id
        userID
        user {
          id
          username
          name
          email
          image
          mainGym
          mainSport
          level
          createdAt
          updatedAt
        }
        followed {
          id
          username
          name
          email
          image
          mainGym
          mainSport
          level
          createdAt
          updatedAt
        }
        followers {
          id
          username
          name
          email
          image
          mainGym
          mainSport
          level
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      username
      name
      email
      image
      posts {
        items {
          id
          content
          userID
          image
          createdAt
          updatedAt
        }
        nextToken
      }
      mainGym
      mainSport
      level
      chatRoomUser {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
        }
        nextToken
      }
      followInfo {
        id
        userID
        user {
          id
          username
          name
          email
          image
          mainGym
          mainSport
          level
          createdAt
          updatedAt
        }
        followed {
          id
          username
          name
          email
          image
          mainGym
          mainSport
          level
          createdAt
          updatedAt
        }
        followers {
          id
          username
          name
          email
          image
          mainGym
          mainSport
          level
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
      id
      content
      userID
      user {
        id
        username
        name
        email
        image
        posts {
          nextToken
        }
        mainGym
        mainSport
        level
        chatRoomUser {
          nextToken
        }
        followInfo {
          id
          userID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      image
      likes {
        items {
          id
          userID
          postID
          createdAt
          updatedAt
        }
        nextToken
      }
      comments {
        items {
          id
          userID
          postID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
      id
      content
      userID
      user {
        id
        username
        name
        email
        image
        posts {
          nextToken
        }
        mainGym
        mainSport
        level
        chatRoomUser {
          nextToken
        }
        followInfo {
          id
          userID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      image
      likes {
        items {
          id
          userID
          postID
          createdAt
          updatedAt
        }
        nextToken
      }
      comments {
        items {
          id
          userID
          postID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
      id
      content
      userID
      user {
        id
        username
        name
        email
        image
        posts {
          nextToken
        }
        mainGym
        mainSport
        level
        chatRoomUser {
          nextToken
        }
        followInfo {
          id
          userID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      image
      likes {
        items {
          id
          userID
          postID
          createdAt
          updatedAt
        }
        nextToken
      }
      comments {
        items {
          id
          userID
          postID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
      id
      userID
      user {
        id
        username
        name
        email
        image
        posts {
          nextToken
        }
        mainGym
        mainSport
        level
        chatRoomUser {
          nextToken
        }
        followInfo {
          id
          userID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      postID
      post {
        id
        content
        userID
        user {
          id
          username
          name
          email
          image
          mainGym
          mainSport
          level
          createdAt
          updatedAt
        }
        image
        likes {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
      id
      userID
      user {
        id
        username
        name
        email
        image
        posts {
          nextToken
        }
        mainGym
        mainSport
        level
        chatRoomUser {
          nextToken
        }
        followInfo {
          id
          userID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      postID
      post {
        id
        content
        userID
        user {
          id
          username
          name
          email
          image
          mainGym
          mainSport
          level
          createdAt
          updatedAt
        }
        image
        likes {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
      id
      userID
      user {
        id
        username
        name
        email
        image
        posts {
          nextToken
        }
        mainGym
        mainSport
        level
        chatRoomUser {
          nextToken
        }
        followInfo {
          id
          userID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      postID
      post {
        id
        content
        userID
        user {
          id
          username
          name
          email
          image
          mainGym
          mainSport
          level
          createdAt
          updatedAt
        }
        image
        likes {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
      createdAt
      updatedAt
    }
  }
`;
export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike {
    onCreateLike {
      id
      userID
      postID
      user {
        id
        username
        name
        email
        image
        posts {
          nextToken
        }
        mainGym
        mainSport
        level
        chatRoomUser {
          nextToken
        }
        followInfo {
          id
          userID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      post {
        id
        content
        userID
        user {
          id
          username
          name
          email
          image
          mainGym
          mainSport
          level
          createdAt
          updatedAt
        }
        image
        likes {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike {
    onUpdateLike {
      id
      userID
      postID
      user {
        id
        username
        name
        email
        image
        posts {
          nextToken
        }
        mainGym
        mainSport
        level
        chatRoomUser {
          nextToken
        }
        followInfo {
          id
          userID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      post {
        id
        content
        userID
        user {
          id
          username
          name
          email
          image
          mainGym
          mainSport
          level
          createdAt
          updatedAt
        }
        image
        likes {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike {
    onDeleteLike {
      id
      userID
      postID
      user {
        id
        username
        name
        email
        image
        posts {
          nextToken
        }
        mainGym
        mainSport
        level
        chatRoomUser {
          nextToken
        }
        followInfo {
          id
          userID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      post {
        id
        content
        userID
        user {
          id
          username
          name
          email
          image
          mainGym
          mainSport
          level
          createdAt
          updatedAt
        }
        image
        likes {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateChatRoomUser = /* GraphQL */ `
  subscription OnCreateChatRoomUser {
    onCreateChatRoomUser {
      id
      userID
      chatRoomID
      user {
        id
        username
        name
        email
        image
        posts {
          nextToken
        }
        mainGym
        mainSport
        level
        chatRoomUser {
          nextToken
        }
        followInfo {
          id
          userID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        chatRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          content
          userID
          chatRoomID
          postID
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateChatRoomUser = /* GraphQL */ `
  subscription OnUpdateChatRoomUser {
    onUpdateChatRoomUser {
      id
      userID
      chatRoomID
      user {
        id
        username
        name
        email
        image
        posts {
          nextToken
        }
        mainGym
        mainSport
        level
        chatRoomUser {
          nextToken
        }
        followInfo {
          id
          userID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        chatRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          content
          userID
          chatRoomID
          postID
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteChatRoomUser = /* GraphQL */ `
  subscription OnDeleteChatRoomUser {
    onDeleteChatRoomUser {
      id
      userID
      chatRoomID
      user {
        id
        username
        name
        email
        image
        posts {
          nextToken
        }
        mainGym
        mainSport
        level
        chatRoomUser {
          nextToken
        }
        followInfo {
          id
          userID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        chatRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          content
          userID
          chatRoomID
          postID
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateChatRoom = /* GraphQL */ `
  subscription OnCreateChatRoom {
    onCreateChatRoom {
      id
      chatRoomUsers {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          createdAt
          content
          userID
          chatRoomID
          postID
          updatedAt
        }
        nextToken
      }
      lastMessageID
      lastMessage {
        id
        createdAt
        content
        userID
        chatRoomID
        user {
          id
          username
          name
          email
          image
          mainGym
          mainSport
          level
          createdAt
          updatedAt
        }
        chatRoom {
          id
          lastMessageID
          createdAt
          updatedAt
        }
        postID
        post {
          id
          content
          userID
          image
          createdAt
          updatedAt
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateChatRoom = /* GraphQL */ `
  subscription OnUpdateChatRoom {
    onUpdateChatRoom {
      id
      chatRoomUsers {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          createdAt
          content
          userID
          chatRoomID
          postID
          updatedAt
        }
        nextToken
      }
      lastMessageID
      lastMessage {
        id
        createdAt
        content
        userID
        chatRoomID
        user {
          id
          username
          name
          email
          image
          mainGym
          mainSport
          level
          createdAt
          updatedAt
        }
        chatRoom {
          id
          lastMessageID
          createdAt
          updatedAt
        }
        postID
        post {
          id
          content
          userID
          image
          createdAt
          updatedAt
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteChatRoom = /* GraphQL */ `
  subscription OnDeleteChatRoom {
    onDeleteChatRoom {
      id
      chatRoomUsers {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          createdAt
          content
          userID
          chatRoomID
          postID
          updatedAt
        }
        nextToken
      }
      lastMessageID
      lastMessage {
        id
        createdAt
        content
        userID
        chatRoomID
        user {
          id
          username
          name
          email
          image
          mainGym
          mainSport
          level
          createdAt
          updatedAt
        }
        chatRoom {
          id
          lastMessageID
          createdAt
          updatedAt
        }
        postID
        post {
          id
          content
          userID
          image
          createdAt
          updatedAt
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
      id
      createdAt
      content
      userID
      chatRoomID
      user {
        id
        username
        name
        email
        image
        posts {
          nextToken
        }
        mainGym
        mainSport
        level
        chatRoomUser {
          nextToken
        }
        followInfo {
          id
          userID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        chatRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          content
          userID
          chatRoomID
          postID
          updatedAt
        }
        createdAt
        updatedAt
      }
      postID
      post {
        id
        content
        userID
        user {
          id
          username
          name
          email
          image
          mainGym
          mainSport
          level
          createdAt
          updatedAt
        }
        image
        likes {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
      id
      createdAt
      content
      userID
      chatRoomID
      user {
        id
        username
        name
        email
        image
        posts {
          nextToken
        }
        mainGym
        mainSport
        level
        chatRoomUser {
          nextToken
        }
        followInfo {
          id
          userID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        chatRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          content
          userID
          chatRoomID
          postID
          updatedAt
        }
        createdAt
        updatedAt
      }
      postID
      post {
        id
        content
        userID
        user {
          id
          username
          name
          email
          image
          mainGym
          mainSport
          level
          createdAt
          updatedAt
        }
        image
        likes {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
      id
      createdAt
      content
      userID
      chatRoomID
      user {
        id
        username
        name
        email
        image
        posts {
          nextToken
        }
        mainGym
        mainSport
        level
        chatRoomUser {
          nextToken
        }
        followInfo {
          id
          userID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        chatRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          content
          userID
          chatRoomID
          postID
          updatedAt
        }
        createdAt
        updatedAt
      }
      postID
      post {
        id
        content
        userID
        user {
          id
          username
          name
          email
          image
          mainGym
          mainSport
          level
          createdAt
          updatedAt
        }
        image
        likes {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onCreateFollow = /* GraphQL */ `
  subscription OnCreateFollow {
    onCreateFollow {
      id
      userID
      user {
        id
        username
        name
        email
        image
        posts {
          nextToken
        }
        mainGym
        mainSport
        level
        chatRoomUser {
          nextToken
        }
        followInfo {
          id
          userID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      followed {
        id
        username
        name
        email
        image
        posts {
          nextToken
        }
        mainGym
        mainSport
        level
        chatRoomUser {
          nextToken
        }
        followInfo {
          id
          userID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      followers {
        id
        username
        name
        email
        image
        posts {
          nextToken
        }
        mainGym
        mainSport
        level
        chatRoomUser {
          nextToken
        }
        followInfo {
          id
          userID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateFollow = /* GraphQL */ `
  subscription OnUpdateFollow {
    onUpdateFollow {
      id
      userID
      user {
        id
        username
        name
        email
        image
        posts {
          nextToken
        }
        mainGym
        mainSport
        level
        chatRoomUser {
          nextToken
        }
        followInfo {
          id
          userID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      followed {
        id
        username
        name
        email
        image
        posts {
          nextToken
        }
        mainGym
        mainSport
        level
        chatRoomUser {
          nextToken
        }
        followInfo {
          id
          userID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      followers {
        id
        username
        name
        email
        image
        posts {
          nextToken
        }
        mainGym
        mainSport
        level
        chatRoomUser {
          nextToken
        }
        followInfo {
          id
          userID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteFollow = /* GraphQL */ `
  subscription OnDeleteFollow {
    onDeleteFollow {
      id
      userID
      user {
        id
        username
        name
        email
        image
        posts {
          nextToken
        }
        mainGym
        mainSport
        level
        chatRoomUser {
          nextToken
        }
        followInfo {
          id
          userID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      followed {
        id
        username
        name
        email
        image
        posts {
          nextToken
        }
        mainGym
        mainSport
        level
        chatRoomUser {
          nextToken
        }
        followInfo {
          id
          userID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      followers {
        id
        username
        name
        email
        image
        posts {
          nextToken
        }
        mainGym
        mainSport
        level
        chatRoomUser {
          nextToken
        }
        followInfo {
          id
          userID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
