package com.example.demo.repostoryImpl;

import static com.example.demo.entity.QItem.item;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.support.SimpleJpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.domain.SortDTO;
import com.example.demo.entity.Item;
import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;
import com.example.demo.repository.ItemRepository;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;

@Repository
@AllArgsConstructor
public class ItemRepositoryImpl implements ItemRepository {
	
	private final JPAQueryFactory jPAQueryFactory;

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
		return jPAQueryFactory.selectFrom(item)
				.where(item.sort2.contains(searchRequest.getKeyword())
						.or(item.sort3.contains(searchRequest.getKeyword()))
						.or(item.brand.contains(searchRequest.getKeyword()))
						.or(item.name.contains(searchRequest.getKeyword())))
				.orderBy(item.sales.desc())
				.offset((pageRequest.getPage()-1)*pageRequest.getSize()+1).limit(pageRequest.getSize()*pageRequest.getPage())
				.fetch();
	}
	
	@Override
	public Item selectItemWhereCode(SearchRequest searchRequest) {
		
		return jPAQueryFactory.selectFrom(item)
				.where(item.code.eq(Integer.parseInt(searchRequest.getKeyword())))
				.fetchOne();
	}
	
	@Override
	public Item selectItemWhereCode(SearchRequest searchRequest) {
		
		return jPAQueryFactory.selectFrom(item)
				.where(item.code.eq(Integer.parseInt(searchRequest.getKeyword())))
				.fetchOne();
	}
	
	@Override
	public List<SortDTO> selectSortWhereSearchType(SearchRequest searchRequest) {
		return jPAQueryFactory.select(Projections.bean(SortDTO.class,
															item.sort2, item.sort3, item.sort3.count()))
				.where(item.sort2.contains(searchRequest.getKeyword())
						.or(item.sort3.contains(searchRequest.getKeyword()))
						.or(item.brand.contains(searchRequest.getKeyword()))
						.or(item.name.contains(searchRequest.getKeyword())))
				.groupBy(item.sort2)
				.fetch();
	}
	
	@Override
	public List<String> selectSortList() {
		return jPAQueryFactory.select(item.sort2)
				.from(item)
				.groupBy(item.sort2)
				.fetch();
	}
	/* 🎃🎃🎃🎃🎃🎃 검수 전 🎃🎃🎃🎃🎃🎃 */
	
	
}
