package com.example.demo.item.item.service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import com.example.demo.item.item.repository.ItemRepositoryJPA;
import com.example.demo.mapper.ItemMapper;
import com.example.demo.page.page_keyword.entity.PageKeyword;
import com.example.demo.page.page_keyword.entity.PageKeywordID;
import com.example.demo.user.user_cart.entity.UserCart;
import com.example.demo.user.user_cart.entity.UserCartID;
import com.example.demo.user.user_cart.repository.UserCartRepositoryJPA;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Service;

import com.example.demo.item.item.domain.ItemDTO;
import com.example.demo.item.item.domain.SortDTO;
import com.example.demo.item.item.entity.Item;
import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;
import com.example.demo.item.item.repository.ItemRepository;
import com.example.demo.page.page_keyword.repository.pageKeywordRepository;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class ItemServiceImpl implements ItemService {

	private final ItemRepository itemRepository;
	private final UserCartRepositoryJPA userCartRepositoryJPA;
	private final ItemMapper itemMapper;
	private final ItemRepositoryJPA itemRepositoryJPA;
	private final pageKeywordRepository pageKeywordRepository;

	@Override
	public List<ItemDTO> selectRecentItemWhereUserId(SearchRequest searchRequest) {
		return itemMapper.selectRecentItemWhereUserId(searchRequest);
	}
	@Override
	public List<ItemDTO> selectItemListWhereBrand(SearchRequest searchRequest) {
		return itemMapper.selectItemListWhereBrand(searchRequest);
	}

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
	public ItemDTO getDetailPage(PageRequest pageRequest, SearchRequest searchRequest, String userId) {
		if(userId != null && !userId.isEmpty()) {
			UserCartID userCartID = UserCartID.builder()
					.userId(userId)
					.itemCode(Integer.parseInt(searchRequest.getKeyword()))
					.build();
			Optional<UserCart> optionalUserCart= userCartRepositoryJPA.findById(userCartID);
			if(optionalUserCart.isPresent()) {
				UserCart userCart = optionalUserCart.get();
				userCart.setViews(userCart.getViews() + 1);
				userCart.setRegdate(LocalDate.now());
				userCartRepositoryJPA.save(userCart);
			} else {
				UserCart userCart = UserCart.builder()
						.userId(userId)
						.itemCode(Integer.parseInt(searchRequest.getKeyword()))
						.amount(0)
						.regdate(LocalDate.now())
						.build();
				userCartRepositoryJPA.save(userCart);
			}
		}
		ItemDTO itemDTO = itemRepositoryJPA.findByCode(Integer.parseInt(searchRequest.getKeyword()));
		itemDTO.setViews(itemDTO.getViews()+1);
		Item entity = dtotoEntity(itemDTO);
		itemRepositoryJPA.save(entity);
		return itemDTO;
	}
	
	@Override
	public List<ItemDTO> selectItemListStringWhereTypeNotNull(SearchRequest searchRequest) {
		List<ItemDTO> result = itemMapper.selectItemListStringWhereTypeNotNull(searchRequest);
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
		
		return itemMapper.selectItemWhereKeyword(searchRequest);
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
