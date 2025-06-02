package com.pokemon.demo.entities;


import com.pokemon.demo.ROLES.MonsterType;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Monster {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String image;

    @Enumerated(EnumType.STRING)
    private MonsterType type;

    private int hp;

    private String figureCaption;

    private String attackName;

    private int attackStrength;

    @Column(length = 1000)
    private String attackDescription;
}
