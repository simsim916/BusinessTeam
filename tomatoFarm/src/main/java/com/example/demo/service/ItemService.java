package com.example.demo.service;

import java.util.List;

import com.example.demo.domain.ItemDTO;
import com.example.demo.entity.Item;
import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;

public interface ItemService {

	// default method
	default Item dtotoEntity(ItemDTO dto) {
		Item entity = Item.builder().code(dto.getCode()).sort1(dto.getSort1()).sort2(dto.getSort2())
				.sort3(dto.getSort3()).brand(dto.getBrand()).name(dto.getName()).weight(dto.getWeight())
				.storage(dto.getStorage()).packing(dto.getPacking()).delivery(dto.getDelivery()).price(dto.getPrice())
				.vat(dto.getVat()).origin(dto.getOrigin()).sales(dto.getSales()).stock(dto.getStock())
				.event(dto.getEvent()).admin(dto.getAdmin()).build();
		return entity;
	}

	default ItemDTO entityToDTO(Item entity) {
		ItemDTO dto = ItemDTO.builder().code(entity.getCode()).sort1(entity.getSort1()).sort2(entity.getSort2())
				.sort3(entity.getSort3()).brand(entity.getBrand()).name(entity.getName()).weight(entity.getWeight())
				.storage(entity.getStorage()).packing(entity.getPacking()).delivery(entity.getDelivery())
				.price(entity.getPrice()).vat(entity.getVat()).origin(entity.getOrigin()).sales(entity.getSales())
				.stock(entity.getStock()).event(entity.getEvent()).admin(entity.getAdmin()).build();
		return dto;
	}

	List<Item> selectItemWhereEvent_D(PageRequest pageRequest);
	List<Item> selectItemWherebrand(PageRequest pageRequest, SearchRequest searchRequest);
	List<Item> selectItemWhereSearchType(PageRequest pageRequest, SearchRequest searchRequest);
	/* 🎃🎃🎃🎃🎃🎃 검수 전 🎃🎃🎃🎃🎃🎃 */
}
