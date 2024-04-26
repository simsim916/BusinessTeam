package com.example.demo.item.item.service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import com.example.demo.page.page_keyword.entity.PageKeyword;
import com.example.demo.page.page_keyword.entity.PageKeywordID;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Service;

import com.example.demo.item.item.domain.AddEvent;
import com.example.demo.item.item.domain.ItemDTO;
import com.example.demo.item.item.domain.SortDTO;
import com.example.demo.item.item.entity.Item;
import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;
import com.example.demo.item.item.repository.ItemRepository;
import com.example.demo.item.item.repository.ItemRepositoryJPA;
import com.example.demo.page.page_keyword.repository.pageKeywordRepository;

import lombok.AllArgsConstructor;

@Transactional
@AllArgsConstructor
@Service
public class ItemServiceImpl implements ItemService {

	private final ItemRepository itemRepository;
	private final ItemRepositoryJPA itemRepositoryJPA;
	private final pageKeywordRepository pageKeywordRepository;
	private final EntityManager entityManager;
	
	
	@Override
	public List<ItemDTO> selectItemListWhereType(PageRequest pageRequest, SearchRequest searchRequest) {
		if (searchRequest.getKeyword().matches("^[0-9]*$")) {
			return itemRepository.selectItemListIntegerWhereType(pageRequest, searchRequest);
		} else {
			return itemRepository.selectItemListStringWhereType(pageRequest, searchRequest);
		}
	}
	
	@Override
	@Transactional
	public List<ItemDTO> getDetailPage(PageRequest pageRequest, SearchRequest searchRequest) {
		List<ItemDTO> result = itemRepository.selectItemListIntegerWhereType(pageRequest,searchRequest);
		ItemDTO dto = result.get(0);
		dto.setViews(dto.getViews()+1);
		Item entity = dtotoEntity(dto);
		entityManager.merge(entity);
		return result;
	}
	
	@Override
	public List<ItemDTO> selectItemListStringWhereTypeNotNull(PageRequest pageRequest,SearchRequest searchRequest) {
		List<ItemDTO> result = itemRepository.selectItemListStringWhereTypeNotNull(pageRequest,searchRequest);
		return result;
	}
	
	@Override
	@Transactional
	public List<SortDTO> selectSortWhereKeyword(PageRequest pageRequest, SearchRequest searchRequest) {
		return itemRepository.selectSortWhereKeyword(pageRequest, searchRequest);
	}

	@Override
	public List<ItemDTO> selectItemWhereKeyword(PageRequest pageRequest,SearchRequest searchRequest, @AuthenticationPrincipal String userId) {
		LocalDate koreaTime = LocalDateTime.now().toLocalDate(); // 현재 시간

		PageKeywordID pageKeywordID = PageKeywordID.builder()
				.keyword(searchRequest.getKeyword())
				.userId(userId)
				.searchDate(koreaTime)
				.build();
		
		PageKeyword entity = PageKeyword.builder()
				.keyword(pageKeywordID.getKeyword())
				.searchDate(pageKeywordID.getSearchDate())
				.userId(pageKeywordID.getUserId())
				.build();
		
		Optional<PageKeyword> data = pageKeywordRepository.findById(pageKeywordID);
		if(data.isPresent()) {
			entity=data.get();
			entity.setSearch_count(entity.getSearch_count()+1);
		}
		pageKeywordRepository.save(entity);
		
		return itemRepository.selectItemWhereKeyword(pageRequest, searchRequest);
	}
	
	@Override
	public List<SortDTO> selectSortList() {
		return itemRepository.selectSortList();
	}

	@Override
	public Item merge(Item entity) {
		return itemRepository.merge(entity);
	}
	@Override
	public int mergeAll(List<Item> list) {
		return itemRepository.mergeAll(list);
	}
	
	@Override
	public int persist(List<Item> list) {
		return itemRepository.persist(list);
	}
	
	@Override
	public List<ItemDTO> selectItemListWhereInCode(List<Integer> codeList) {
		return itemRepository.selectItemListWhereInCode(codeList);
	}
	
	@Override
	public List<Item> selectItemTableWhereType(AddEvent dto) {
		List<Item> list = dto.getCodeList();
		List<Integer> codeList = new ArrayList<Integer>();
		for(Item item : list) {
			codeList.add(item.getCode());
		}
		return itemRepositoryJPA.findAllById(codeList);
	}
	
	
	
}
