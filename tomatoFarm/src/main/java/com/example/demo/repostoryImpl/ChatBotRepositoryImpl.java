package com.example.demo.repostoryImpl;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.example.demo.domain.ChatBotDTO;
import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;
import com.example.demo.repository.ChatBotRepository;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.AllArgsConstructor;

@Repository
@AllArgsConstructor
public class ChatBotRepositoryImpl implements ChatBotRepository {
	
	private final JPAQueryFactory jPAQueryFactory;
	
	@Override
		public List<ChatBotDTO> saveMessage(SearchRequest searchRequest, PageRequest pageRequest) {
			return jPAQueryFactory
					.selectFrom(chatbot)
					.;
		}

}
