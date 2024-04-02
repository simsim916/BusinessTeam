package com.example.demo.serviceImpl;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.example.demo.domain.ChatBotDTO;
import com.example.demo.entity.ChatBot;
import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;
import com.example.demo.repository.ChatBotRepository;
import com.example.demo.service.ChatBotService;

import lombok.AllArgsConstructor;

@Transactional
@AllArgsConstructor
@Service
public class ChatBotServiceImpl implements ChatBotService {

	private final ChatBotRepository chatbotrepository;

	@Override
	public ChatBot save(ChatBot chatbot) {
		LocalDateTime today = LocalDateTime.now();

		chatbot.setRegdate(today);
		return chatbotrepository.save(chatbot);
	}

	@Override
	public List<ChatBot> selectAllFromRoot(ChatBot chatbot) {
		return chatbotrepository.selectAllFromRoot(chatbot);
	}
}
