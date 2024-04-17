package com.example.demo.serviceImpl;

import java.time.LocalDateTime;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.example.demo.domain.Chat_messageDTO;
import com.example.demo.domain.Chat_roomDTO;
import com.example.demo.entity.Chat_message;
import com.example.demo.entity.Chat_room;
import com.example.demo.entity.User;
import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;
import com.example.demo.repository.Chat_messageRepository;
import com.example.demo.repository.Chat_roomRepository;
import com.example.demo.repository.Chat_roomRepositoryJPA;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.ChatService;

import lombok.RequiredArgsConstructor;

@Transactional
@RequiredArgsConstructor
@Service
public class ChatServiceImpl implements ChatService {

	private final Chat_messageRepository chat_messageRepository;
	private final Chat_roomRepositoryJPA chat_roomRepositoryJPA;
	private final Chat_roomRepository chat_roomRepository;
	private final UserRepository userRepository;
	

	
	@Override
	public int insertMessage(Chat_message entity) {
		LocalDateTime today = LocalDateTime.now();
		entity.setRegdate(today);
		return chat_messageRepository.insertMessage(entity);
	}
	
	@Override
	public Chat_room insertRoom(Chat_room entity) {
		return chat_roomRepositoryJPA.save(entity);
	}
	
	@Override
	public List<Chat_messageDTO> selectAllmessageWhereRoomSeq(Chat_message entity) {
		return chat_messageRepository.selectAllmessageWhereRoomSeq(entity);
	}
	@Override
	public List<Chat_roomDTO> selectRoom(PageRequest pageRequest, SearchRequest searchRequest, String userId) {
		
		User user = User.builder().id(userId).build();
		user = userRepository.selectUser(user);
		if(user.getLevel() <100) {
			return chat_roomRepository.selectAllRoom(pageRequest, searchRequest);
		} else {
			return chat_roomRepository.selectUserRoom(pageRequest, userId);
		}
	}
	
}
