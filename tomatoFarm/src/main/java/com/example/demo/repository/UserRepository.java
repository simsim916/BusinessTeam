package com.example.demo.repository;

import com.example.demo.entity.Member;

public interface MemberRepository{
	
	public Member findMemberByid(String id);
}
