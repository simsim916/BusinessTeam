package com.example.demo.item.item_event.service;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.item.item_event.entity.ItemEvent;
import com.example.demo.module.SearchRequest;

public interface ItemEventService {

	List<ItemEvent> selectEventWhere(SearchRequest searchRequest);
	List<ItemEvent> merge(List<ItemEvent> list);
	Integer checkMaxCode() ;
	int insertEvent(List<ItemEvent> list);
}
