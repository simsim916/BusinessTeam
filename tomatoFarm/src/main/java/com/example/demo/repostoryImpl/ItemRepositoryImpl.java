package com.example.demo.repostoryImpl;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.example.demo.entity.Item;
import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;
import com.example.demo.repository.ItemRepository;
import com.querydsl.jpa.impl.JPAQueryFactory;

import static com.example.demo.entity.QItem.item;

import lombok.AllArgsConstructor;

//asd
@Repository
@AllArgsConstructor
public class ItemRepositoryImpl implements ItemRepository{
	
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
}
