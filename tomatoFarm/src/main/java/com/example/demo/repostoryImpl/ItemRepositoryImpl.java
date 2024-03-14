package com.example.demo.repostoryImpl;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.example.demo.domain.SortDTO;
import com.example.demo.entity.Item;
import com.example.demo.entity.QItem;
import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;
import com.example.demo.repository.ItemRepository;
import com.querydsl.core.types.Order;
import com.querydsl.core.types.OrderSpecifier;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;

import static com.example.demo.entity.QItem.item;

import lombok.AllArgsConstructor;

@Repository
@AllArgsConstructor
public class ItemRepositoryImpl implements ItemRepository{
	
	private final JPAQueryFactory jPAQueryFactory;

	public OrderSpecifier<?> getSortType(String type) {
		if(type!=null) {
			switch (type) {
			case "priceD": return new OrderSpecifier<>(Order.DESC, QItem.item.price);
			case "priceA": return new OrderSpecifier<>(Order.ASC, QItem.item.price);
			case "salesA": return new OrderSpecifier<>(Order.ASC, QItem.item.sales);
			}
		}
		return new OrderSpecifier<>(Order.DESC, QItem.item.sales);
	}
	
	@Override
	// ** 이벤트 상품 조회
	public List<Item> selectItemWhereEvent_D(PageRequest pageRequest) {
		return jPAQueryFactory.selectFrom(item)
				.where(item.event.isNotNull().and(item.event.ne("")))
				.orderBy(item.sales.desc())
				.offset((pageRequest.getPage()-1)*pageRequest.getSize()+1).limit(pageRequest.getPage()*pageRequest.getSize())
				.fetch();
	}
	
	@Override
	// ** 브랜드 상품 조회 
	public List<Item> selectItemWherebrand(PageRequest pageRequest, SearchRequest searchRequest){
		return jPAQueryFactory.selectFrom(item)
				.where(item.brand.eq(searchRequest.getKeyword()))
				.orderBy(item.sales.desc())
				.offset((pageRequest.getPage()-1)*pageRequest.getSize()+1).limit(pageRequest.getPage()*pageRequest.getSize())
				.fetch();
	}
	
	@Override
	// ** 키워드 상품 페이징 조회
	public List<Item> selectItemWhereSearchType(PageRequest pageRequest, SearchRequest searchRequest){
	System.out.println(searchRequest.getType());
		return jPAQueryFactory.selectFrom(item)
				.where(item.sort2.contains(searchRequest.getKeyword())
						.or(item.sort3.contains(searchRequest.getKeyword()))
						.or(item.brand.contains(searchRequest.getKeyword()))
						.or(item.name.contains(searchRequest.getKeyword())))
				.orderBy(getSortType(searchRequest.getSortType()))
				.offset((pageRequest.getPage()-1)*pageRequest.getSize()+1).limit(pageRequest.getSize()*pageRequest.getPage())
				.fetch();
	}
	
	@Override
	// ** 키워드 상품 단순 조회
	public List<Item> selectItemWhereKeyword(SearchRequest searchRequest) {
		return jPAQueryFactory.selectFrom(item)
				.where(item.sort2.contains(searchRequest.getKeyword())
						.or(item.sort3.contains(searchRequest.getKeyword()))
						.or(item.brand.contains(searchRequest.getKeyword()))
						.or(item.name.contains(searchRequest.getKeyword())))
				.fetch();
	}

	@Override
	// ** 키워드 상품 단순 조회 -> 필터
	public List<SortDTO> selectSortWhereKeyword(SearchRequest searchRequest) {
		return jPAQueryFactory.select(
				Projections.bean(SortDTO.class, 
									item.sort2,
									item.sort2.count())
				).from(item)
				.where(item.sort2.contains(searchRequest.getKeyword())
						.or(item.sort3.contains(searchRequest.getKeyword()))
						.or(item.brand.contains(searchRequest.getKeyword()))
						.or(item.name.contains(searchRequest.getKeyword())))
				.groupBy(item.sort2)
				.fetch();
	}
	
	@Override
	// ** 코드로 상품 조회
    public Item selectItemWhereCode(SearchRequest searchRequest) {
        return jPAQueryFactory.selectFrom(item)
                .where(item.code.stringValue().eq(searchRequest.getKeyword()))
                .fetchOne();
    }
	
	@Override
	// ** 키워드 상품 분류 조회
    public List<SortDTO> selectSortList() {
        return jPAQueryFactory.select(
        					Projections.bean(SortDTO.class, 
        								item.sort1,
        								item.sort2))
                .from(item)
                .groupBy(item.sort1,item.sort2)
                .fetch();
    }
	
	
	/* 🎃🎃🎃🎃🎃🎃 검수 전 🎃🎃🎃🎃🎃🎃 */
	
	
}
