package com.example.demo.repostoryImpl;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.example.demo.entity.Sorttable;
import com.example.demo.repository.SortRepository;
import com.querydsl.jpa.impl.JPAQueryFactory;

import static com.example.demo.entity.QSorttable.sorttable;

import lombok.AllArgsConstructor;

@Repository
@AllArgsConstructor
public class SortRepositoryImpl implements SortRepository{
	
	private final JPAQueryFactory jPAQueryFactory;

	@Override
	public List<Sorttable> selectAllSortb_D() {
		return jPAQueryFactory.selectFrom(sorttable)
				.groupBy(sorttable.sortb)
				.orderBy(sorttable.sortb.desc())
				.fetch();
	}
}
