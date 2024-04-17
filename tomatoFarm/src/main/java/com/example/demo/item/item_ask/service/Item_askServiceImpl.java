package com.example.demo.item_ask.service;


import java.time.LocalDateTime;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.item_ask.domain.Item_askDTO;
import com.example.demo.item_ask.entity.Item_ask;
import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;
import com.example.demo.item_ask.repository.Item_askRepository;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class Item_askServiceImpl implements Item_askService{
	
	private final Item_askRepository item_askRepository;
	
	@Override
	public List<Item_askDTO> selectItemAskListStringWhereType(PageRequest pageRequest, SearchRequest searchRequest) {
		return item_askRepository.selectItemAskListStringWhereType(pageRequest, searchRequest);
	}

	
	@Override
	public List<Item_askDTO> selectItemAskListIntegerWhereType(PageRequest pageRequest, SearchRequest searchRequest) {
		return item_askRepository.selectItemAskListIntegerWhereType( pageRequest,  searchRequest);
	}
	
	public Item_ask merge(Item_ask entity) {
		LocalDateTime date = LocalDateTime.now();
		entity.setRegdate(date);
		return item_askRepository.merge(entity);
	}


	
	
}
	
