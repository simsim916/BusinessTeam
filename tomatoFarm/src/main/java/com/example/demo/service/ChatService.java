package com.example.demo.service;

import java.util.List;

import com.example.demo.domain.Chat_messageDTO;
import com.example.demo.domain.Chat_roomDTO;
import com.example.demo.entity.Chat_message;
import com.example.demo.entity.Chat_room;
import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;

public interface ChatService {

	List<Chat_messageDTO> selectAllmessageWhereRoomSeq(Chat_message entity);
	List<Chat_roomDTO> selectRoom(PageRequest pageRequest, SearchRequest searchRequest, String userId);
	int insertMessage(Chat_message entity);
	Chat_room insertRoom(Chat_room entity);
}
