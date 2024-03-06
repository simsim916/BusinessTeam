package com.example.demo.repostoryImpl;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.example.demo.entity.Item;
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
	public List<Item> selectMealkitWhereEvent_D() {
		return jPAQueryFactory.selectFrom(item)
				.where(item.event.isNotNull().and(item.event.ne("")))
				.orderBy(item.sales.desc())
				.offset(1).limit(11)
				.fetch();
	}
}
