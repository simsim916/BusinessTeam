package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.ChatBot;

public interface ChatBotService {
	
	ChatBot save(ChatBot chatbot);
	List<ChatBot> selectAllFromRoot(ChatBot chatbot);
	
}
