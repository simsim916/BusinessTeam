package com.example.demo.serviceImpl;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Service;

import com.example.demo.domain.ItemDTO;
import com.example.demo.domain.SortDTO;
import com.example.demo.entity.Item;
import com.example.demo.entity.Keyword;
import com.example.demo.entity.KeywordID;
import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;
import com.example.demo.repository.ItemRepository;
import com.example.demo.repository.KeywordRepository;
import com.example.demo.service.ItemService;

import lombok.AllArgsConstructor;

@Transactional
@AllArgsConstructor
@Service
public class ItemServiceImpl implements ItemService {

	private final ItemRepository itemRepository;
	private final KeywordRepository keywordRepository;
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

		KeywordID keywordID = KeywordID.builder()
				.keyword(searchRequest.getKeyword())
				.id(userId)
				.searchDate(koreaTime)
				.build();
		
		Keyword entity = Keyword.builder()
				.keyword(keywordID.getKeyword())
				.searchDate(keywordID.getSearchDate())
				.id(keywordID.getId())
				.build();
		
		Optional<Keyword> data = keywordRepository.findById(keywordID);
		if(data.isPresent()) {
			entity=data.get();
			entity.setSearch_count(entity.getSearch_count()+1);
		}
		keywordRepository.save(entity);
		
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
	
}
