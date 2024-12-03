import { StyleSheet } from "react-native";
import ChatScreen from './../ChatScreen';

const ChatScreenStyle = StyleSheet.create({
    boldText: {
        fontWeight: 'bold',
        color: 'black',
      },
      attachmentDropdown: {
        position: 'absolute',
        bottom: 40,
        right: 0,
        backgroundColor: 'green',
        borderRadius: 8,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 15,
        elevation: 5, 
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset: {width: 0, height: 2}, 
      },
      attachmentOption: {
        borderRadius: 50,
      },
      attachmentOptions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#fff',
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
      },
      option: {
        alignItems: 'center',
      },
      optionText: {
        fontSize: 12,
        color: '#007aff',
        marginTop: 4,
      },
      dropdownMenu: {
        position: 'absolute',
        right: 10,
        top: 40, 
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 5,
        paddingVertical: 5,
        width: 200,
      },
      menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
      },
      menuText: {
        fontSize: 16,
        marginLeft: 10,
      },
      container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
      },
      header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
      },
      headerIconDetailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // borderWidth:1,
        padding: 15,
      },
      headerGroupDetailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // borderWidth:1,
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
      },
      headerIconDetails: {
        flexDirection: 'row',
        gap: 20,
      },
      headerDetails: {
        flex: 1,
        marginLeft: 12,
      },
      tripName: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      tripDetailsText: {
        fontSize: 16,
        color: '#666',
      },
      chatList: {
        padding: 16,
      },
      messageContainer: {
        flexDirection: 'row',
        marginVertical: 8,
      },
      sentContainer: {
        justifyContent: 'flex-end',
      },
      receivedContainer: {
        justifyContent: 'flex-start',
      },
      avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 8,
      },
      messageBubble: {
        padding: 12,
        borderRadius: 16,
        maxWidth: '70%',
      },
      sentBubble: {
        backgroundColor: '#007aff',
        alignSelf: 'flex-end',
      },
      receivedBubble: {
        // backgroundColor: '#e5e5ea',
        backgroundColor: '#fff',
        elevation: 6,
        alignSelf: 'flex-start',
      },
      messageText: {
        fontSize: 16,
      },
      sentMessageText: {
        color: '#ffffff',
      },
      messageTime: {
        fontSize: 12,
        color: '#666',
        marginTop: 4,
        textAlign: 'right',
      },
      inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        backgroundColor: '#fff',
      },
      input: {
        flex: 1,
        fontSize: 16,
        padding: 12,
        borderRadius: 24,
        backgroundColor: '#f1f1f1',
        marginHorizontal: 8,
      },
      iconButton: {
        padding: 8,
      },
      iconHolder: {
        flexDirection: 'row',
        borderRadius: 1,
        // borderWidth:1,
        gap: 10,
        justifyContent: 'space-between',
      },
})

export default ChatScreenStyle