package com.example.demo.repository;

import com.example.demo.models.Tag;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TagRepository extends JpaRepository<Tag, Long> {
    List<Tag> findTagsByTestsId(Long testId);

}
