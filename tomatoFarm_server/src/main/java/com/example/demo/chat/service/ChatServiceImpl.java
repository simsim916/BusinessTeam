package com.example.demo.chat.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import com.example.demo.chat.entity.ChatMessage;
import com.example.demo.chat.entity.ChatRoom;
import com.example.demo.chat.repository.ChatMessageRepository;
import com.example.demo.chat.repository.ChatMessageRepositoryJPA;
import com.example.demo.user.user.domain.AdminChat;
import com.example.demo.user.user.repository.UserRepositoryJPA;
import org.springframework.stereotype.Service;

import com.example.demo.chat.domain.ChatMessageDTO;
import com.example.demo.chat.domain.ChatRoomDTO;
import com.example.demo.user.user.entity.User;
import com.example.demo.chat.repository.ChatRoomRepository;
import com.example.demo.chat.repository.ChatRoomRepositoryJPA;
import com.example.demo.user.user.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Transactional
@RequiredArgsConstructor
@Service
public class ChatServiceImpl implements ChatService {

	private final ChatMessageRepository chatMessageRepository;
	private final ChatRoomRepository chatRoomRepository;
	private final UserRepository userRepository;
	private final UserRepositoryJPA userRepositoryJPA;
	private final ChatMessageRepositoryJPA chatMessageRepositoryJPA;
	private final ChatRoomRepositoryJPA chatRoomRepositoryJPA;

	@Override
	@Transactional
	public List<ChatMessageDTO> insertUserMessage(ChatMessage entity) {
		LocalDateTime today = LocalDateTime.now();
		entity.setRegdate(today);
		entity = chatMessageRepositoryJPA.save(entity);
		List<ChatMessageDTO> list = chatMessageRepositoryJPA.findAllByChatRoomSeq(entity.getChatRoomSeq());
		return list;
	}
	@Override
	@Transactional
	public AdminChat insertAdminMessage(ChatMessage entity) {
		LocalDateTime today = LocalDateTime.now();
		entity.setRegdate(today);
		entity = chatMessageRepositoryJPA.save(entity);
		Optional<ChatRoom> optionalChatRoom = chatRoomRepositoryJPA.findById(entity.getChatRoomSeq());
		if (optionalChatRoom.isPresent()) {
			ChatRoom chatRoom = optionalChatRoom.get();
			chatRoom.setIng(1);
			chatRoom.setUserIdAdmin(entity.getWriter());
			chatRoomRepositoryJPA.save(chatRoom);
		}
		AdminChat result = AdminChat.builder()
				.messageList(chatMessageRepositoryJPA.findAllByChatRoomSeq(entity.getChatRoomSeq()))
				.roomList(chatRoomRepositoryJPA.findAllWithRegdate())
				.build();
		return result;
	}
	
	@Override
	@Transactional
	public List<ChatRoomDTO> insertRoom(ChatRoom entity) {
		boolean firstWrite = entity.getSeq()==null;
		entity = chatRoomRepositoryJPA.save(entity);
		if (firstWrite){
			ChatMessage start_message = ChatMessage.builder()
				.chatRoomSeq(entity.getSeq())
				.writer("tomatofarm")
				.content("문의하실 내용을 입력해주세요~")
				.regdate(LocalDateTime.now())
				.build();
			chatMessageRepositoryJPA.save(start_message);
		return null;
		} else {
		return chatRoomRepositoryJPA.findAllWithRegdate();
		}
	}
	
	@Override
	public List<ChatMessageDTO> selectAllmessageWhereRoomSeq(ChatMessage entity) {
		return chatMessageRepositoryJPA.findAllByChatRoomSeq(entity.getChatRoomSeq());
	}

	@Override
	public List<ChatRoomDTO> selectRoom(String userId) {
		Optional<User> optionalUser = userRepositoryJPA.findById(userId);
		if (optionalUser.isPresent()) {
			User user = optionalUser.get();
			if (user.getUserLevelCode() < 100) {
				return chatRoomRepositoryJPA.findAllWithRegdate();
			} else {
				return chatRoomRepositoryJPA.findAllWithRegdateByUserId(userId);
			}
		}
		return null;
	}
	
}
