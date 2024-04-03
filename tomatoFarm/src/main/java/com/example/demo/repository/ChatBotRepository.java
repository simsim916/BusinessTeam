package com.example.demo.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.example.demo.entity.ChatBot;
import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;

@Repository
public interface ChatBotRepository {

	ChatBot save(ChatBot chatbot);
	List<ChatBot> selectAllFromRoot (ChatBot chatbot);
	List<ChatBot> selectRootList (PageRequest pageRequest, SearchRequest searchRequest);
}
