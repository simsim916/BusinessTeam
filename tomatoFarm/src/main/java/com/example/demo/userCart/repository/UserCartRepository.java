package com.example.demo.repository;


import java.util.List;

import com.example.demo.domain.UserCartDTO;
import com.example.demo.entity.UserCart;


public interface UserCartRepository{

	UserCart merge(UserCart entity);
	List<UserCart> mergeAll(List<UserCart> list);
	List<UserCartDTO> selectItemListWhereUserID(UserCart userCart);
	List<UserCart> selectCartWhereUserIDItemList(String user_id, List<Integer> item_codeList);
	void delete(List<UserCart> list);
}
