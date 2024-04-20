package com.example.demo.item.item_event.repository;

import java.util.List;

import com.example.demo.item.item_event.entity.itemEvent;
import com.example.demo.module.SearchRequest;

public interface ItemEventRepository {

	List<itemEvent> selectEventWhereNumber(SearchRequest searchRequest);
	List<itemEvent> selectEventWhereString(SearchRequest searchRequest);
	List<itemEvent> merge(List<itemEvent> list);
}
