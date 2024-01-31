package com.jyh.tomatoFarm;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


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
	public List<ItemDTO> selectSales() {
		return dao.selectSales();
	}
	
	@Override
	public List<ItemDTO> brandList1() {
		return null;
	}
	
	
}
