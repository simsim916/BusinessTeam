package com.example.demo.order.repository;

import java.util.List;

import com.example.demo.order.entity.Itemorder;

public interface ItemorderRepository {

	Itemorder merge(Itemorder entity);
	List<Itemorder> selectWhere(String userId);
}
