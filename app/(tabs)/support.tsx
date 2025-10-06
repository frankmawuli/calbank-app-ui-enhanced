import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "@/components/header";

export default function ChatScreen() {
  const messages = [
    { id: "1", sender: "bot", text: "Hello, welcome to CalBank! 👋" },
    { id: "2", sender: "bot", text: "How may we help you today?" },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header title="CalBank Support" />
     

      {/* Chat Messages */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={[
              styles.messageBubble,
              item.sender === "bot" ? styles.botBubble : styles.userBubble,
            ]}
          >
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
        contentContainerStyle={styles.chatContainer}
      />

      {/* Input Area */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Type your message..."
          style={styles.input}
          placeholderTextColor="#999"
        />
        <TouchableOpacity style={styles.sendButton}>
          <Ionicons name="send" size={22} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    height: "100%",
    width: "100%",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f9b233", // CalBank yellow
    paddingVertical: 15,
    paddingHorizontal: 15,
    elevation: 4,
  },
  headerText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 10,
  },
  chatContainer: {
    padding: 15,
  },
  messageBubble: {
    maxWidth: "80%",
    padding: 10,
    borderRadius: 15,
    marginBottom: 10,
  },
  botBubble: {
    backgroundColor: "#eaeaea",
    alignSelf: "flex-start",
    borderTopLeftRadius: 0,
  },
  userBubble: {
    backgroundColor: "#f9b233",
    alignSelf: "flex-end",
    borderTopRightRadius: 0,
  },
  messageText: {
    fontSize: 15,
    color: "#333",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: "#f2f2f2",
    borderRadius: 20,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: "#f9b233",
    borderRadius: 20,
    padding: 10,
  },
});
