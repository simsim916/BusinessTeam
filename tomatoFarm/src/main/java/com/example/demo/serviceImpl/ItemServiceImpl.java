package com.example.demo.serviceImpl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.entity.Item;
import com.example.demo.entity.Sorttable;
import com.example.demo.repository.ItemRepository;
import com.example.demo.repository.SortRepository;
import com.example.demo.service.ItemService;
import com.example.demo.service.SortService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class ItemServiceImpl implements ItemService{

	private final ItemRepository mealkitRepository;
	
	@Override
	public List<Item> selectMealkitWhereEvent_D() {
		return mealkitRepository.selectMealkitWhereEvent_D();
	}
	
	/* 🎃🎃🎃🎃🎃🎃 검수 전 🎃🎃🎃🎃🎃🎃 */
	
}
