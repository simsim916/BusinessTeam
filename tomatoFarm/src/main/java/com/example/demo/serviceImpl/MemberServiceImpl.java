package com.example.demo.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.domain.MemberDTO;
import com.example.demo.entity.Member;
import com.example.demo.repository.MemberRepository;
import com.example.demo.service.MemberService;

import lombok.AllArgsConstructor;



@AllArgsConstructor
@Service
public class MemberServiceImpl implements MemberService{

	private final MemberRepository memberRepository;
	

	public Member selectOne(String id) {
		return memberRepository.findMemberByid(id);
	}
	
}
