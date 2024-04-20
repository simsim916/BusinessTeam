package com.example.demo.user.user_address.repository;

import java.util.List;

import com.example.demo.user.user_address.entity.UserAddress;

public interface UserAddressRepository {

	List<UserAddress> selectAddressWhereId(String id);
	
	UserAddress insertUserAddress(UserAddress entity);
	
	void deleteAddress(UserAddress entity);
}
