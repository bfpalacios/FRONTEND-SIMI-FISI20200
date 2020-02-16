﻿use dbsimi;

-- ------------------------------------------------------------
-- INSERT INTO TMSEDE
-- ------------------------------------------------------------
INSERT INTO `tmsede` (NOM_SEDE, DESC_SEDE, DIR_SEDE)  VALUES ('Sede de Ciudad Universitaria','Ciudad Universitaria','Calle Germán Amézaga N° 375 - Facultad de Letras y Ciencias Humanas');
INSERT INTO `tmsede` (NOM_SEDE, DESC_SEDE, DIR_SEDE)  VALUES ('Sede de San Juan de Lurigancho','San Juan de Lurigancho','Av. Fernando Wiesse KM 10.5 (complejo IPD - Bayovar) - SJL');

-- ------------------------------------------------------------
-- IONSERT INTO TMAULA
-- ------------------------------------------------------------
INSERT INTO `tmaula` (NOM_AULA, REF_AULA, FK_ID_SEDE) VALUES ('101', 'Primer piso', 1);
INSERT INTO `tmaula` (NOM_AULA, REF_AULA, FK_ID_SEDE) VALUES ('102', 'Primer piso', 1);
INSERT INTO `tmaula` (NOM_AULA, REF_AULA, FK_ID_SEDE) VALUES ('103', 'Primer piso', 1);
INSERT INTO `tmaula` (NOM_AULA, REF_AULA, FK_ID_SEDE) VALUES ('104', 'Primer piso', 1);
INSERT INTO `tmaula` (NOM_AULA, REF_AULA, FK_ID_SEDE) VALUES ('105', 'Primer piso', 1);

-- ------------------------------------------------------------
-- INSERT INTO NIVEL
-- ------------------------------------------------------------
INSERT INTO `txnivel`(NOM_NIVEL) VALUES ('Basico');
INSERT INTO `txnivel`(NOM_NIVEL) VALUES ('Intermedio');
INSERT INTO `txnivel`(NOM_NIVEL) VALUES ('Avanzado');
INSERT INTO `txnivel`(NOM_NIVEL) VALUES ('Posgrado');

-- INSERT INTO IDIOMA
INSERT INTO `tmidioma`(NOM_IDIOMA, DESC_IDIOMA) VALUES ('Ingles', 'El inglés es considerado uno de los idiomas más importantes para la comunicación debido a su presencia universal');
INSERT INTO `tmidioma`(NOM_IDIOMA, DESC_IDIOMA) VALUES ('Portugues', 'El portugués es un idioma de gran presencia en Sudamérica y parte de Europa');
INSERT INTO `tmidioma`(NOM_IDIOMA, DESC_IDIOMA) VALUES ('Frances', 'El francés es una de las lenguas más prestigiosas por sus avances científicos');
INSERT INTO `tmidioma`(NOM_IDIOMA, DESC_IDIOMA) VALUES ('Italiano', 'El italiano es una de las lenguas que recoge el legado de la cultura romana');
INSERT INTO `tmidioma`(NOM_IDIOMA, DESC_IDIOMA) VALUES ('Quechua', 'El quechua es la lengua originaria más representativa de nuestro país. Su importancia radica en mantener la identidad ancestral');
INSERT INTO `tmidioma`(NOM_IDIOMA, DESC_IDIOMA) VALUES ('Aleman', 'El idioma alemán en uno de los más imponentes en Europa por su presencia en el sector económico, científico y comercial');
INSERT INTO `tmidioma`(NOM_IDIOMA, DESC_IDIOMA) VALUES ('Coreano', 'El idioma coreano en los últimos años se ha vuelto importante debido a su presencia en la economía mundial');
INSERT INTO `tmidioma`(NOM_IDIOMA, DESC_IDIOMA) VALUES ('Japones', 'La potencia económica de Japón hace que su idioma sea importante en el campo de la tecnología y del comercio internacional');

-- ------------------------------------------------------------
-- Insert curso
-- --------------------------------------------------------------
-- Inglés
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (1, 1, 1, 'English File: Elementary 3rd Edition (6), English File: Pre intermediate (6)');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (1, 1, 2, 'English File: Elementary 3rd Edition (6), English File: Pre intermediate (6)');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (1, 1, 3, 'English File: Elementary 3rd Edition (6), English File: Pre intermediate (6)');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (1, 1, 4, 'English File: Elementary 3rd Edition (6), English File: Pre intermediate (6)');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (1, 1, 5, 'English File: Elementary 3rd Edition (6), English File: Pre intermediate (6)');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (1, 1, 6, 'English File: Elementary 3rd Edition (6), English File: Pre intermediate (6)');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (1, 1, 7, 'English File: Elementary 3rd Edition (6), English File: Pre intermediate (6)');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (1, 1, 8, 'English File: Elementary 3rd Edition (6), English File: Pre intermediate (6)');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (1, 1, 9, 'English File: Elementary 3rd Edition (6), English File: Pre intermediate (6)');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (1, 1, 10, 'English File: Elementary 3rd Edition (6), English File: Pre intermediate (6)');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (1, 1, 11, 'English File: Elementary 3rd Edition (6), English File: Pre intermediate (6)');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (1, 1, 12, 'English File: Elementary 3rd Edition (6), English File: Pre intermediate (6)');

INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (1, 2, 1, 'English File: Intermediate (5), English File: Upper-intermediate (5)');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (1, 2, 2, 'English File: Intermediate (5), English File: Upper-intermediate (5)');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (1, 2, 3, 'English File: Intermediate (5), English File: Upper-intermediate (5)');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (1, 2, 4, 'English File: Intermediate (5), English File: Upper-intermediate (5)');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (1, 2, 5, 'English File: Intermediate (5), English File: Upper-intermediate (5)');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (1, 2, 6, 'English File: Intermediate (5), English File: Upper-intermediate (5)');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (1, 2, 7, 'English File: Intermediate (5), English File: Upper-intermediate (5)');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (1, 2, 8, 'English File: Intermediate (5), English File: Upper-intermediate (5)');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (1, 2, 9, 'English File: Intermediate (5), English File: Upper-intermediate (5)');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (1, 2, 10, 'English File: Intermediate (5), English File: Upper-intermediate (5)');

INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (1, 3, 1, 'English File: Advanced');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (1, 3, 2, 'English File: Advanced');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (1, 3, 3, 'English File: Advanced');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (1, 3, 4, 'English File: Advanced');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (1, 3, 5, 'English File: Advanced');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (1, 3, 6, 'English File: Advanced');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (1, 3, 7, 'English File: Advanced');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (1, 3, 8, 'English File: Advanced');

INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (1, 4, 1, 'Smart Choice 1 y 2');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (1, 4, 2, 'Smart Choice 1 y 2');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (1, 4, 3, 'Smart Choice 1 y 2');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (1, 4, 4, 'Smart Choice 1 y 2');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (1, 4, 5, 'Smart Choice 1 y 2');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (1, 4, 6, 'Smart Choice 1 y 2');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (1, 4, 7, 'Smart Choice 1 y 2');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (1, 4, 8, 'Smart Choice 1 y 2');
-- Portugués
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (2, 1, 1, 'Ben vindo! (Libro + cuaderno de ejercicios)');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (2, 1, 2, 'Ben vindo! (Libro + cuaderno de ejercicios)');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (2, 1, 3, 'Ben vindo! (Libro + cuaderno de ejercicios)');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (2, 1, 4, 'Ben vindo! (Libro + cuaderno de ejercicios)');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (2, 1, 5, 'Ben vindo! (Libro + cuaderno de ejercicios)');

INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (2, 2, 1, 'Ben vindo! (Libro + cuaderno de ejercicios)');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (2, 2, 2, 'Ben vindo! (Libro + cuaderno de ejercicios)');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (2, 2, 3, 'Ben vindo! (Libro + cuaderno de ejercicios)');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (2, 2, 4, 'Ben vindo! (Libro + cuaderno de ejercicios)');

INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (2, 3, 1, 'Ben vindo! (Libro + cuaderno de ejercicios)');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (2, 3, 2, 'Ben vindo! (Libro + cuaderno de ejercicios)');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (2, 3, 3, 'Ben vindo! (Libro + cuaderno de ejercicios)');

INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (2, 4, 1, 'Fale Português 1 y 2');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (2, 4, 2, 'Fale Português 1 y 2');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (2, 4, 3, 'Fale Português 1 y 2');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (2, 4, 4, 'Fale Português 1 y 2');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (2, 4, 5, 'Fale Português 1 y 2');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (2, 4, 6, 'Fale Português 1 y 2');
-- Francés
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (3, 1, 1, 'Alter Ego Plus 1');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (3, 1, 2, 'Alter Ego Plus 1');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (3, 1, 3, 'Alter Ego Plus 1');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (3, 1, 4, 'Alter Ego Plus 1');

INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (3, 2, 1, 'Alter Ego Plus 2 , Alter Ego Plus 3');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (3, 2, 2, 'Alter Ego Plus 2 , Alter Ego Plus 3');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (3, 2, 3, 'Alter Ego Plus 2 , Alter Ego Plus 3');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (3, 2, 4, 'Alter Ego Plus 2 , Alter Ego Plus 3');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (3, 2, 5, 'Alter Ego Plus 2 , Alter Ego Plus 3');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (3, 2, 6, 'Alter Ego Plus 2 , Alter Ego Plus 3');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (3, 2, 7, 'Alter Ego Plus 2 , Alter Ego Plus 3');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (3, 2, 8, 'Alter Ego Plus 2 , Alter Ego Plus 3');

INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (3, 3, 1, 'Alter Ego Plus 4');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (3, 3, 2, 'Alter Ego Plus 4');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (3, 3, 3, 'Alter Ego Plus 4');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (3, 3, 4, 'Alter Ego Plus 4');
-- Italiano
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (4, 1, 1, 'Nuovo Progetto Italiano');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (4, 1, 2, 'Nuovo Progetto Italiano');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (4, 1, 3, 'Nuovo Progetto Italiano');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (4, 1, 4, 'Nuovo Progetto Italiano');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (4, 1, 5, 'Nuovo Progetto Italiano');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (4, 1, 6, 'Nuovo Progetto Italiano');

INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (4, 2, 1, 'Nuovo Progetto Italiano');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (4, 2, 2, 'Nuovo Progetto Italiano');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (4, 2, 3, 'Nuovo Progetto Italiano');

INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (4, 3, 1, 'Nuovo Progetto Italiano');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (4, 3, 2, 'Nuovo Progetto Italiano');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (4, 3, 3, 'Nuovo Progetto Italiano');
-- Quechua
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (5, 1, 1, 'Texto único: Manual de enseñanza "Clodoaldo Soto Ruiz"');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (5, 1, 2, 'Texto único: Manual de enseñanza "Clodoaldo Soto Ruiz"');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (5, 1, 3, 'Texto único: Manual de enseñanza "Clodoaldo Soto Ruiz"');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (5, 1, 4, 'Texto único: Manual de enseñanza "Clodoaldo Soto Ruiz"');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (5, 1, 5, 'Texto único: Manual de enseñanza "Clodoaldo Soto Ruiz"');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (5, 1, 6, 'Texto único: Manual de enseñanza "Clodoaldo Soto Ruiz"');

INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (5, 2, 1, 'Texto único: Manual de enseñanza "Clodoaldo Soto Ruiz"');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (5, 2, 2, 'Texto único: Manual de enseñanza "Clodoaldo Soto Ruiz"');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (5, 2, 3, 'Texto único: Manual de enseñanza "Clodoaldo Soto Ruiz"');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (5, 2, 4, 'Texto único: Manual de enseñanza "Clodoaldo Soto Ruiz"');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (5, 2, 5, 'Texto único: Manual de enseñanza "Clodoaldo Soto Ruiz"');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (5, 2, 6, 'Texto único: Manual de enseñanza "Clodoaldo Soto Ruiz"');

INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (5, 3, 1, 'Texto único: Manual de enseñanza "Clodoaldo Soto Ruiz"');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (5, 3, 2, 'Texto único: Manual de enseñanza "Clodoaldo Soto Ruiz"');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (5, 3, 3, 'Texto único: Manual de enseñanza "Clodoaldo Soto Ruiz"');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (5, 3, 4, 'Texto único: Manual de enseñanza "Clodoaldo Soto Ruiz"');
-- Alemán
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (6, 1, 1, 'Tangram A1');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (6, 1, 2, 'Tangram A1');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (6, 1, 3, 'Tangram A1');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (6, 1, 4, 'Tangram A1');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (6, 1, 5, 'Tangram A1');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (6, 1, 6, 'Tangram A1');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (6, 1, 7, 'Tangram A1');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (6, 1, 8, 'Tangram A1');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (6, 1, 9, 'Tangram A1');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (6, 1, 10, 'Tangram A1');

INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (6, 2, 1, 'Tangram B1');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (6, 2, 2, 'Tangram B1');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (6, 2, 3, 'Tangram B1');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (6, 2, 4, 'Tangram B1');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (6, 2, 5, 'Tangram B1');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (6, 2, 6, 'Tangram B1');

INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (6, 3, 1, 'Tangram B2');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (6, 3, 2, 'Tangram B2');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (6, 3, 3, 'Tangram B2');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (6, 3, 4, 'Tangram B2');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (6, 3, 5, 'Tangram B2');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (6, 3, 6, 'Tangram B2');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (6, 3, 7, 'Tangram B2');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (6, 3, 8, 'Tangram B2');
-- Coreano
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (7, 1, 1, 'Easy Korean');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (7, 1, 2, 'Easy Korean');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (7, 1, 3, 'Easy Korean');

INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (7, 2, 1, 'Easy Korean');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (7, 2, 2, 'Easy Korean');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (7, 2, 3, 'Easy Korean');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (7, 2, 4, 'Easy Korean');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (7, 2, 5, 'Easy Korean');

INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (7, 3, 1, 'Easy Korean');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (7, 3, 2, 'Easy Korean');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (7, 3, 3, 'Easy Korean');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (7, 3, 4, 'Easy Korean');
-- Japonés
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (8, 1, 1, 'Material de uso interno');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (8, 1, 2, 'Material de uso interno');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (8, 1, 3, 'Material de uso interno');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (8, 1, 4, 'Material de uso interno');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (8, 1, 5, 'Material de uso interno');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (8, 1, 6, 'Material de uso interno');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (8, 1, 7, 'Material de uso interno');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (8, 1, 8, 'Material de uso interno');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (8, 1, 9, 'Material de uso interno');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (8, 1, 10, 'Material de uso interno');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (8, 1, 11, 'Material de uso interno');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (8, 1, 12, 'Material de uso interno');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (8, 1, 13, 'Material de uso interno');

INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (8, 2, 1, 'Material de uso interno');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (8, 2, 2, 'Material de uso interno');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (8, 2, 3, 'Material de uso interno');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (8, 2, 4, 'Material de uso interno');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (8, 2, 5, 'Material de uso interno');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (8, 2, 6, 'Material de uso interno');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (8, 2, 7, 'Material de uso interno');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (8, 2, 8, 'Material de uso interno');
INSERT INTO `tmcurso`(FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) VALUES (8, 2, 9, 'Material de uso interno');

-- ------------------------------------------------------------
-- Insert dias clase
-- --------------------------------------------------------------
INSERT INTO `txdias_clase`(NOM_DIA) VALUES ('Lunes');
INSERT INTO `txdias_clase`(NOM_DIA) VALUES ('Martes');
INSERT INTO `txdias_clase`(NOM_DIA) VALUES ('Miercoles');
INSERT INTO `txdias_clase`(NOM_DIA) VALUES ('Jueves');
INSERT INTO `txdias_clase`(NOM_DIA) VALUES ('Viernes');
INSERT INTO `txdias_clase`(NOM_DIA) VALUES ('Sabado');
INSERT INTO `txdias_clase`(NOM_DIA) VALUES ('Domingo');

-- ------------------------------------------------------------
-- Insert horas clase
-- --------------------------------------------------------------
INSERT INTO `txhoras_clase`(HORA_INICIO, HORA_SALIDA) VALUES ('8:00 a.m.', '12:00 p.m.');
INSERT INTO `txhoras_clase`(HORA_INICIO, HORA_SALIDA) VALUES ('2:00 p.m.', '6:00 p.m.');
INSERT INTO `txhoras_clase`(HORA_INICIO, HORA_SALIDA) VALUES ('6:00 p.m.', '10:00 p.m.');
INSERT INTO `txhoras_clase`(HORA_INICIO, HORA_SALIDA) VALUES ('8:00 a.m.', '11:00 p.m.');
INSERT INTO `txhoras_clase`(HORA_INICIO, HORA_SALIDA) VALUES ('3:00 p.m.', '6:00 p.m.');
INSERT INTO `txhoras_clase`(HORA_INICIO, HORA_SALIDA) VALUES ('7:00 p.m.', '10:00 p.m.');

-- ------------------------------------------------------------
-- Insert grupo horario
-- --------------------------------------------------------------
INSERT INTO `tmgrupo_horario`(NOM_GRUPOHORARIO) VALUES ('Mañana (L-M)');
INSERT INTO `tmgrupo_horario`(NOM_GRUPOHORARIO) VALUES ('Tarde (L-M)');
INSERT INTO `tmgrupo_horario`(NOM_GRUPOHORARIO) VALUES ('Noche (L-M)');
INSERT INTO `tmgrupo_horario`(NOM_GRUPOHORARIO) VALUES ('Mañana (L-Mi - V)');
INSERT INTO `tmgrupo_horario`(NOM_GRUPOHORARIO) VALUES ('Tarde (L-Mi - V)');
INSERT INTO `tmgrupo_horario`(NOM_GRUPOHORARIO) VALUES ('Noche (L-Mi - V)');
INSERT INTO `tmgrupo_horario`(NOM_GRUPOHORARIO) VALUES ('Mañana (Ma - J)');
INSERT INTO `tmgrupo_horario`(NOM_GRUPOHORARIO) VALUES ('Tarde (Ma - J)');
INSERT INTO `tmgrupo_horario`(NOM_GRUPOHORARIO) VALUES ('Noche (Ma - J)');
INSERT INTO `tmgrupo_horario`(NOM_GRUPOHORARIO) VALUES ('Mañana (Sa - D)');
INSERT INTO `tmgrupo_horario`(NOM_GRUPOHORARIO) VALUES ('Tarde (Sa - D)');

-- ------------------------------------------------------------
-- Insert horario grupo horario
-- --------------------------------------------------------------
INSERT INTO `tmhorario_grupo_horario`(FK_ID_GRUPOHORARIO, FK_ID_DIA, FK_ID_HORA) VALUES (1, 1, 1);
INSERT INTO `tmhorario_grupo_horario`(FK_ID_GRUPOHORARIO, FK_ID_DIA, FK_ID_HORA) VALUES (1, 3, 1);
INSERT INTO `tmhorario_grupo_horario`(FK_ID_GRUPOHORARIO, FK_ID_DIA, FK_ID_HORA) VALUES (2, 1, 2);
INSERT INTO `tmhorario_grupo_horario`(FK_ID_GRUPOHORARIO, FK_ID_DIA, FK_ID_HORA) VALUES (2, 3, 2);
INSERT INTO `tmhorario_grupo_horario`(FK_ID_GRUPOHORARIO, FK_ID_DIA, FK_ID_HORA) VALUES (3, 1, 3);
INSERT INTO `tmhorario_grupo_horario`(FK_ID_GRUPOHORARIO, FK_ID_DIA, FK_ID_HORA) VALUES (3, 3, 3);

INSERT INTO `tmhorario_grupo_horario`(FK_ID_GRUPOHORARIO, FK_ID_DIA, FK_ID_HORA) VALUES (4, 1, 4);
INSERT INTO `tmhorario_grupo_horario`(FK_ID_GRUPOHORARIO, FK_ID_DIA, FK_ID_HORA) VALUES (4, 3, 4);
INSERT INTO `tmhorario_grupo_horario`(FK_ID_GRUPOHORARIO, FK_ID_DIA, FK_ID_HORA) VALUES (4, 5, 4);
INSERT INTO `tmhorario_grupo_horario`(FK_ID_GRUPOHORARIO, FK_ID_DIA, FK_ID_HORA) VALUES (5, 1, 5);
INSERT INTO `tmhorario_grupo_horario`(FK_ID_GRUPOHORARIO, FK_ID_DIA, FK_ID_HORA) VALUES (5, 3, 5);
INSERT INTO `tmhorario_grupo_horario`(FK_ID_GRUPOHORARIO, FK_ID_DIA, FK_ID_HORA) VALUES (5, 5, 5);
INSERT INTO `tmhorario_grupo_horario`(FK_ID_GRUPOHORARIO, FK_ID_DIA, FK_ID_HORA) VALUES (6, 1, 6);
INSERT INTO `tmhorario_grupo_horario`(FK_ID_GRUPOHORARIO, FK_ID_DIA, FK_ID_HORA) VALUES (6, 3, 6);
INSERT INTO `tmhorario_grupo_horario`(FK_ID_GRUPOHORARIO, FK_ID_DIA, FK_ID_HORA) VALUES (4, 5, 6);

INSERT INTO `tmhorario_grupo_horario`(FK_ID_GRUPOHORARIO, FK_ID_DIA, FK_ID_HORA) VALUES (7, 2, 1);
INSERT INTO `tmhorario_grupo_horario`(FK_ID_GRUPOHORARIO, FK_ID_DIA, FK_ID_HORA) VALUES (7, 4, 1);
INSERT INTO `tmhorario_grupo_horario`(FK_ID_GRUPOHORARIO, FK_ID_DIA, FK_ID_HORA) VALUES (8, 2, 2);
INSERT INTO `tmhorario_grupo_horario`(FK_ID_GRUPOHORARIO, FK_ID_DIA, FK_ID_HORA) VALUES (8, 4, 2);
INSERT INTO `tmhorario_grupo_horario`(FK_ID_GRUPOHORARIO, FK_ID_DIA, FK_ID_HORA) VALUES (9, 2, 3);
INSERT INTO `tmhorario_grupo_horario`(FK_ID_GRUPOHORARIO, FK_ID_DIA, FK_ID_HORA) VALUES (9, 4, 3);

INSERT INTO `tmhorario_grupo_horario`(FK_ID_GRUPOHORARIO, FK_ID_DIA, FK_ID_HORA) VALUES (10, 6, 1);
INSERT INTO `tmhorario_grupo_horario`(FK_ID_GRUPOHORARIO, FK_ID_DIA, FK_ID_HORA) VALUES (10, 6, 1);
INSERT INTO `tmhorario_grupo_horario`(FK_ID_GRUPOHORARIO, FK_ID_DIA, FK_ID_HORA) VALUES (10, 7, 2);
INSERT INTO `tmhorario_grupo_horario`(FK_ID_GRUPOHORARIO, FK_ID_DIA, FK_ID_HORA) VALUES (10, 7, 2);


-- ------------------------------------------------------------
-- Insert periodo academico
-- --------------------------------------------------------------
INSERT INTO `tmperiodo_academico`(NOM_PERIODO, FECHA_INICIO, FECHA_FIN) VALUES ('2020-1', STR_TO_DATE('06/01/2020', '%d/%m/%Y'), STR_TO_DATE('02/02/2020', '%d/%m/%Y'));

-- ------------------------------------------------------------
-- Insert persona
-- --------------------------------------------------------------
INSERT INTO `tmpersona` (NOMBRE, APELLIDO_PAT, APELLIDO_MAT, DNI, GENERO, EDAD) VALUES ('Nataly', 'Vasquez', 'Saenz', 87654321, 0, 22);
INSERT INTO `tmpersona` (NOMBRE, APELLIDO_PAT, APELLIDO_MAT, DNI, GENERO, EDAD) VALUES ('Miguel', 'Velasquez', 'Yzquierdo', 87654321, 1, 24);
INSERT INTO `tmpersona` (NOMBRE, APELLIDO_PAT, APELLIDO_MAT, DNI, GENERO, EDAD) VALUES ('Brandon', 'Saenz', 'Falcon', 12345678, 1, 21);
INSERT INTO `tmpersona` (NOMBRE, APELLIDO_PAT, APELLIDO_MAT, DNI, GENERO, EDAD) VALUES ('Joel', 'Trujillo', 'Cruz', 87654321, 1, 21);
INSERT INTO `tmpersona` (NOMBRE, APELLIDO_PAT, APELLIDO_MAT, DNI, GENERO, EDAD) VALUES ('Jose', 'Soto', 'Diaz', 87654321, 1, 21);
INSERT INTO `tmpersona` (NOMBRE, APELLIDO_PAT, APELLIDO_MAT, DNI, GENERO, EDAD) VALUES ('Diego', 'Soto', 'Bejar', 87654321, 1, 21);
-- ------------------------------------------------------------
-- Insert rol
-- --------------------------------------------------------------
INSERT INTO `tmrol` (NOM_ROL, DESC_ROL) VALUES ('Estudiante', 'Estudiante del centro de idiomas');
INSERT INTO `tmrol` (NOM_ROL, DESC_ROL) VALUES ('Docente', 'Docente del centro de idiomas');

-- ------------------------------------------------------------
-- Insert usuario
-- --------------------------------------------------------------
INSERT INTO `tmusuario` (FK_ID_PERSONA, EMAIL, PASSWORD, FK_ID_ROL, ESTADO) VALUES ( 1, 'nataly@unmsm.edu.pe','passwd', 1, 1);
INSERT INTO `tmusuario` (FK_ID_PERSONA, EMAIL, PASSWORD, FK_ID_ROL, ESTADO) VALUES ( 2, 'miguel@unmsm.edu.pe','passwd', 1, 1);
INSERT INTO `tmusuario` (FK_ID_PERSONA, EMAIL, PASSWORD, FK_ID_ROL, ESTADO) VALUES ( 3, 'duvan@unmsm.edu.pe','passwd', 1, 1);
INSERT INTO `tmusuario` (FK_ID_PERSONA, EMAIL, PASSWORD, FK_ID_ROL, ESTADO) VALUES ( 4, 'joel@unmsm.edu.pe','passwd', 1, 1);
INSERT INTO `tmusuario` (FK_ID_PERSONA, EMAIL, PASSWORD, FK_ID_ROL, ESTADO) VALUES ( 5, 'jose@unmsm.edu.pe','passwd', 2, 1);
INSERT INTO `tmusuario` (FK_ID_PERSONA, EMAIL, PASSWORD, FK_ID_ROL, ESTADO) VALUES ( 6, 'diego@unmsm.edu.pe','passwd',2, 1);

-- ------------------------------------------------------------
-- Insert tipo estudiante
-- --------------------------------------------------------------
INSERT INTO `tmtipo_estudiante` (NOM_TIPO_ESTUDIANTE) VALUES ('Interno');
INSERT INTO `tmtipo_estudiante` (NOM_TIPO_ESTUDIANTE) VALUES ('Externo');

-- ------------------------------------------------------------
-- Insert estudiante
-- --------------------------------------------------------------
INSERT INTO `tmestudiante` (COD_ESTUDIANTE_CI, FK_ID_USUARIO, FK_ID_TIPO_ESTUDIANTE) VALUES (1, 1, 1);
INSERT INTO `tmestudiante` (COD_ESTUDIANTE_CI, FK_ID_USUARIO, FK_ID_TIPO_ESTUDIANTE) VALUES (2, 2, 1);
INSERT INTO `tmestudiante` (COD_ESTUDIANTE_CI, FK_ID_USUARIO, FK_ID_TIPO_ESTUDIANTE) VALUES (3, 3, 1);
INSERT INTO `tmestudiante` (COD_ESTUDIANTE_CI, FK_ID_USUARIO, FK_ID_TIPO_ESTUDIANTE) VALUES (4, 4, 1);


-- ------------------------------------------------------------
-- Insert docente
-- --------------------------------------------------------------
INSERT INTO `tmdocente` (COD_DOCENTE_CI, FK_ID_USUARIO, DEPARTAMENTO) VALUES (1, 6, 'Ingles');
INSERT INTO `tmdocente` (COD_DOCENTE_CI, FK_ID_USUARIO, DEPARTAMENTO) VALUES (2, 6, 'Portugues');

-- ------------------------------------------------------------
-- Insert prog_doc_curso
-- --------------------------------------------------------------
INSERT INTO `tpprog_doc_curso` (FK_ID_DOCENTE, FK_ID_CURSO, FK_ID_PERIODO) VALUES (1, 2, 1);
INSERT INTO `tpprog_doc_curso` (FK_ID_DOCENTE, FK_ID_CURSO, FK_ID_PERIODO) VALUES (1, 3, 1);
INSERT INTO `tpprog_doc_curso` (FK_ID_DOCENTE, FK_ID_CURSO, FK_ID_PERIODO) VALUES (1, 4, 1);
INSERT INTO `tpprog_doc_curso` (FK_ID_DOCENTE, FK_ID_CURSO, FK_ID_PERIODO) VALUES (2, 40, 1);
INSERT INTO `tpprog_doc_curso` (FK_ID_DOCENTE, FK_ID_CURSO, FK_ID_PERIODO) VALUES (2, 41, 1);
INSERT INTO `tpprog_doc_curso` (FK_ID_DOCENTE, FK_ID_CURSO, FK_ID_PERIODO) VALUES (2, 42, 1);

-- ------------------------------------------------------------
-- Insert estado prog_curso
-- --------------------------------------------------------------
INSERT INTO `txestado_progcurso` (NOM_ESTADO) VALUES ('Deshabilitado');
INSERT INTO `txestado_progcurso` (NOM_ESTADO) VALUES ('Habilitado');
INSERT INTO `txestado_progcurso` (NOM_ESTADO) VALUES ('Abierto');

-- ------------------------------------------------------------
-- Insert prog_curso
-- --------------------------------------------------------------
INSERT INTO `tpprog_curso` (FK_ID_PROG_DOC_CUR, FK_ID_GRUPOHORARIO, FK_ID_ESTADO_PROGCURSO) VALUES (1, 1, 2);
INSERT INTO `tpprog_curso` (FK_ID_PROG_DOC_CUR, FK_ID_GRUPOHORARIO, FK_ID_ESTADO_PROGCURSO) VALUES (2, 7, 2);
INSERT INTO `tpprog_curso` (FK_ID_PROG_DOC_CUR, FK_ID_GRUPOHORARIO, FK_ID_ESTADO_PROGCURSO) VALUES (3, 10, 2);
INSERT INTO `tpprog_curso` (FK_ID_PROG_DOC_CUR, FK_ID_GRUPOHORARIO, FK_ID_ESTADO_PROGCURSO) VALUES (4, 1, 2);
INSERT INTO `tpprog_curso` (FK_ID_PROG_DOC_CUR, FK_ID_GRUPOHORARIO, FK_ID_ESTADO_PROGCURSO) VALUES (5, 7, 2);
INSERT INTO `tpprog_curso` (FK_ID_PROG_DOC_CUR, FK_ID_GRUPOHORARIO, FK_ID_ESTADO_PROGCURSO) VALUES (6, 10, 2);

-- ------------------------------------------------------------
-- Insert estado matricula
-- --------------------------------------------------------------
INSERT INTO `txestado_matricula` (NOM_ESTADO_MATRICULA) VALUES ('Pre-matricula');
INSERT INTO `txestado_matricula` (NOM_ESTADO_MATRICULA) VALUES ('Activo');
INSERT INTO `txestado_matricula` (NOM_ESTADO_MATRICULA) VALUES ('Anulado');
INSERT INTO `txestado_matricula` (NOM_ESTADO_MATRICULA) VALUES ('Culminado');
INSERT INTO `txestado_matricula` (NOM_ESTADO_MATRICULA) VALUES ('Cambiado');


-- ------------------------------------------------------------
-- Insert matricula
-- --------------------------------------------------------------
INSERT INTO TPMATRICULA (FK_COD_ESTUDIANTE_CI, FK_ID_PROGCURSO, FK_COD_VOUCHER, FK_SEC_VOUCHER, FK_ID_ESTADO_MATRICULA) VALUES (1, 1, 39323, 1981, 1);
INSERT INTO TPMATRICULA (FK_COD_ESTUDIANTE_CI, FK_ID_PROGCURSO, FK_COD_VOUCHER, FK_SEC_VOUCHER, FK_ID_ESTADO_MATRICULA) VALUES (2, 1, 39323, 2655, 1);
INSERT INTO TPMATRICULA (FK_COD_ESTUDIANTE_CI, FK_ID_PROGCURSO, FK_COD_VOUCHER, FK_SEC_VOUCHER, FK_ID_ESTADO_MATRICULA) VALUES (3, 2, 39323, 3719, 1);
INSERT INTO TPMATRICULA (FK_COD_ESTUDIANTE_CI, FK_ID_PROGCURSO, FK_COD_VOUCHER, FK_SEC_VOUCHER, FK_ID_ESTADO_MATRICULA) VALUES (4, 3, 39323, 4338, 1);



