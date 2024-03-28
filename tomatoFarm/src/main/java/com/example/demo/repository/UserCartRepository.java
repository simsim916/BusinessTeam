package com.example.demo.repository;


import java.util.List;

import javax.persistence.EntityManager;

import org.springframework.stereotype.Repository;

import com.example.demo.entity.UserCart;
import com.example.demo.entity.UserCartID;
import com.querydsl.core.QueryFactory;

import lombok.AllArgsConstructor;


public interface UserCartRepository{

	UserCart update(UserCart usercart);
	List<UserCart> selectAll(UserCartID entity);

	
}
