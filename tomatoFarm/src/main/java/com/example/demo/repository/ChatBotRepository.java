package com.example.demo.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.example.demo.entity.ChatBot;

@Repository
public interface ChatBotRepository {

	ChatBot save(ChatBot chatbot);
	List<ChatBot> selectAllFromRoot (ChatBot chatbot);
}
