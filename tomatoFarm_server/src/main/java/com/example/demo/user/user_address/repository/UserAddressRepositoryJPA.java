package com.example.demo.user.user_address.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.user.user_address.entity.UserAddress;

public interface UserAddressRepositoryJPA extends JpaRepository<UserAddress, Integer>{

	
}
