package com.example.demo.item.item_ask.service;


import java.time.LocalDateTime;
import java.util.List;

import com.example.demo.item.item_ask.entity.ItemAsk;
import org.springframework.stereotype.Service;

import com.example.demo.item.item_ask.domain.ItemAskDTO;
import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;
import com.example.demo.item.item_ask.repository.ItemAskRepository;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class ItemAskServiceImpl implements ItemAskService {
	
	private final ItemAskRepository item_askRepository;
	
	@Override
	public List<ItemAskDTO> selectItemAskListStringWhereType(PageRequest pageRequest, SearchRequest searchRequest) {
		return item_askRepository.selectItemAskListStringWhereType(pageRequest, searchRequest);
	}

	
	@Override
	public List<ItemAskDTO> selectItemAskListIntegerWhereType(PageRequest pageRequest, SearchRequest searchRequest) {
		return item_askRepository.selectItemAskListIntegerWhereType( pageRequest,  searchRequest);
	}
	
	public ItemAsk merge(ItemAsk entity) {
		LocalDateTime date = LocalDateTime.now();
		entity.setRegdate(date);
		return item_askRepository.merge(entity);
	}


	
	
}
	
