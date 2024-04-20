package com.example.demo.user.user_address.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.example.demo.user.user_address.entity.UserAddress;
import com.example.demo.user.user_address.repository.UserAddressRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserAddressServiceImpl implements UserAddressService {

	UserAddressRepository userAddressRepository;

	@Override
	public List<UserAddress> selectAddressWhereId(String id) {
		return userAddressRepository.selectAddressWhereId(id);
	}

	@Transactional
	@Override
	public UserAddress insertUserAddress(UserAddress entity) {
		return userAddressRepository.insertUserAddress(entity);
	}
	
	@Transactional
	@Override
	public void deleteAddress(UserAddress entity) {
		userAddressRepository.deleteAddress(entity);
	}
}
