package com.example.demo.serviceImpl;

import java.util.List;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.example.demo.domain.ItemDTO;
import com.example.demo.domain.SortDTO;
import com.example.demo.entity.Item;
import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;
import com.example.demo.repository.ItemRepository;
import com.example.demo.service.ItemService;

import lombok.AllArgsConstructor;

@Transactional
@AllArgsConstructor
@Service
public class ItemServiceImpl implements ItemService {

	private final ItemRepository itemRepository;
	private final EntityManager entityManager;
	

	@Override
	public List<ItemDTO> selectItemListStringWhereType(PageRequest pageRequest, SearchRequest searchRequest) {
		List<ItemDTO> result = itemRepository.selectItemListStringWhereType(pageRequest,searchRequest);
		return result;
	}

	@Override
	public List<ItemDTO> selectItemListIntegerWhereType(PageRequest pageRequest, SearchRequest searchRequest) {
		List<ItemDTO> result = itemRepository.selectItemListIntegerWhereType(pageRequest,searchRequest);
		return result;
	}
	
	
	@Override
	public List<ItemDTO> selectItemListStringWhereTypeNotNull(PageRequest pageRequest,SearchRequest searchRequest) {
		List<ItemDTO> result = itemRepository.selectItemListStringWhereTypeNotNull(pageRequest,searchRequest);
		return result;
	}
	
	@Override
	public List<ItemDTO> selectItemWherebrand(PageRequest pageRequest, SearchRequest searchRequest) {
		List<ItemDTO> result = itemRepository.selectItemWherebrand(pageRequest, searchRequest);
		return result;
	}

	@Override
	public List<ItemDTO> selectItemWhereSearchType(PageRequest pageRequest, SearchRequest searchRequest) {
		List<ItemDTO> result = itemRepository.selectItemWhereSearchType(pageRequest, searchRequest);
		return result;
	}
	
	@Override
	public List<SortDTO> selectSortWhereKeyword(SearchRequest searchRequest) {
		List<SortDTO> result = itemRepository.selectSortWhereKeyword(searchRequest);
		return result;
	}

	@Override
	public List<SortDTO> selectSortList() {
		return itemRepository.selectSortList();
	}

	/* 🎃🎃🎃🎃🎃🎃 검수 전 🎃🎃🎃🎃🎃🎃 */

	public int batchInsert(List<Item> entity) {
		return (int) itemRepository.batchInsert(entity);
	}

	public List<ItemDTO> selectAll() {
		return itemRepository.selectAll();
	}
	
	@Override
	public void insertItem(Item entity) {
		itemRepository.insertItem(entity);
	}
	
	@Override
	public List<ItemDTO> adminStringColumn(SearchRequest searchRequest,PageRequest pageRequest) {
		return itemRepository.adminStringColumn(searchRequest,pageRequest);
	}
	
	@Override
	public List<ItemDTO> adminIntegerColumn(SearchRequest searchRequest, PageRequest pageRequest) {
		return itemRepository.adminIntegerColumn(searchRequest,pageRequest);
	}
	
	@Override
	public int itemListCount() {
		return 0;
	}
	
	@Override
	public Item updateItem(Item entity) {
		return entityManager.merge(entity);
	}

	
}
