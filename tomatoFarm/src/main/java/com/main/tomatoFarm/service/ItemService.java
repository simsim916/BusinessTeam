package com.main.tomatoFarm.service;

import java.util.List;

import com.main.tomatoFarm.domain.ItemDTO;


public interface ItemService {

	
	public List<ItemDTO> selectItemList(); // 전체상품
	public List<ItemDTO> selectItemListWhereKeyword(String keyWord); // 검색기능(브랜드 or 제품명)
	public List<ItemDTO> selectItemListBySales(); // 판매량 높은순서로 리스트 출력
	public ItemDTO selectItem(int Code); // 디테일 페이지
	
//	=================================================================
	public List<ItemDTO> selectEvent(); // 이벤트 진행중인 상품 리스트 인덱스페이지
	public List<ItemDTO> selectItemListWhereBrand(String str); // 인덱스페이지
}
