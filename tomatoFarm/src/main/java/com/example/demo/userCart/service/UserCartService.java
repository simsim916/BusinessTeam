package com.example.demo.service;

import java.util.List;

import com.example.demo.domain.UserCartDTO;
import com.example.demo.entity.UserCart;

public interface UserCartService {

	UserCart merge(UserCart entity);
	List<UserCart> mergeAll(List<UserCart> list);
	
	List<UserCartDTO> selectItemListWhereUserID(UserCart entity);
	
	void delete(List<UserCart> entity);
}
