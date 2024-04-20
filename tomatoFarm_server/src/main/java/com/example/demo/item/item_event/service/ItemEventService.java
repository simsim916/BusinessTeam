package com.example.demo.item.item_event.service;

import java.util.List;

import com.example.demo.item.item_event.entity.itemEvent;
import com.example.demo.module.SearchRequest;

public interface ItemEventService {

	List<itemEvent> selectEventWhere(SearchRequest searchRequest);
	List<itemEvent> merge(List<itemEvent> list);
}
