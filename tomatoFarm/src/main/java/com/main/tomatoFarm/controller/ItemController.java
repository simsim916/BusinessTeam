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
	public void list(Model model , @RequestParam("keyword") String keyword) {
		List<ItemDTO> list = itemService.selectItemListWhereKeyword(keyword);
		model.addAttribute("list", list);
		model.addAttribute("size", list.size());
		model.addAttribute("brandList", itemService.selectBrandList());
		model.addAttribute("keyword", keyword);
		
		model.addAttribute("sortList", sortSerivce.selectSortList());
		model.addAttribute("sortbList", sortSerivce.selectSortbList());
	}
	
	@GetMapping("/sortlist")
	public String ListBy( Model model ) {
		String uri = "item/list";
//		String uri = "redirect:item/list";

		
		model.addAttribute( "list", itemService.selectItemListOrderBy("sales","desc") );
		model.addAttribute( "list", itemService.selectItemListOrderBy("price","desc") );
		model.addAttribute( "list", itemService.selectItemListOrderBy("price","asc") );
		
		
		return uri;
	}
	
	@GetMapping("searchlist")
	public String search(@RequestParam("keyword")String keyword,Model model) {
		
		String uri = "item/list";
		model.addAttribute("list", itemService.selectItemListWhereKeyword(keyword));
		
		return uri;
	}
}
