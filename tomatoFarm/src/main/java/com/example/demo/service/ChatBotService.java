package com.example.demo.service;

import java.util.List;

import com.example.demo.domain.ChatBotDTO;
import com.example.demo.entity.ChatBot;
import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;

public interface ChatBotService {
	
	ChatBot save(ChatBot chatbot);
	List<ChatBot> selectAllFromRoot(ChatBot chatbot);
	List<ChatBotDTO> selectRootList(PageRequest pageRequest, SearchRequest searchRequest);
	
}
