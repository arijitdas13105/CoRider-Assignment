import React, {useState, useEffect} from 'react';
import {
  View,
  ChatScreenStyleheet,
  FlatList,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import moment from 'moment';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import ChatScreenStyle from './Styles/ChatScreenStyle';
const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isEndReached, setIsEndReached] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isAttachmentOptionsVisible, setAttachmentOptionsVisible] =
    useState(false);
  useEffect(() => {
    fetchMessages(0);
  }, []);

  const fetchMessages = async pageNumber => {
    if (loading || isEndReached) return;
    setLoading(true);
    try {
      const response = await axios.get(
        `https://qa.corider.in/assignment/chat?page=${pageNumber}`,
      );
      const newMessages = response.data.chats || [];
      if (newMessages.length === 0) {
        setIsEndReached(true);
      } else {
        setMessages(prevMessages => [
          ...prevMessages,
          ...newMessages.map(msg => ({
            id: msg.id,
            text: msg.message,
            createdAt: new Date(msg.time),
            sender: {
              id: msg.sender.user_id,
              name: msg.sender.user_id,
              avatar: msg.sender.image,
            },
          })),
        ]);
        setPage(pageNumber);
      }
    } catch (error) {
      console.error('Error fetching messages:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSend = () => {
    if (newMessage.trim() !== '') {
      setMessages(prevMessages => [
        {
          id: Date.now().toString(),
          text: newMessage,
          createdAt: new Date(),
          sender: {
            id: '67eab7475e5e4dd0903e133705213b43',
            name: 'You',
            avatar:
              'https://fastly.picsum.photos/id/1072/160/160.jpg?hmac=IDpbpA5neYzFjtkdFmBDKXwgr-907ewXLa9lLk9JuA8',
          },
        },
        ...prevMessages,
      ]);
      setNewMessage('');
    }
  };

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  const toggleAttachmentOptions = () => {
    setAttachmentOptionsVisible(!isAttachmentOptionsVisible);
  };

  const renderMessageItem = ({item}) => {
    const isSelf = item.sender.id === '67eab7475e5e4dd0903e133705213b43';
    return (
      <View
        style={[
          ChatScreenStyle.messageContainer,
          isSelf
            ? ChatScreenStyle.sentContainer
            : ChatScreenStyle.receivedContainer,
        ]}>
        {!isSelf && (
          <Image
            source={{uri: item.sender.avatar}}
            style={ChatScreenStyle.avatar}
          />
        )}
        <View
          style={[
            ChatScreenStyle.messageBubble,
            isSelf
              ? ChatScreenStyle.sentBubble
              : ChatScreenStyle.receivedBubble,
          ]}>
          <Text
            style={[
              ChatScreenStyle.messageText,
              isSelf && ChatScreenStyle.sentMessageText,
            ]}>
            {item.text}
          </Text>
          <Text style={ChatScreenStyle.messageTime}>
            {moment(item.createdAt).format('hh:mm A')}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={ChatScreenStyle.container}>
      {/* Header */}
      <View style={ChatScreenStyle.headers}>
        <View style={ChatScreenStyle.headerIconDetailsContainer}>
          <View style={ChatScreenStyle.headerIconDetails}>
            <Icon name="arrow-back" size={24} color="#000" />
            <Text style={ChatScreenStyle.tripName}>Trip 1</Text>
          </View>
          <TouchableOpacity>
            <Feather name="edit" size={24} color="#000" />
          </TouchableOpacity>
        </View>
        <View style={ChatScreenStyle.headerGroupDetailsContainer}>
          <View style={ChatScreenStyle.headerIconDetails}>
            <Image
              style={{width: 50, height: 50, borderRadius: 20}}
              source={require('./assets/avatar.png')}
            />
            {/* <Text style={ChatScreenStyle.tripDetails}>
              From IGI Airport,T3{"\n"}to Sector 28
            </Text> */}
            <Text style={ChatScreenStyle.tripDetailsText}>
              From <Text style={ChatScreenStyle.boldText}>IGI Airport, T3</Text>{' '}
              {'\n'}To <Text style={ChatScreenStyle.boldText}>Sector 28</Text>
            </Text>
          </View>
          <TouchableOpacity onPress={toggleDropdown}>
            <Icon name="more-vert" size={24} color="#000" />
          </TouchableOpacity>
          {isDropdownVisible && (
            <View style={ChatScreenStyle.dropdownMenu}>
              <TouchableOpacity
                style={ChatScreenStyle.menuItem}
                onPress={() => console.log('Members')}>
                <Icon name="group" size={20} color="#000" />
                <Text style={ChatScreenStyle.menuText}>Members</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={ChatScreenStyle.menuItem}
                onPress={() => console.log('Share Number')}>
                <Icon name="phone" size={20} color="#000" />
                <Text style={ChatScreenStyle.menuText}>Share Number</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={ChatScreenStyle.menuItem}
                onPress={() => console.log('Report')}>
                <Icon name="report" size={20} color="#000" />
                <Text style={ChatScreenStyle.menuText}>Report</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>

      <FlatList
        data={messages}
        renderItem={renderMessageItem}
        keyExtractor={item => item.id}
        inverted
        onEndReached={() => fetchMessages(page + 1)}
        onEndReachedThreshold={0.5}
        contentContainerStyle={ChatScreenStyle.chatList}
      />

      <View style={ChatScreenStyle.inputContainer}>
        <TextInput
          style={ChatScreenStyle.input}
          value={newMessage}
          onChangeText={setNewMessage}
          placeholder="Type a message..."
        />
        <View style={ChatScreenStyle.iconHolder}>
          <TouchableOpacity onPress={toggleAttachmentOptions}>
            <Icon name="attach-file" size={24} color="#000" />
          </TouchableOpacity>
          {isAttachmentOptionsVisible && (
            <View style={ChatScreenStyle.attachmentDropdown}>
              <TouchableOpacity style={ChatScreenStyle.attachmentOption}>
                <Icon name="camera-alt" size={24} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity style={ChatScreenStyle.attachmentOption}>
                <Icon name="videocam" size={24} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity style={ChatScreenStyle.attachmentOption}>
                <Icon name="insert-drive-file" size={24} color="#fff" />
              </TouchableOpacity>
            </View>
          )}
          <TouchableOpacity onPress={handleSend}>
            <Icon name="send" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ChatScreen;
