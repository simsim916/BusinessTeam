package com.example.demo.serviceImpl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.entity.item_event;
import com.example.demo.repository.Item_eventRepository;
import com.example.demo.service.Item_eventService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class Item_eventServiceImpl implements Item_eventService{

	Item_eventRepository item_eventRepository;
	
	@Override
	public List<item_event> selectEventWhere(item_event event) {
		return item_eventRepository.selectEventWhere(event);
	}
	
	public List<item_event> merge(List<item_event> list) {
		return item_eventRepository.merge(list);
	}
}
