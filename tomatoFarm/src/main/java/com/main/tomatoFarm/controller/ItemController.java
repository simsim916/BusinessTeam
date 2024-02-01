package com.main.tomatoFarm.controller;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.main.tomatoFarm.domain.ItemDTO;
import com.main.tomatoFarm.service.ItemService;
import com.main.tomatoFarm.service.SortService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Controller
@RequestMapping("/item")
public class ItemController {

	ItemService itemService;
	SortService sortSerivce;

	@GetMapping("/list")
	public void list(Model model, @RequestParam("keyword") String keyword) {
		List<ItemDTO> list = itemService.selectItemListWhereKeyword(keyword);
		model.addAttribute("list", list);
		model.addAttribute("keyword", keyword);
		if(list == null) {
//			model.addAttribute("noResult", "검색결과가 없어서 인기상품 보여드릴게");
//			model.addAttribute("list", itemService.selectItemListBySales());
			model.addAttribute("size", 0);
		} else {
			model.addAttribute("size", list.size());
		}
		
		model.addAttribute("brandList", itemService.selectBrandList());
		model.addAttribute("sortList", sortSerivce.selectSortList());
		model.addAttribute("sortbList", sortSerivce.selectSortbList());
	}

}
