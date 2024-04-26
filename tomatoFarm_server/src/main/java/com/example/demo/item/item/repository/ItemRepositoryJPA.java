package com.example.demo.item.item.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.item.item.entity.Item;

public interface ItemRepositoryJPA extends JpaRepository<Item, Integer>{

}
