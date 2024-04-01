package com.example.demo.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.example.demo.domain.ChatBotDTO;
import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;

@Repository
public interface ChatBotRepository {
	List<ChatBotDTO> saveMessage (SearchRequest searchRequest, PageRequest pageRequest);

}
