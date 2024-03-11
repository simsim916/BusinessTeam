package com.example.demo.repostoryImpl;

import org.springframework.stereotype.Repository;

import com.example.demo.entity.Member;
import com.example.demo.repository.MemberRepository;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.AllArgsConstructor;

import static com.example.demo.entity.QMember.member;

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
