
CREATE TABLE public.player (
	id_player serial NOT NULL,
	"name" varchar(100) NOT NULL,
	nickname varchar(50) NULL,
	CONSTRAINT player_pkey PRIMARY KEY (id_player)
);

CREATE TABLE public.ranked (
	id_ranked serial NOT NULL,
	value int4 NOT NULL,
	CONSTRAINT ranked_pkey PRIMARY KEY (id_ranked)
);

CREATE TABLE public."user" (
	id_user serial NOT NULL,
	user_name varchar(80) NOT NULL,
	first_name varchar(50) NOT NULL,
	first_surname varchar(50) NULL,
	second_surname varchar(50) NULL,
	"password" varchar(100) NOT NULL,
	CONSTRAINT user_pkey PRIMARY KEY (id_user)
);

CREATE TABLE public.game (
	"index" int4 NOT NULL,
	id_player int4 NOT NULL,
	score int4 NULL,
	created timestamptz NULL,
	CONSTRAINT game_pkey PRIMARY KEY (index, id_player)
);

CREATE OR REPLACE VIEW public.ranking
AS SELECT p.id_player,
    p.name,
    r.total_score,
    r.number_games,
    r.average_score
   FROM ( SELECT g.id_player,
            sum(g.score) AS total_score,
            count(g.score) AS number_games,
            round(avg(g.score), 2) AS average_score
           FROM game g
          GROUP BY g.id_player) r
     JOIN player p ON p.id_player = r.id_player;


ALTER TABLE public.game ADD CONSTRAINT game_fkey_player FOREIGN KEY (id_player) REFERENCES player(id_player);

INSERT INTO public."user" (user_name,first_name,first_surname,second_surname,"password") 
VALUES
	 ('admin','admin','','','$2a$10$1xlZr9Ma/ZpGvgk.h9MmZ.LgeWGNK3MOrByULxCCkNWDJwnJ2Sm6e'),
	 ('vorellana','Victor','Orellana','Meza','$2a$10$vNwQCkUG4uKpvYfuQ/ugX.jvFBbVCf2o8APQyAzrAr2yc/x4lfylS');

INSERT INTO public.ranked (value) VALUES
	 (50),
	 (80),
	 (20),
	 (60),
	 (70),
	 (100),
	 (20);

INSERT INTO public.player ("name",nickname) VALUES
	 ('Victor Orellana','vorellana'),
	 ('Juan Perez','jperez'),
	 ('Ivan Cruz','icruz');	 

INSERT INTO public.game ("index",id_player,score,created) VALUES
	 (1,1,105,'2021-03-06 01:48:05.931375-05'),
	 (2,1,70,'2021-03-06 02:02:34.041325-05'),
	 (1,3,50,'2021-03-06 02:08:02.504694-05'),
	 (3,1,35,'2021-03-06 02:47:24.451575-05'),
	 (4,1,17,'2021-03-06 12:05:07.091673-05'),
	 (2,3,23,'2021-03-06 12:08:33.958909-05'),
	 (1,2,37,'2021-03-06 12:09:07.691428-05'),
	 (3,3,57,'2021-03-06 12:11:31.364084-05'),
	 (2,2,43,'2021-03-06 12:51:49.27513-05'),
	 (4,3,48,'2021-03-06 12:56:55.984935-05');
INSERT INTO public.game ("index",id_player,score,created) VALUES
	 (5,1,8,'2021-03-06 21:41:11.124708-05'),
	 (6,1,23,'2021-03-06 21:42:27.717707-05'),
	 (7,1,27,'2021-03-06 21:56:05.962126-05'),
	 (5,3,11,'2021-03-06 22:05:39.842234-05'),
	 (3,2,88,'2021-03-06 22:07:37.087811-05'),
	 (4,2,77,'2021-03-06 22:08:06.936319-05'),
	 (5,2,66,'2021-03-06 22:08:20.462383-05'),
	 (6,2,55,'2021-03-06 22:09:06.841332-05'),
	 (7,2,44,'2021-03-06 22:09:22.393798-05'),
	 (6,3,49,'2021-03-07 04:22:37.552929-05');
INSERT INTO public.game ("index",id_player,score,created) VALUES
	 (8,2,11,'2021-03-07 05:21:25.417699-05'),
	 (9,2,22,'2021-03-07 07:04:50.441743-05'),
	 (7,3,63,'2021-03-07 07:06:28.008332-05'),
	 (10,2,33,'2021-03-07 07:41:36.669818-05'),
	 (8,1,88,'2021-03-07 07:45:14.414185-05');
