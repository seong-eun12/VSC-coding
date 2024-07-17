SELECT * FROM classicmodels. customers;

--  (1) **`çustomers`** 테이블에 새 고객을 추가하세요.
INSERT INTO `classicmodels`.`customers` 
(`customerNumber`, `customerName`, `contactLastName`, `contactFirstName`, `phone`, `addressLine1`, `city`, `country`) 
VALUES 
('499', 'BAE SEONG EUN', 'Mac', 'donald', '01012345678', '123dasekg', 'seoul', 'korea');


-- (2) **`products`** 테이블에 새 제품을 추가하세요.
INSERT INTO `classicmodels`.`productlines` (`productLine`, `textDescription`) 
VALUES ('Car', 'All kinds of cars');
INSERT INTO `classicmodels`.`products` 
(`productCode`, `productName`, `productLine`, `productScale`, `productVendor`, `productDescription`, `quantityInStock`, `buyPrice`, `MSRP`) 
VALUES 
('S27_2545', '2001s Korea Car', 'Car', '1:27', 'Blue Star Design', 'All wood with canvas', 2001, 80.35, 111.25);

 SELECT * FROM classicmodels.customers;

--  (3) **`employees`** 테이블에 새 직원을 추가하세요.
INSERT INTO `classicmodels`.`employees` 
(`employeeNumber`, `lastName`, `firstName`, `extension`, `email`, `officeCode`, `reportsTo`, `jobTitle`) 
VALUES 
('1709', 'Gerar', 'Martin', 'x2314', 'kgerad@classicmodelcars.com', '3', NULL, 'Sales Rep');

--  (4) **`offices`** 테이블에 새 사무실을 추가하세요.
	 UPDATE `classicmodels`.`offices` SET `officeCode` = '9', `city` = 'seoull', `addressLine1` = '23 dkfeopd' WHERE (`officeCode` = '8');
	
--  (5) **`orders`** 테이블에 새 주문을 추가하세요.
	 INSERT INTO `classicmodels`.`orders` (`orderNumber`, `orderDate`, `requiredDate`, `shippedDate`, `status`, `customerNumber`) VALUES ('10525', '2010-06-30', '2020-12-25', '2030-06-15', 'In Process', '201');
    
--  (6) **`orderdetails`** 테이블에 주문 상세 정보를 추가하세요.
     INSERT INTO `classicmodels`.`orderdetails` (`orderNumber`, `productCode`, `quantityOrdered`, `priceEach`, `orderLineNumber`) VALUES ('10306', 'S25_2024', '26', NULL, '30');
    
--  (7) **`payments`** 테이블에 지불 정보를 추가하세요.
     INSERT INTO `classicmodels`.`payments` (`customerNumber`, `checkNumber`, `paymentDate`) VALUES ('498', 'MN25054', '2015-11-25');

--  (8) **`productlines`** 테이블에 제품 라인을 추가하세요.
     INSERT INTO `classicmodels`.`productlines` (`productLine`) VALUES ('Banana choco');

--  (9) **`customers`** 테이블에 다른 지역의 고객을 추가하세요.
   INSERT INTO `classicmodels`.`customers` (`customerNumber`, `customerName`, `contactLastName`, `contactFirstName`, `phone`, `city`) VALUES ('499', 'KIM YU JIN', 'Window', 'dolard', '1235558894', 'India');
     
--  (10) **`products`** 테이블에 다른 카테고리의 제품을 추가하세요.
INSERT INTO `classicmodels`.`products` 
(`productCode`, `productName`, `productLine`, `productScale`, `productVendor`, `productDescription`, `quantityInStock`, `buyPrice`) 
VALUES 
('S72_3215', 'Pont Yachtan', 'Ships', '1:89', 'Alien X Dhkeg', 'Polished finish. Exact replica with official logos and insignias', '586', '52.12');
