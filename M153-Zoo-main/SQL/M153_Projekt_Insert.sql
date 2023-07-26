USE m153_Zoo;

INSERT INTO Enclosures (name)
VALUES
    ('Sumatra-Orang-Utan-Enclosure'),
    ('Capybara-Enclosure'),
    ('Asian-Lion-Enclosure'),
    ('Chile-Flamingo-Enclosure'),
    ('Wide-Southed-Caiman-Enclosure'),
    ('King-Penguin-Enclosure'),
    ('Alpaca-Enclosure'),
    ('Meerkat-Enclosure'),
    ('African-Dwarf-Goat-Enclosure');

INSERT INTO AnimalGroup (fk_EnclosureId, Name)
VALUES
(1,'Sumatra Orang Utan'),
(2,'Capybara'),
(3,'Asian-Lions'),
(4,'Chile-Flamingo'),
(5,'Wide-Southed-Caiman'),
(6,'King-Penguin'),
(7,'Alpacas'),
(8,'Meerkats'),
(9,'African-Dwarf-Goat');


/* Insertion of Sumatra Orang Utans */
INSERT INTO Animal (fk_AnimalGroupId, name, Size, Birthday)
VALUES
    (1,'Coco', 1.40,'2010-06-07'),
    (1,'Aton', 1.35,'2010-06-07'),
    (1,'Hathor', 1.20,'2010-06-07'),
    (1,'Nefertem', 1.33,'2010-06-07'),
    (1,'Osiris', 1.41,'2010-06-07'),
    (1,'Manfred', 0.90,'2013-02-01');

/* Insertion of Capybaras */
INSERT INTO Animal (fk_AnimalGroupId, name, Size, Birthday)
VALUES
    (2,'Po', 0.43,'2010-01-24'),
    (2,'Sum', 0.47,'2012-12-05'),
    (2,'Bao', 0.42,'2015-05-11'),
    (2,'Mei Mei', 0.50,'2011-01-01'),
    (2,'Zeng',0.13,'2020-01-01'),
    (2,'Shen', 0.15,'2020-01-01'),
    (2,'Kai', 0.11,'2020-01-01');

/* Insertion of Asian Lions */
INSERT INTO Animal (fk_AnimalGroupId, name, Size, Birthday)
VALUES
    (3,'Bitsy', 1.47,'2010-12-04'),
    (3,'Blacky', 1.22,'2009-12-21'),
    (3,'Archie', 1.12,'2008-05-16'),
    (3,'Candy', 1.04,'2010-09-18');

/* Insertion of Chile Flamingos */
INSERT INTO Animal (fk_AnimalGroupId, name, Size, Birthday)
VALUES
    (4,'Metzli', 1.47,'1999-11-12'),
    (4,'Cinteotl', 1.41,'1990-01-01'),
    (4,'Itzli', 1.43,'1989-01-01'),
    (4,'Xolotl', 1.30,'1988-01-01'),
    (4,'Oxomoco', 1.43,'2003-01-01'),
    (4,'Metzli', 1.47,'1999-11-12'),
    (4,'Lily', 1.32,'1990-11-03'),
    (4,'Twinkie', 1.33,'1989-06-06'),
    (4,'Sunshine ', 1.45,'1988-07-11'),
    (4,'Popcorn', 1.43,'2003-08-12');

/* Insertion of Wide-Southed-Caimans */
INSERT INTO Animal (fk_AnimalGroupId, name, Size, Birthday)
VALUES
    (5,'Dude', 3.50,'2000-03-01'),
    (5,'Flake', 3.22,'2001-02-11'),
    (5,'Dusty', 3.55,'2012-12-07'),
    (5,'Grizzly', 3.47,'1990-04-04'),
    (5,'Franky', 3.41,'2003-12-21'),
    (5,'Daisy ', 3.22,'2002-04-28');

/* Insertion of King Pinguins */
INSERT INTO Animal (fk_AnimalGroupId, name, Size, Birthday)
VALUES
    (6,'Ricky', 0.88,'2002-01-12'),
    (6,'Spencer', 0.89,'2003-11-14'),
    (6,'Tangles', 0.93,'2001-04-04'),
    (6,'Zero', 0.81,'2004-06-15'),
    (6,'Tiffany ', 0.80,'2005-08-12'),
    (6,'Faith', 0.87,'2002-03-08'),
    (6,'Harmony ', 0.83,'2010-10-05'),
    (6,'Henry', 0.91,'2009-06-09'),
    (6,'Heather', 0.94,'2004-12-02');


/* Insertion of Alpacas */
INSERT INTO Animal (fk_AnimalGroupId, name, Size, Birthday)
VALUES
    (7,'Jona', 1.20,'2002-05-02'),
    (7,'Phoenix', 1.11,'2003-12-11'),
    (7,'Aiden', 1.22,'2001-03-07'),
    (7,'Ayumi', 1.14,'2004-05-12'),
    (7,'Sumi ', 1.10,'2005-02-14'),
    (7,'Zula', 1.16,'2002-04-08'),
    (7,'Drake ', 1.33,'2010-11-06'),
    (7,'Mola', 1.26,'2009-04-04'),
    (7,'Djulien', 1.26,'2004-10-04');

/* Insertion of Meerkats */
INSERT INTO Animal (fk_AnimalGroupId, name, Size, Birthday)
VALUES
    (8,'Jona', 1.20,'2005-05-02'),
    (8,'Phoenix', 1.11,'2003-10-11'),
    (8,'Aiden', 1.22,'2012-03-07'),
    (8,'Ayumi', 1.14,'2014-05-12'),
    (8,'Sumi ', 1.10,'2006-03-12'),
    (8,'Zula', 1.16,'2008-05-05'),
    (8,'Drake ', 1.33,'2011-11-04'),
    (8,'Mola', 1.26,'2008-12-02'),
    (8,'Djulien', 1.26,'2007-11-05');

/* Insertion of African-Dwarf-Goats */
INSERT INTO Animal (fk_AnimalGroupId, name, Size, Birthday)
VALUES
    (9,'Fortuna', 0.40,'2015-07-02'),
    (9,'Merkur', 0.55,'2012-12-11'),
    (9,'Venus', 0.43,'2011-02-07'),
    (9,'Amor', 0.44,'2021-09-04'),
    (9,'Vulcanus ', 0.43,'2021-08-11'),
    (9,'Mars', 0.45,'2020-11-11'),
    (9,'Janus ', 0.40,'2006-12-16'),
    (9,'Hercules', 0.54,'2012-03-12'),
    (9,'Neptun', 0.56,'2006-11-04');

INSERT INTO Feed (Feed_Name, description)
VALUES
('Avocado', 'The avocado is a plant species from the laurel family. From a botanical point of view, the fruit is a berry and has historically been given many other names that are now rare, such as avocado pear, alligator pear or butter fruit.'),
('Grape','Grapes are the infructescences of the vines, especially those of the noble vine. The individual fruits of the infructescence are called grapes. Colloquially, a clear distinction is not always made between berries and grapes.'),
('Leafs','Leaves are lateral outgrowths at the nodes (nodes) of the shoot axis. The original functions of the leaves are photosynthesis (construction of organic substances with the help of light) and transpiration'),
('Zebra-Meat','Zebra meat is a generic term used to describe the meat of various species of zebra that is consumed as food and animal feed. For reasons of species protection, only the meat of the plains zebra / roan zebra is available in limited quantities.'),
('Gnu-Meat','The designation of the wildebeest as "roebuck" should not obscure the fact that their meat is very lean game meat. In terms of taste, however, this is reminiscent of beef.'),
('oats','Seed oats or real oats is a species of plant in the genus oats within the grass family. It is used as grain.'),
('Bird-Seeds','Bird seed is used to feed or supplement birds. A distinction must be made between feed for wild birds and for birds kept as pets or zoo animals. Bird food is one of the ways in which mugwort ragweed, a feared allergy trigger, spreads.'),
('Fish','Fishes are aquatic vertebrates with gills. In the narrower sense, the term fish is restricted to aquatic animals with jaws. In a broader sense, it also includes jawless species, which are still represented among the recent species with the cyclostomes.'),
('Crab','With around 6,800 species, the crabs – also known as real crabs or short-tailed crabs – are the largest infra-order of the order decapods. Most crab species live in the sea, but some also live in fresh water or on land.'),
('grass','Monocot, herbaceous plants with inconspicuous flowers and long, narrow leaves are referred to as grass.'),
('Insects','Insects, also known as insects or insects, are the most species-rich class of arthropods and at the same time, by an absolute majority, the most species-rich class of animals at all.');

INSERT INTO Feeding (fk_AnimalGroupId, fk_FeedId, Amount, Feeding_Time)
VALUES
(1,1,50,'12:00:00'),
(1,2,90,'18:00:00'),
(2,10,300,'08:00:00'),
(3,4,200,'13:00:00'),
(3,5,200,'20:00:00'),
(4,9,15,'07:00:00'),
(4,8,30,'15:00:00'),
(5,8,300,'12:00:00'),
(5,5,300,'12:00:00'),
(6,9,200,'11:00:00'),
(7,10,200,'10:00:00'),
(8,11,200,'13:00:00'),
(9,9,200,'12:00:00');


INSERT INTO Properties (AnimalGroupId, Description)
VALUES
(1,'Tree dwelling'),
(1,'Lives in rainforests up to 2000 meters above sea level'),
(1,'lives up to 50 years, in zoos up to 55 years'),
(2,'Lives in dense vegetation along water bodies, grassy savannas up to 1300 meters above sea level'),
(2, 'Is crepuscular, lives in areas with many people and is also nocturnal. Frequently in the water, good swimmers'),
(2, 'Lives up to 12 years'),
(3,'lives in the dry forest'),
(3,'Is diurnal and territorial'),
(3, 'Lives up to 18 years'),
(4,'lives in saline lakes up to 4500 meters above sea level and sea coasts'),
(4,'Terrestrial, lives in shallow waters, is diurnal'),
(4,'Lives up to 60 years'),
(5,'Lives in large, shallow freshwater swamps, mangroves, lakes and rivers'),
(5,'is diurnal'),
(5,'Lives up to 60 years'),
(6,'Lives in seas free of drift ice, along sea coasts and on sub-Antarctic islands'),
(6,'Is very sociable, hunts in groups against seasonal monogamy. Breeds in large colonies whose chicks form childrens groups'),
(6,'Lives more than 20 years'),
(7,'Lives in grasslands and semi-deserts from sea level to 4000 meters above sea level'),
(7,'Is diurnal and territorial'),
(7,'Lives up to 20 years'),
(8,'Lives in grass and scrubland'),
(8,'Is diurnal'),
(8,'Lives up to 23 years'),
(9,'Is a pet. In the wild it lives in wet steppes and humid forests'),
(9,'Is diurnal'),
(9,'Lives up to 15 years');