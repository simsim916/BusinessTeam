package com.example.demo.repostoryImpl;

import static com.example.demo.entity.QItem.item;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.support.SimpleJpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Item;
import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;
import com.example.demo.repository.ItemRepository;
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
				.where(item.sort3.in(searchRequest.getType()))
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
	
	/* 🎃🎃🎃🎃🎃🎃 검수 전 🎃🎃🎃🎃🎃🎃 */
	
	
}
