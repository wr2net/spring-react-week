package com.fawacom.dsmovie.repositories;

import com.fawacom.dsmovie.entities.Score;
import com.fawacom.dsmovie.entities.ScorePK;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {

}
