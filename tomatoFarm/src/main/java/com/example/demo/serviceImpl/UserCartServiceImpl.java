package com.example.demo.serviceImpl;

import java.time.LocalDate;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.example.demo.entity.Item;
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
		// LocalDate 클래스를 이용해서 entity에 등록일자 담기
		LocalDate today = LocalDate.now();
		usercart.setRegdate(today);
		return usercartRepository.save(usercart);
	}
	

	
	
    @Override
    @Transactional
    public List<UserCart> insertUserCarts(List<UserCart> cartList) {
        return usercartRepository.saveAll(cartList);
    }
}
