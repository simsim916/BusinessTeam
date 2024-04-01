package com.example.demo.serviceImpl;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.example.demo.domain.ChatBotDTO;
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
		public List<ChatBotDTO> saveMessage(PageRequest pageRequest, SearchRequest searchRequest) {
			return chatbotrepository.saveMessage(pageRequest, searchRequest);
		}

}
