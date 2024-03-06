package com.example.demo.serviceImpl;

import java.util.Iterator;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.entity.Item;
import com.example.demo.module.PageRequest;
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
	public List<Item> selectMealkitWhereEvent_D(PageRequest pageRequest) {
		
		List<Item> result = itemRepository.selectMealkitWhereEvent_D(pageRequest);
		
		return result;
	}
	
	@Override
	public List<Item> selectItemWhereKeyword(PageRequest pageRequest, String keyword) {
		
		List<Item> result = itemRepository.selectItemWhereKeyword(pageRequest,keyword);
		
		return result;
	}
	/* 🎃🎃🎃🎃🎃🎃 검수 전 🎃🎃🎃🎃🎃🎃 */
	
}
