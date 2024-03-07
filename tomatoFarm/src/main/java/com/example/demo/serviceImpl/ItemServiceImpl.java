package com.example.demo.serviceImpl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.entity.Item;
import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;
import com.example.demo.repository.ItemRepository;
import com.example.demo.service.ItemService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Log4j2
@AllArgsConstructor
@Service
public class ItemServiceImpl implements ItemService{

	private final ItemRepository itemRepository;
	
	@Override
	public List<Item> selectItemWhereEvent_D(PageRequest pageRequest) {
		
		List<Item> result = itemRepository.selectItemWhereEvent_D(pageRequest);
		
		return result;
	}
	
	@Override
	public List<Item> selectItemWherebrand(PageRequest pageRequest, SearchRequest searchRequest) {
		
		List<Item> result = itemRepository.selectItemWherebrand(pageRequest,searchRequest);
		
		return result;
	}
	
	@Override
	public List<Item> selectItemWhereSearchType(PageRequest pageRequest, SearchRequest searchRequest) {
		List<Item> result = itemRepository.selectItemWhereSearchType(pageRequest,searchRequest);
		return result;
	}
	
	@Override
	public Item selectItemWhereCode(SearchRequest searchRequest) {
		return itemRepository.selectItemWhereCode(searchRequest);
	}
	
	/* 🎃🎃🎃🎃🎃🎃 검수 전 🎃🎃🎃🎃🎃🎃 */
}
	
