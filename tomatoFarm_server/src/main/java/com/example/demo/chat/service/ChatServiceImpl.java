package com.example.demo.chat.service;

import java.time.LocalDateTime;
import java.util.List;

import javax.transaction.Transactional;

import com.example.demo.chat.entity.ChatMessage;
import com.example.demo.chat.entity.ChatRoom;
import com.example.demo.chat.repository.ChatMessageRepository;
import org.springframework.stereotype.Service;

import com.example.demo.chat.domain.ChatMessageDTO;
import com.example.demo.chat.domain.ChatRoomDTO;
import com.example.demo.user.user.entity.User;
import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;
import com.example.demo.chat.repository.ChatRoomRepository;
import com.example.demo.chat.repository.ChatRoomRepositoryJPA;
import com.example.demo.user.user.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Transactional
@RequiredArgsConstructor
@Service
public class ChatServiceImpl implements ChatService {

	private final ChatMessageRepository chat_messageRepository;
	private final ChatRoomRepositoryJPA chat_roomRepositoryJPA;
	private final ChatRoomRepository chat_roomRepository;
	private final UserRepository userRepository;
	

	
	@Override
	public ChatMessage insertMessage(ChatMessage entity) {
		LocalDateTime today = LocalDateTime.now();
		entity.setRegdate(today);
		return chat_messageRepository.insertMessage(entity);
	}
	
	@Override
	@Transactional
	public ChatRoom insertRoom(ChatRoom entity) {
		boolean firstWrite = entity.getSeq()==null;
		entity = chat_roomRepositoryJPA.save(entity);
		if (firstWrite){
			ChatMessage start_message = ChatMessage.builder()
				.chatRoomSeq(entity.getSeq())
				.writer("tomatofarm")
				.content("문의하실 내용을 입력해주세요~")
				.regdate(LocalDateTime.now())
				.build();
			chat_messageRepository.insertMessage(start_message);
		}
		return entity;
	}
	
	@Override
	public List<ChatMessageDTO> selectAllmessageWhereRoomSeq(ChatMessage entity) {
		return chat_messageRepository.selectAllmessageWhereRoomSeq(entity);
	}
	@Override
	public List<ChatRoomDTO> selectRoom(PageRequest pageRequest, SearchRequest searchRequest, String userId) {
		
		User user = User.builder().id(userId).build();
		user = userRepository.selectUser(user);
		if(user.getUserLevelCode() <100) {
			return chat_roomRepository.selectAllRoom(pageRequest, searchRequest);
		} else {
			return chat_roomRepository.selectUserRoom(pageRequest, userId);
		}
	}
	
}
