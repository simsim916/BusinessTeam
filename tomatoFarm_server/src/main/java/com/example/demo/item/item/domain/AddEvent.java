package com.example.demo.item.item.domain;

import java.util.List;

import com.example.demo.item.item.entity.Item;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class AddEvent {
	private List<Item> codeList;
	private Integer eventCode;
}
