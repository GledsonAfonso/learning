select * from HumanResources.Department d  ;
select top (1000) * from AdventureWorks2017.Person.Person p ;


-- Section 2 - 5
select p.FirstName, p.LastName from Person.Person p order by p.FirstName, p.LastName;
select p.FirstName, count(p.FirstName) as TimesShowed from Person.Person p group by p.FirstName order by TimesShowed DESC, p.FirstName;


-- Section 2 - 6
select distinct p.FirstName from Person.Person p;
select distinct p.LastName  from Person.Person p;
select count(distinct p.FirstName) as DistinctFirstName, count(distinct p.LastName) as DistinctLastNames from Person.Person p;


-- Section 2 - 7
-- Challenge #1
select p.Name from Production.Product p where p.Weight >= 500 and p.Weight <= 700;

-- Challenge #2
select * from HumanResources.Employee e where e.MaritalStatus like 'M' and e.SalariedFlag = 1;

-- Challenge #3
select p.FirstName, p.LastName, ea.EmailAddress from Person.Person p join Person.EmailAddress ea on p.BusinessEntityID = ea.BusinessEntityID where p.FirstName = 'peter' and p.LastName = 'krebs';


-- Section 2 - 8
-- Challenge #1
select count(*) from Production.Product p ;

-- Challenge #2
select count(p.[Size]) from Production.Product p ;

-- Challenge #3
select count(DISTINCT p.[Size]) from Production.Product p ;


-- Section 2 - 10
-- Challenge #1
select top 10 p.ProductID  from Production.Product p order by p.ListPrice  desc ;

-- Challenge #2
select p.Name, p.ProductNumber from Production.Product p where p.ProductID BETWEEN 1 and 4 ;
-- or
select top 4 p.Name, p.ProductNumber from Production.Product p order by p.ProductID asc;

-- Section 2 - 14
-- Challenge #1
select count(p.ProductID) from Production.Product p where p.ListPrice > 1500;

-- Challenge #2
select count(p.LastName) from Person.Person p where p.LastName like 'p%';

-- Challenge #3
select count(distinct a.City) from Person.Address a ;

-- Challenge #4
select distinct a.City from Person.Address a ;

-- Challenge #5
select count(*) from Production.Product p where p.Color = 'red' and p.ListPrice BETWEEN 500 and 1000 ;

-- Challenge #6
select count(*) from Production.Product p where p.Name like '%road%' ;


-- Section 2 - 16
-- Challenge #1
select p.MiddleName, count(p.MiddleName) as quantity from Person.Person p group by p.MiddleName ;

-- Challenge #2
select sod.ProductID, avg(sod.OrderQty) as average from Sales.SalesOrderDetail sod group by sod.ProductID ;

-- Challenge #3
select top 10 sod.ProductID, sum(sod.LineTotal) as line_total_sum from Sales.SalesOrderDetail sod group by sod.ProductID order by line_total_sum desc ;

-- Challenge #4
select wo.ProductID, count(wo.ProductID) as product_quantity, avg(wo.OrderQty) as order_quantity_average from Production.WorkOrder wo group by wo.ProductID ;


-- Section 2 - 17
-- Challenge #1
select a.StateProvinceID, count(a.StateProvinceID) as state_province_register_times from Person.Address a group by a.StateProvinceID having count(a.StateProvinceID) > 1000 ;

-- Challenge #2
select sod.ProductID, avg(sod.LineTotal) as total_sales from Sales.SalesOrderDetail sod group by sod.ProductID having avg(sod.LineTotal) < 1000000 ;


-- Section 3 - 1
-- Challenge #1
select pp.BusinessEntityID, pnt.Name, pnt.PhoneNumberTypeID, pp.PhoneNumber from Person.PersonPhone pp inner join Person.PhoneNumberType pnt on pnt.PhoneNumberTypeID = pp.PhoneNumberTypeID ;

-- Challenge #2
select top 10 pa.AddressID, pa.City, psp.StateProvinceID, psp.Name from Person.Address pa inner join Person.StateProvince psp on psp.StateProvinceID = pa.StateProvinceID;