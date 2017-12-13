package com.iba.project.entity;


import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "BOOKS")
public class Book
{
    @Id
    @Column(name = "ID")
    @GeneratedValue
    private Integer id;

    @Column(name = "AUTHOR_FIRSTNAME")
    private String firstName;

    @Column(name = "AUTHOR_LASTNAME")
    private String lastName;

    @Column(name = "NAME")
    private String name;

    @Column(name = "PRICE")
    private BigDecimal price;

    public BigDecimal getPrice() {
        return price;
    }

    public Integer getId() {
        return id;
    }

    public String getLastName() {
        return lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getName() {
        return name;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }
}
