package com.example.demo.item.item_event.service;

import java.util.List;

import javax.transaction.Transactional;

import com.example.demo.item.item_event.entity.ItemEvent;
import org.springframework.stereotype.Service;

import com.example.demo.module.SearchRequest;
import com.example.demo.item.item_event.repository.ItemEventRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class ItemEventServiceImpl implements ItemEventService {

	ItemEventRepository item_eventRepository;
	
	@Override
	@Transactional
	public List<ItemEvent> merge(List<ItemEvent> list) {
		return item_eventRepository.merge(list);
	}

	@Override
	public List<ItemEvent> selectEventWhere(SearchRequest searchRequest) {
		if (searchRequest.getKeyword().matches("^[0-9]*$")) {
			return item_eventRepository.selectEventWhereNumber(searchRequest);
		} else {
			return item_eventRepository.selectEventWhereString(searchRequest);
		}
	}
	
	@Override
	@Transactional
	public int insertEvent(List<ItemEvent> list) {
		Integer maxNum = item_eventRepository.checkMaxCode();
		for(ItemEvent entity : list) {
			++maxNum;
			entity.setCode(maxNum);
		}
		
		List<ItemEvent> check = item_eventRepository.merge(list);
		return check.size();
	}
	
	@Override
	public Integer checkMaxCode() {
		
		return item_eventRepository.checkMaxCode();
	}
	
}
