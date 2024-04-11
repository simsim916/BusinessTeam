package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.item_event;

public interface Item_eventService {

	List<item_event> selectEventWhere(item_event event);
	List<item_event> merge(List<item_event> list);
}
