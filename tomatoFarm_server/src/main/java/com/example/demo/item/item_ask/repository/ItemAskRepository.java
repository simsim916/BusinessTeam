package com.example.demo.item.item_ask.repository;

import java.util.List;

import com.example.demo.item.item_ask.entity.ItemAsk;
import org.springframework.stereotype.Repository;

import com.example.demo.item.item_ask.domain.ItemAskDTO;
import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;

@Repository
public interface ItemAskRepository {

	List<ItemAskDTO> selectItemAskListStringWhereType(PageRequest pageRequest , SearchRequest searchRequest);
	List<ItemAskDTO> selectItemAskListIntegerWhereType(PageRequest pageRequest , SearchRequest searchRequest);
	ItemAsk merge(ItemAsk entity);
}
