package com.example.demo.order.domain;

import java.util.List;

import com.example.demo.item.item.domain.ItemDTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderDTO {
	
	private List<ItemDTO> itemList;
	private String address1;
	private String address2;
	private Integer address_code;
	private Integer phonenumber;
	private String deliverymessage;
	private Integer price;
	private Integer discount;
	private Integer delivery;
	private Integer point;
	
	private String id;
	


}
