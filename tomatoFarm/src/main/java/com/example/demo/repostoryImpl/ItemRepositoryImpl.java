package com.example.demo.repostoryImpl;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.example.demo.domain.ItemDTO;
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
import static com.example.demo.entity.Qitem_event.item_event;

import lombok.AllArgsConstructor;

@Repository
@AllArgsConstructor
public class ItemRepositoryImpl implements ItemRepository{
	
	private final JPAQueryFactory jPAQueryFactory;

	
	// queryDSL 동적 정렬을 위해 OrderSpecifier객체를 이용한 동적 정렬
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
	public List<ItemDTO> selectItemWhereEvent(PageRequest pageRequest) {
		return jPAQueryFactory.select(Projections.bean(ItemDTO.class, 
				item.code,
				item.brand,
				item.name,
				item.delivery,
				item.price,
				item.sales,
				item.stock,
				item.views,
				item.like,
				item.event_code,
				item_event.discount,
				item_event.name.as("event_name")
				))
				.from(item)
				.join(item_event).on(item.event_code.eq(item_event.code))
				.orderBy(item.sales.desc())
				.offset((pageRequest.getPage()-1)*pageRequest.getSize()+1).limit(pageRequest.getPage()*pageRequest.getSize())
				.fetch();
	}
	
	@Override
	// ** 브랜드 상품 조회 
	public List<ItemDTO> selectItemWherebrand(PageRequest pageRequest, SearchRequest searchRequest){
		return jPAQueryFactory.select(Projections.bean(ItemDTO.class, 
				item.code,
				item.brand,
				item.name,
				item.delivery,
				item.price,
				item.sales,
				item.stock,
				item.views,
				item.like,
				item.event_code,
				item_event.discount,
				item_event.name.as("event_name")
				))
				.from(item).leftJoin(item_event).on(item.event_code.eq(item_event.code))
				.where(item.brand.eq(searchRequest.getKeyword()))
				.orderBy(item.sales.desc())
				.offset((pageRequest.getPage()-1)*pageRequest.getSize()+1).limit(pageRequest.getPage()*pageRequest.getSize())
				.fetch();
	}
	
	@Override
	// ** 키워드 상품 페이징 조회
	public List<ItemDTO> selectItemWhereSearchType(PageRequest pageRequest, SearchRequest searchRequest){
	System.out.println(searchRequest.getType());
		return jPAQueryFactory.select(Projections.bean(ItemDTO.class, 
				item.code,
				item.brand,
				item.name,
				item.delivery,
				item.price,
				item.sales,
				item.stock,
				item.views,
				item.like,
				item.event_code,
				item_event.discount,
				item_event.name.as("event_name")
				))
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
	public List<ItemDTO> selectItemWhereKeyword(SearchRequest searchRequest) {
		return jPAQueryFactory.select(Projections.bean(ItemDTO.class, 
				item.code,
				item.brand,
				item.name,
				item.delivery,
				item.price,
				item.sales,
				item.stock,
				item.views,
				item.like,
				item.event_code,
				item_event.discount,
				item_event.name.as("event_name")
				))
				.from(item).leftJoin(item_event).on(item.event_code.eq(item_event.code))
				.where(item.sort2.contains(searchRequest.getKeyword())
						.or(item.sort3.contains(searchRequest.getKeyword()))
						.or(item.brand.contains(searchRequest.getKeyword()))
						.or(item.name.contains(searchRequest.getKeyword())))
				.fetch();
	}

	@Override
	// ** 키워드 상품 단순 조회 -> 필터
	public List<SortDTO> selectSortWhereKeyword(SearchRequest searchRequest) {
		List<SortDTO> result = jPAQueryFactory.select(
				Projections.bean(SortDTO.class, 
									item.sort1,
									item.sort2,
									item.sort2.count().as("acount"))
				).from(item)
				.where(item.sort2.contains(searchRequest.getKeyword())
								.or(item.sort3.contains(searchRequest.getKeyword()))
								.or(item.brand.contains(searchRequest.getKeyword()))
								.or(item.name.contains(searchRequest.getKeyword())).and(item.sort1.ne("밀키트")))
				.groupBy(item.sort1,item.sort2)
				.fetch();
		
//		result.addAll(jPAQueryFactory.select(
//				Projections.bean(SortDTO.class, 
//						item.sort1.as("sort1"),
//						item.brand.as("sort2"),
//						item.brand.count().as("acount"))
//				).from(item)
//				.where(item.sort1.eq("밀키트")
//						.and(item.sort2.contains(searchRequest.getKeyword())
//								.or(item.sort3.contains(searchRequest.getKeyword()))
//								.or(item.brand.contains(searchRequest.getKeyword()))
//								.or(item.name.contains(searchRequest.getKeyword()))))
//				.groupBy(item.brand)
//				.fetch());
		
		return result;
	}
	
	@Override
	// ** 코드로 상품 조회
    public ItemDTO selectItemWhereCode(SearchRequest searchRequest) {
        return jPAQueryFactory.select(Projections.bean(ItemDTO.class, 
				item.code,
				item.brand,
				item.name,
				item.delivery,
				item.price,
				item.sales,
				item.stock,
				item.views,
				item.like,
				item.event_code,
				item_event.discount,
				item_event.name.as("event_name")
				))
    			.from(item).leftJoin(item_event).on(item.event_code.eq(item_event.code))
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
                .orderBy(item.sort2.when("밀키트").then("a").otherwise("b").asc())
                .fetch();
    }
	
	/* 🎃🎃🎃🎃🎃🎃 검수 전 🎃🎃🎃🎃🎃🎃 */
	
	
}
