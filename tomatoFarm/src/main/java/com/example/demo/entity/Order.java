package com.example.demo.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lombok.Builder;
import lombok.Data;

@Entity
@Table(name = "order") // order 테이블과 매핑
@Data
@Builder
public class Order {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer code;
    @Column(name = "user_id", nullable = false, length = 15)
    private String userId;
    private String name;
    @Column(name = "address_code")
    private Integer addressCode;
    @Column(length = 50)
    private String address1;
    @Column(length = 50)
    private String address2;
    private Integer price;
    @Column(name = "deliveryprice")
    private Integer deliveryPrice;
    private Integer point;
    
    @Column(name = "orderdate")
    @Temporal(TemporalType.DATE)
    private Date orderDate;
    
    @Temporal(TemporalType.DATE)
    private Date deliveryDate;

    private boolean check;

}
