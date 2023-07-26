DROP DATABASE IF EXISTS m153_Zoo;
CREATE DATABASE m153_Zoo;
USE m153_Zoo;

CREATE TABLE Enclosures(
    EnclosureId int primary key auto_increment,
    `name` varchar(255)
);

CREATE TABLE Feed(
    FeedId int primary key auto_increment,
    Feed_Name text,
    `description` varchar(255)
);


CREATE TABLE AnimalGroup(
    AnimalGroupId int primary key  auto_increment,
    fk_EnclosureId int,
    `name` varchar(255),
    FOREIGN KEY (fk_EnclosureId) REFERENCES Enclosures (EnclosureId)
);

CREATE TABLE Animal(
    AnimalId int primary key auto_increment,
    fk_AnimalGroupId int,
    `name` varchar(255),
    Birthday date,
    Size float,
    FOREIGN KEY (fk_AnimalGroupId) REFERENCES AnimalGroup (AnimalGroupId)
);


CREATE TABLE Feeding(
    FeedingId int primary key auto_increment,
    fk_AnimalGroupId int,
    fk_FeedId int,
    Amount int,
    Feeding_Time TIME,
    FOREIGN KEY (fk_AnimalGroupId) REFERENCES AnimalGroup(AnimalGroupId),
    FOREIGN KEY (fk_FeedId) REFERENCES Feed(FeedId)
);



CREATE TABLE Properties(
    AnimalGroupId int,
    Description varchar(255)
);



/* If the birthday date lays in the future, change it to Today's date*/
DELIMITER //
CREATE TRIGGER CheckBirthday BEFORE INSERT ON Animal
    FOR EACH ROW
    BEGIN
    	IF NEW.Birthday > CURDATE() THEN
        	SET NEW.Birthday = CURDATE();
        END IF;
    END;//
DELIMITER ;

/*If last animal in animal-group is removed, whole animal-group + feeding of animal gets deleted*/
DELIMITER //
CREATE TRIGGER RemoveAnimalGroupAndFeeding
    AFTER DELETE ON Animal
    FOR EACH ROW
        BEGIN
            IF (select count(AnimalId) from Animal where Animal.fk_AnimalGroupId = OLD.fk_AnimalGroupId) = 0 THEN
                DELETE FROM Feeding WHERE Feeding.fk_AnimalGroupId = OLD.fk_AnimalGroupId;
                DELETE FROM AnimalGroup WHERE AnimalGroup.AnimalGroupId = OLD.fk_AnimalGroupId;
            END IF;
        END;//
DELIMITER ;

/* If in enclosure is no animal-group, Enclosure gets deleted*/
DELIMITER //
CREATE TRIGGER RemoveEnclosuresIfNotUsed
    AFTER DELETE ON AnimalGroup
    FOR EACH ROW
        BEGIN
            IF (select count(AnimalGroupId) from AnimalGroup where fk_EnclosureId = OLD.fk_EnclosureId) = 0 THEN
                DELETE FROM Enclosures WHERE Enclosures.EnclosureId = OLD.fk_EnclosureId;
            END IF;
        END;//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE GetAge(IN Birthday DATE, OUT Age INT)
    BEGIN
        SELECT (datediff(CURDATE(),Birthday)/365) into Age;
    END;//
DELIMITER ;

DELIMITER //

CREATE PROCEDURE GetAnimalsWithSizeInCentimeters(IN Size FLOAT, OUT SizeInCentimeters INT)
    BEGIN
        SELECT FLOOR(Size * 100) into SizeInCentimeters;
    END;//
DELIMITER ;