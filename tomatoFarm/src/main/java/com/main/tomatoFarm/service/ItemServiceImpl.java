package com.main.tomatoFarm.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.main.tomatoFarm.domain.ItemDTO;
import com.main.tomatoFarm.model.ItemDAO;


@Service
public class ItemServiceImpl implements ItemService{

	@Autowired
	ItemDAO dao;
	
	@Override
	public List<ItemDTO> selectItemList() {
		return dao.selectItemList();
	}

	@Override
	public List<ItemDTO> selectItemListWhereKeyword(String keyword) {
		return dao.selectItemListWhereKeyword(keyword);
	}

	@Override
	public ItemDTO selectItem(int code) {
		return dao.selectItem(code);
	}

	@Override
	public List<ItemDTO> selectEvent() {
		return dao.selectEvent();
	}
	
	@Override
	public List<ItemDTO> selectItemListBySales() {
		return dao.selectItemListBySales();
	}
	
	@Override
	public List<ItemDTO> selectItemListWhereBrand(String str) {
		return dao.selectItemListWhereBrand(str);
	}
	
	
}
