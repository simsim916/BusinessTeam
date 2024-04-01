package com.example.demo.repository;


import java.util.List;

import javax.persistence.EntityManager;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Item;
import com.example.demo.entity.UserCart;
import com.example.demo.entity.UserCartID;
import com.querydsl.core.QueryFactory;

import lombok.AllArgsConstructor;


public interface UserCartRepository extends JpaRepository<UserCart, UserCartID>{

	List<Item> nonLoginItem(List<Integer> codeList, List<UserCart> list);

	List<UserCart> save(List<UserCart> list);
}
