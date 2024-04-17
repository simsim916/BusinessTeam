package com.example.demo.order.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "itemorder") // order 테이블과 매핑
@Data
@Builder
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Itemorder {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer code;
    @Column(name = "user_id")
    private String id;
    @Column(name = "address_code")
    private Integer addressCode;
    @Column(length = 50)
    private String address1;
    
    @Column(length = 50)
    private String address2;
    private Integer price;
    @Column(name = "deliveryprice")
    private Integer delivery;
    private Integer point;
    
    @Column(name = "orderdate")
    private LocalDateTime orderDate;
    
    @Column(name="deliverydate")
    private LocalDateTime deliveryDate;
    
    private String order_message;

    @Builder.Default
    private Integer checked=0;
    
    private Integer size;
    private String item_name;
    private Integer item_code;
    

}
