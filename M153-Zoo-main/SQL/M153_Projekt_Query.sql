USE m153_Zoo;

/*Man erhält von von jedem Tier die Tiergruppe, den Gehägename, die Fütterungszeit und das Futter*/
SELECT Animal.AnimalId, Animal.name, AG.AnimalGroupId, AG.name, E.name, FE.Feeding_Time, F.Feed_Name FROM Animal
JOIN AnimalGroup AG on Animal.fk_AnimalGroupId = AG.AnimalGroupId
JOIN Enclosures E on E.EnclosureId = AG.fk_EnclosureId
JOIN Feeding FE on AG.AnimalGroupId = FE.fk_AnimalGroupId
JOIN Feed F on F.FeedId = FE.fk_FeedId;

/*  Alle Vorhandenen Eigenschaften von allen AnimalGroups */
select animalgroup.name, P.Description from animalgroup
join properties P on animalgroup.AnimalGroupId = P.AnimalGroupId;

/* Alle Eigenschaften des Sumatra Orang Utan */
select animalgroup.name, P.Description from animalgroup
join properties P on animalgroup.AnimalGroupId = P.AnimalGroupId
where animalgroup.AnimalGroupId = 1;

/* Auflistung der Menge der Tiere in den einzelnen Gehegen */
Select enclosures.name, count(*) from enclosures
join animalgroup AG on enclosures.EnclosureId = AG.fk_EnclosureId
join animal A on AG.AnimalGroupId = A.fk_AnimalGroupId
group by enclosures.name
order by count(*) desc;

/* Auflistung der Menge der Tiere in einem bestimmten Gehegen */
Select enclosures.name, count(*) from enclosures
join animalgroup AG on enclosures.EnclosureId = AG.fk_EnclosureId
join animal A on AG.AnimalGroupId = A.fk_AnimalGroupId
where enclosures.EnclosureId = 1
group by enclosures.name;

/* Durschnittalter aller Tiere */
select FLOOR(AVG((datediff(CURDATE(),animal.Birthday)/365))) from animal;

/* Auflistung Durschnittalter aller Tiergruppen */
select animalgroup.name, FLOOR(AVG((datediff(CURDATE(),A.Birthday)/365))) AS 'Average Age' from animalgroup
join animal A on animalgroup.AnimalGroupId = A.fk_AnimalGroupId
GROUP BY animalgroup.name
ORDER BY FLOOR(AVG((datediff(CURDATE(),A.Birthday)/365))) DESC;

/* Auflistunge welches Futter welches Tier zu welcher Zeit bekommt */
SELECT animalgroup.name, FD.Feed_Name, F.Feeding_Time from animalgroup
join feeding F on animalgroup.AnimalGroupId = F.fk_AnimalGroupId
join feed FD on F.fk_FeedId = FD.FeedId;

/* Man erhält die Grösse in Zentimeter des Tieres mit der Id 1 */
CALL GetAnimalsWithSizeInCentimeters((select Size FROM Animal WHERE AnimalId = 1), @Result);
select *, @Result AS 'Groesse in Zentimeter' FROM Animal WHERE AnimalId = 1;

/* Man erhält das Alter des Tieres mit der Id 1*/
CALL GetAge((select Birthday FROM Animal WHERE AnimalId = 1), @Age);
select *, @Age AS 'Alter' FROM Animal WHERE AnimalId = 1;

/*Wenn man das DELETE-Statement ausführt wird die Tiergruppe die Fütterungsinformationen und das Gehäge der Tiergruppe gelöscht*/
DELETE FROM Animal WHERE fk_AnimalGroupId = 2;
SELECT A.name, AG.name, E.name, F.fk_AnimalGroupId, F.Feeding_Time FROM AnimalGroup AS AG
join Enclosures E on E.EnclosureId = AG.fk_EnclosureId
join Animal A on AG.AnimalGroupId = A.fk_AnimalGroupId
join Feeding F on AG.AnimalGroupId = F.fk_AnimalGroupId;

/*Wenn man das DELETE-Statement ausführt wird und die Gruppe danach noch Tiere enthält, wird der Trigger nicht ausgeführt*/
DELETE FROM Animal WHERE AnimalId = 4;
SELECT A.name, AG.name, E.name, F.fk_AnimalGroupId, F.Feeding_Time FROM AnimalGroup AS AG
join Enclosures E on E.EnclosureId = AG.fk_EnclosureId
join Animal A on AG.AnimalGroupId = A.fk_AnimalGroupId
join Feeding F on AG.AnimalGroupId = F.fk_AnimalGroupId;

/*Wenn man das INSERT-Statement ausführt, aber das Geburtsdatum in der Zukunft liegt, wird das Datum auf Heute geändert*/
INSERT INTO Animal(fk_AnimalGroupId, name, Birthday, Size)
VALUES(6, 'Hansu', '2023-06-09', 1.42);
SELECT * FROM Animal WHERE name = 'Hansu';

/*Wenn man das INSERT-Statement ausführt und das geburtstagsdatum nicht in der Zukunft liegt, wird er Trigger nicht ausgeführt*/
INSERT INTO Animal(fk_AnimalGroupId, name, Birthday, Size)
VALUES(6, 'Hansu', '2021-06-09', 1.42);
SELECT * FROM Animal WHERE name = 'Hansu';
