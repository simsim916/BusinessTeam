package com.jyh.tomatoFarm;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class ItemServiceImpl implements ItemService{

	@Autowired
	ItemDAO dao;
	
	@Override
	public List<ItemDTO> selectList() {
		return dao.selectList();
	}

	@Override
	public List<ItemDTO> search(String keyWord) {
		return dao.search(keyWord);
	}

	@Override
	public ItemDTO selectOne(int code) {
		return dao.selectOne(code);
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
	
	@Override
	public List<ItemDTO> brandList2() {
		return null;
	}
	
	@Override
	public List<ItemDTO> brandList3() {
		return null;
	}
	
}
