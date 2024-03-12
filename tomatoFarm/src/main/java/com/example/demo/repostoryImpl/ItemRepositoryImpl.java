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
import com.querydsl.jpa.impl.JPAQueryFactory;

import static com.example.demo.entity.QItem.item;

import lombok.AllArgsConstructor;

@Repository
@AllArgsConstructor
public class ItemRepositoryImpl implements ItemRepository{
	
	private final JPAQueryFactory jPAQueryFactory;

	@Override
	public Item selectItemWhereCode(SearchRequest searchRequest) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public List<String> selectSortList() {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public List<SortDTO> selectSortWhereSearchType(SearchRequest searchRequest) {
		// TODO Auto-generated method stub
		return null;
	}
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
	public List<Item> selectItemWhereEvent_D(PageRequest pageRequest) {
		return jPAQueryFactory.selectFrom(item)
				.where(item.event.isNotNull().and(item.event.ne("")))
				.orderBy(item.sales.desc())
				.offset((pageRequest.getPage()-1)*pageRequest.getSize()+1).limit(pageRequest.getPage()*pageRequest.getSize())
				.fetch();
	}
	
	@Override
	public List<Item> selectItemWherebrand(PageRequest pageRequest, SearchRequest searchRequest){
		return jPAQueryFactory.selectFrom(item)
				.where(item.brand.eq(searchRequest.getKeyword()))
				.orderBy(item.sales.desc())
				.offset((pageRequest.getPage()-1)*pageRequest.getSize()+1).limit(pageRequest.getPage()*pageRequest.getSize())
				.fetch();
	}
	
	@Override
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
    public Item selectItemWhereCode(SearchRequest searchRequest) {
        System.out.println("aa");
        return jPAQueryFactory.selectFrom(item)
                .where(item.code.stringValue().eq(searchRequest.getKeyword()))
                .fetchOne();
    }
	
	@Override
    public List<String> selectSortList() {
        return jPAQueryFactory.select(item.sort2)
                .from(item)
                .groupBy(item.sort2)
                .fetch();
    }
	
	@Override
	public List<SortDTO> selectSortWhereSearchType(SearchRequest searchRequest) {
		// TODO Auto-generated method stub
		return null;
	}
	
	/* 🎃🎃🎃🎃🎃🎃 검수 전 🎃🎃🎃🎃🎃🎃 */
	
	
}
