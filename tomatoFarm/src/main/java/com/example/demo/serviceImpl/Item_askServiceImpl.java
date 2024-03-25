package com.example.demo.serviceImpl;


import java.time.LocalDateTime;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.domain.Item_askDTO;
import com.example.demo.entity.Item_ask;
import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;
import com.example.demo.repository.Item_askRepository;
import com.example.demo.service.Item_askService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Log4j2
@AllArgsConstructor
@Service
public class Item_askServiceImpl implements Item_askService{
	
	private final Item_askRepository item_askRepository;
	
	@Override
	public List<Item_ask> selectItemAskListStringWhereType(PageRequest pageRequest, SearchRequest searchRequest) {
		return item_askRepository.selectItemAskListStringWhereType(pageRequest, searchRequest);
	}

	
	@Override
	public List<Item_ask> selectItemAskListIntegerWhereType(PageRequest pageRequest, SearchRequest searchRequest) {
		return item_askRepository.selectItemAskListIntegerWhereType( pageRequest,  searchRequest);
	}
	
	@Override
	//**상품문의 등록
	public int insertItemAsk(Item_askDTO dto) {
		
		LocalDateTime currentDateTime = LocalDateTime.now();
		
		dto.setRegdate(currentDateTime);
		
		return item_askRepository.insertItemAsk(dto);
	}
	
}
	
