package com.example.demo.chat.repository;

import com.example.demo.chat.entity.ChatRoom;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChatRoomRepositoryJPA extends JpaRepository<ChatRoom, Long>{
	
}
