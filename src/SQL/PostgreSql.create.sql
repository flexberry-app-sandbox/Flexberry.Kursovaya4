﻿




CREATE TABLE ЦенноваяСтела (
 primaryKey UUID NOT NULL,
 Наименование VARCHAR(255) NULL,
 Цена DOUBLE PRECISION NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Резервуар (
 primaryKey UUID NOT NULL,
 КолвоТоп DOUBLE PRECISION NULL,
 Состояние VARCHAR(255) NULL,
 IdР INT NULL,
 Покупка UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE БазаКлиента (
 primaryKey UUID NOT NULL,
 IDКлиента INT NULL,
 Логин VARCHAR(255) NULL,
 Пароль VARCHAR(255) NULL,
 НомерКарты INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Покупка (
 primaryKey UUID NOT NULL,
 Количество DOUBLE PRECISION NULL,
 Сумма DOUBLE PRECISION NULL,
 ЦенноваяСтела UUID NOT NULL,
 БазаКлиента UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMNETLOCKDATA (
 LockKey VARCHAR(300) NOT NULL,
 UserName VARCHAR(300) NOT NULL,
 LockDate TIMESTAMP(3) NULL,
 PRIMARY KEY (LockKey));


CREATE TABLE STORMSETTINGS (
 primaryKey UUID NOT NULL,
 Module VARCHAR(1000) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 "User" VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMAdvLimit (
 primaryKey UUID NOT NULL,
 "User" VARCHAR(255) NULL,
 Published BOOLEAN NULL,
 Module VARCHAR(255) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 HotKeyData INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERSETTING (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMWEBSEARCH (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 "Order" INT NOT NULL,
 PresentView VARCHAR(255) NOT NULL,
 DetailedView VARCHAR(255) NOT NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERDETAIL (
 primaryKey UUID NOT NULL,
 Caption VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 ConnectMasterProp VARCHAR(255) NOT NULL,
 OwnerConnectProp VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERLOOKUP (
 primaryKey UUID NOT NULL,
 DataObjectType VARCHAR(255) NOT NULL,
 Container VARCHAR(255) NULL,
 ContainerTag VARCHAR(255) NULL,
 FieldsToView VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE UserSetting (
 primaryKey UUID NOT NULL,
 AppName VARCHAR(256) NULL,
 UserName VARCHAR(512) NULL,
 UserGuid UUID NULL,
 ModuleName VARCHAR(1024) NULL,
 ModuleGuid UUID NULL,
 SettName VARCHAR(256) NULL,
 SettGuid UUID NULL,
 SettLastAccessTime TIMESTAMP(3) NULL,
 StrVal VARCHAR(256) NULL,
 TxtVal TEXT NULL,
 IntVal INT NULL,
 BoolVal BOOLEAN NULL,
 GuidVal UUID NULL,
 DecimalVal DECIMAL(20,10) NULL,
 DateTimeVal TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ApplicationLog (
 primaryKey UUID NOT NULL,
 Category VARCHAR(64) NULL,
 EventId INT NULL,
 Priority INT NULL,
 Severity VARCHAR(32) NULL,
 Title VARCHAR(256) NULL,
 Timestamp TIMESTAMP(3) NULL,
 MachineName VARCHAR(32) NULL,
 AppDomainName VARCHAR(512) NULL,
 ProcessId VARCHAR(256) NULL,
 ProcessName VARCHAR(512) NULL,
 ThreadName VARCHAR(512) NULL,
 Win32ThreadId VARCHAR(128) NULL,
 Message VARCHAR(2500) NULL,
 FormattedMessage TEXT NULL,
 PRIMARY KEY (primaryKey));



 ALTER TABLE Резервуар ADD CONSTRAINT FKe05ef510a71345e8c5f7a8000713339aeacfcc03 FOREIGN KEY (Покупка) REFERENCES Покупка; 
CREATE INDEX Indexe05ef510a71345e8c5f7a8000713339aeacfcc03 on Резервуар (Покупка); 

 ALTER TABLE Покупка ADD CONSTRAINT FK9df86c62646a5bba7ec95c58b0eeeecc93f019b6 FOREIGN KEY (ЦенноваяСтела) REFERENCES ЦенноваяСтела; 
CREATE INDEX Index9df86c62646a5bba7ec95c58b0eeeecc93f019b6 on Покупка (ЦенноваяСтела); 

 ALTER TABLE Покупка ADD CONSTRAINT FK3ca64a4a756c68cf30a6082d5590081949c0f8ee FOREIGN KEY (БазаКлиента) REFERENCES БазаКлиента; 
CREATE INDEX Index3ca64a4a756c68cf30a6082d5590081949c0f8ee on Покупка (БазаКлиента); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 
