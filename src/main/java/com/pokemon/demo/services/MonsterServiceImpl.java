package com.pokemon.demo.services;

import com.pokemon.demo.DTOS.MonsterCreationDto;
import com.pokemon.demo.ROLES.MonsterType;
import com.pokemon.demo.entities.Monster;
import com.pokemon.demo.repository.MonsterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class MonsterServiceImpl extends CrudServiceImpl<Monster, Long> implements IMonsterService {

    @Autowired
    private final ImageService imageService;

    public MonsterServiceImpl(MonsterRepository repository, ImageService imageService) {
        super(repository);
        this.imageService = imageService;
    }

    public Monster createFromDto(MonsterCreationDto dto) throws IOException {
        Monster monster = new Monster();
        monster.setName(dto.getName());
        monster.setHp(dto.getHp());
        monster.setFigureCaption(dto.getFigureCaption());
        monster.setAttackName(dto.getAttackName());
        monster.setAttackStrength(dto.getAttackStrength());
        monster.setAttackDescription(dto.getAttackDescription());
        monster.setType(MonsterType.valueOf(dto.getType()));

        // Image :
        String imageUrl = imageService.saveImage(dto.getImage());
        monster.setImage(imageUrl);

        return repository.save(monster);
    }
}