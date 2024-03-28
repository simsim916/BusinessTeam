package com.example.demo.serviceImpl;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.example.demo.entity.UserCart;
import com.example.demo.entity.UserCartID;
import com.example.demo.repository.UserCartRepository;
import com.example.demo.service.UserCartService;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class UserCartServiceImpl implements UserCartService {

	UserCartRepository usercartRepository;

	
	@Transactional
	@Override
	public UserCart update(UserCart usercart) {
		return usercartRepository.update(usercart);
	}
	
	@Override
	public List<UserCart> selectAll(UserCartID entity) {
		return usercartRepository.selectAll(entity);
	}
	
}
