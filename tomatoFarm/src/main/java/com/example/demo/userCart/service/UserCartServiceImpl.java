package com.example.demo.serviceImpl;

import java.time.LocalDate;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.example.demo.domain.UserCartDTO;
import com.example.demo.entity.UserCart;
import com.example.demo.repository.UserCartRepository;
import com.example.demo.service.UserCartService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class UserCartServiceImpl implements UserCartService {

	UserCartRepository userCartRepository;

	@Transactional
	@Override
	public UserCart merge(UserCart entity) {
		return userCartRepository.merge(entity);
	}
	
	@Transactional
	@Override
	public List<UserCart> mergeAll(List<UserCart> list) {
		// LocalDate 클래스를 이용해서 entity에 등록일자 담기
		LocalDate today = LocalDate.now();
		for (UserCart e : list) {
			e.setRegdate(today);
		}
		userCartRepository.mergeAll(list);
		return null;
	}

	
	
	@Override
	public List<UserCartDTO> selectItemListWhereUserID(UserCart entity) {
		return userCartRepository.selectItemListWhereUserID(entity);
	}
	
	
	@Override
	@Transactional
	public void delete(List<UserCart> list) {
		userCartRepository.delete(list);
	}
}
