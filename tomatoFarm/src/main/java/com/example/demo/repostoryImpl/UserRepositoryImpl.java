package com.example.demo.repostoryImpl;

import static com.example.demo.entity.QMember.member;

import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Member;
import com.example.demo.entity.QItem;
import com.example.demo.repository.MemberRepository;
import com.querydsl.core.types.Order;
import com.querydsl.core.types.OrderSpecifier;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.AllArgsConstructor;

@Repository
@AllArgsConstructor
public class MemberRepositoryImpl implements MemberRepository{
	
	private final JPAQueryFactory jPAQueryFactory;
	

	
	@Override
	public Member findMemberByid(String id) {
		return jPAQueryFactory.selectFrom(member)
				.where(member.id.eq(id))
				.fetchOne();
	}
	
	
	

}
