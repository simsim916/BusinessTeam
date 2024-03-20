package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.Item_ask;
import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;

public interface Item_askService {

	
	List<Item_ask> selectItemAskList(PageRequest pageRequest, SearchRequest searchRequest);
	
//	=================================
	
}
