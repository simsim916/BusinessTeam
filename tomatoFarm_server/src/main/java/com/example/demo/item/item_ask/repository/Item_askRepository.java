package com.example.demo.item.item_ask.repository;

import java.util.List;

import com.example.demo.item.item_ask.entity.Item_ask;
import org.springframework.stereotype.Repository;

import com.example.demo.item.item_ask.domain.Item_askDTO;
import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;

@Repository
public interface Item_askRepository {

	List<Item_askDTO> selectItemAskListStringWhereType(PageRequest pageRequest , SearchRequest searchRequest);
	List<Item_askDTO> selectItemAskListIntegerWhereType(PageRequest pageRequest , SearchRequest searchRequest);
	Item_ask merge(Item_ask entity);
}
