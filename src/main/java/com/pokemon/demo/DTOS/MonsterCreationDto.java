package com.pokemon.demo.DTOS;


import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class MonsterCreationDto {
    private String name;
    private int hp;
    private String figureCaption;
    private String attackName;
    private int attackStrength;
    private String attackDescription;
    private String type;
    private MultipartFile image;
}

