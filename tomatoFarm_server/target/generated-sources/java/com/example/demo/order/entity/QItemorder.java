package com.example.demo.order.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QItemorder is a Querydsl query type for Itemorder
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QItemorder extends EntityPathBase<Itemorder> {

    private static final long serialVersionUID = 798756426L;

    public static final QItemorder itemorder = new QItemorder("itemorder");

    public final StringPath address1 = createString("address1");

    public final StringPath address2 = createString("address2");

    public final NumberPath<Integer> addressCode = createNumber("addressCode", Integer.class);

    public final NumberPath<Integer> checked = createNumber("checked", Integer.class);

    public final NumberPath<Integer> code = createNumber("code", Integer.class);

    public final NumberPath<Integer> delivery = createNumber("delivery", Integer.class);

    public final DateTimePath<java.time.LocalDateTime> deliveryDate = createDateTime("deliveryDate", java.time.LocalDateTime.class);

    public final StringPath id = createString("id");

    public final NumberPath<Integer> item_code = createNumber("item_code", Integer.class);

    public final StringPath item_name = createString("item_name");

    public final StringPath order_message = createString("order_message");

    public final DateTimePath<java.time.LocalDateTime> orderDate = createDateTime("orderDate", java.time.LocalDateTime.class);

    public final NumberPath<Integer> point = createNumber("point", Integer.class);

    public final NumberPath<Integer> price = createNumber("price", Integer.class);

    public final NumberPath<Integer> size = createNumber("size", Integer.class);

    public QItemorder(String variable) {
        super(Itemorder.class, forVariable(variable));
    }

    public QItemorder(Path<? extends Itemorder> path) {
        super(path.getType(), path.getMetadata());
    }

    public QItemorder(PathMetadata metadata) {
        super(Itemorder.class, metadata);
    }

}

