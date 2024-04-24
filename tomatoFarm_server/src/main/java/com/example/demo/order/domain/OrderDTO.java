package com.example.demo.order.domain;

import java.util.List;

import com.example.demo.item.item.domain.ItemDTO;

import com.example.demo.user.user_cart.domain.UserCartDTO;
import com.example.demo.user.user_cart.entity.UserCart;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderDTO {
	
	private List<UserCartDTO> itemList;
	private String address1;
	private String address2;
	private String addressCode;
	private String addressName;
	private Integer deliveryprice;
	private String deliverymessage;
	private Integer discount;
	private String info;
	private Integer orderprice;
	private String phonenumber;
	private Integer usepoint;

	private String itemName;
	private Integer orderSize;

	public OrderDTO(String address1, Integer orderSize) {
		this.address1 = address1;
		this.orderSize = orderSize;
	}
}
