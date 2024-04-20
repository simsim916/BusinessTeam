package com.example.demo.user.user_address.entity;

import javax.persistence.*;

import lombok.Data;

@Entity
@Data
@Table(name = "user_address")
public class UserAddress {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer seq;
    @Column(name = "user_id")
    private String userId;
    private String info;
    private Integer main_address=0;
    private Integer address_code;
    private String address_name;
    private String address1;
    private String address2;
    private String phonenumber;

}
