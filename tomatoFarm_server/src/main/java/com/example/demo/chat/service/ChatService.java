package com.example.demo.chat.service;

import java.util.List;

import com.example.demo.chat.domain.ChatMessageDTO;
import com.example.demo.chat.domain.ChatRoomDTO;
import com.example.demo.chat.entity.ChatMessage;
import com.example.demo.chat.entity.ChatRoom;
import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;

public interface ChatService {

	List<ChatMessageDTO> selectAllmessageWhereRoomSeq(ChatMessage entity);
	List<ChatRoomDTO> selectRoom(PageRequest pageRequest, SearchRequest searchRequest, String userId);
	ChatMessage insertMessage(ChatMessage entity);
	ChatRoom insertRoom(ChatRoom entity);
}
