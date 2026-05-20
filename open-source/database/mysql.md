## 概念

## SQL语言的基本操作

### 库操作

#### 查看库

```
 show databases like 'test'; -- 指明就找test
 show databases like '%n';  -- 一个以n字符结束的数据库
 show databases like '%n%'; --  数据库名字中, 有一个n字符 

show create database test; -- 查看之前怎么创建的test数据库(sql语句是什么)  查看数据库的创建信息
```

通配符:

```
// show databases like '%数据库名%'; 
// %代表是一个通配符: 通配0-n个字符
```

#### 创建数据库

```
-- 创建一个叫test数据库, 并且要求编码格式是utf8,  还要求排序规则utf8_bin
create database test character set utf8 collate utf8_bin; 
```

#### 选择数据库

**`user database_name;`**

### 表操作

#### 常见数据类型

##### 整形

##### 浮点型

##### 字符串

##### 日期

| MySQL日期 | 字节 | 日期格式            | 表示范围                                  |
| --------- | ---- | ------------------- | ----------------------------------------- |
| YEAR      | 1    | YYYY                | 1901 ~ 2155                               |
| TIME      | 3    | HH:MM:SS            | -838:59:59 ~ 838:59:59                    |
| DATE      | 3    | YYYY-MM-DD          | 1000-01-01 ~ 9999-12-31                   |
| DATETIME  | 8    | YYYY-MM-DD HH:MM:SS | 1000-01-01 00:00:00 ~ 9999-12-31 23:59:59 |
| TIMESTAMP | 4    | YYYY-MM-DD HH:MM:SS | 1970-01-01 00:00:01 ~ 2038-01-19 03:14:07 |

> - year/YEAR范围: 1901~ 2155包含255个年份, 对应一个字节表示范围。
> - time/TIME范围: 11111111111111111111111(23位剩余一位符号位)--> 8388607(十进制)
> - timestamp/TIMESTAMP范围: (时间戳) (一般用于一些计时, 倒计时, 数据传输 ......) (秒数1)
>
>  1970年1月1日作为UNIX TIME的纪元时间(开始时间)。

#### 主键和自增

#### 查看表

```
SHOW TABLES;			 # 查看该数据库中所有表
SHOW CREATE TABLE <表名>;	# 查看表的创建语句
DESCRIBE <表名>;			# 查看表结构
DESC <表名>;				# 查看表结构
```

### 数据操作 ( DML )==重要==

#### 添加数据

**语法: **

- **`INSERT INTO table_name (col_name1, col_name2 ...) VALUES(value_1, value_2...) (value_1, value_2, ...);` 批量插入**
- **`INSERT INTO table_name SET col_1 = value_1, col_2 = value_2....;`**
- **`INSERT INTO table_name (col_name1, col_name2 ...) VALUES(value_1, value_2...) ;`单条记录插入**

**注: **

- VALUES 中的内容应该和插入字段一一对应，这种情况下可以省略表名之后的列名。
- 数据中字符串和日期应该包含在引号中

#### 修改数据

**`UPDATE table_name SET col_name1 = val_1, col_name2 = val_2 [where condition];`**

**注：**

- 如果没有 where 子句指明条件，那么修改就是对所有行的修改
- 修改一行数据时，有多列需要修改时，SET 子句需要用逗号隔开

#### 删除数据

**`DELETE FROM table_name [WHERE condition];`**

**注：**

- **若没有 where 条件，那么删除的所有数据**
- **工作中一般是逻辑删除，增加删除标记位**

#### 查询数据

- **`SELECT \* FROM table_name;`**
- **`SELECT col_name1, col_name2,.. FROM table_name [WHERE condition];`**

**注：**

- 查询的结果是一个临时表
- 一般配合 where 子句使用

### DQL 数据查询 - 配合 `select` 使用

#### `where`

#### `DISTINCT`

使用 `DISTINCT` 对数据表中一个或多个字段重复的数据过滤，重复的数据只返回一条数据给用户。

**注:**

- **DISTINCE 只能在SELECT中使用**
- **当对一个或多个字段去重时，DISTINCT 写在最前面**

#### `AS`

#### `limit`

**限定查询的==结果集==大小**

**注:**

- **`limit n, m` 从 n 的位置开始，限定 m 条记录**
- **`limit m offset n` 从 n 位置偏移 m 个条记录**

#### `ORDER BY`

**对查询数据==结果集==进行排序**

默认排序: **`ASC` ，升序排序**

**`DESC `降序排序**

#### `GROUP BY`

**对==数据==进行分组**

**HAVING 对 分组后的各组数据过滤, 一般分组 配合 聚合函数配合使用**

#### 聚合函数

> 聚合函数一般用来计算列相关的指定值. `通常`和==分组==一起使用
>
> | 函数  | 作用   | 函数 | 作用   |
> | ----- | ------ | ---- | ------ |
> | COUNT | 计数   | SUM  | 和     |
> | AVG   | 平均值 | MAX  | 最大值 |
> | MIN   | 最小值 |      |        |

**`COUNT`**: 计数

> ```
> SELECT <查询内容|列等> , COUNT <列|*> FROM  <表名字> GROUP BY HAVING COUNT <表达式|条件>
> 
> eg:
> select count(*) from students 
> select count(name) from students 
> select class, group_concat(name), count(*) from students group by class;
> select class, group_concat(name), count(*) from students group by class having count(*) > 2;
> ```
>
> **COUNT(\*): 表示表中总行数**
>
> **COUNT(列): 计算除了列值为NULL以外的总行数**

### SQL 执行顺序

```
(5) SELECT column_name, ... 
(1) FROM table_name, ... 
(2) [WHERE ...] 
(3) [GROUP BY ...] 
(4) [HAVING ...] 
(6) [ORDER BY ...];
(7)	[Limit ...]
```

**注： having和select的执行顺序收到优化器的影响，可能会改变执行顺序**

### 数据完整性

#### 实体完整性

==保证表中的每条数据都是唯一的实体==

保证数据的唯一: ==通过为表增加主键实现==

#### 域完整性

- **对于某些列，类型要合适，取值范围要合适**
- **存储数据时，存储的内容要符合列设置的类型**

#### 参照完整性

**关系型数据库中，一个表的数据可能依赖另一个表的数据存在，也就是说： 数据库中两张表的数据存在关联，那么我们就要确保这种 关联 / 参照 ，具有一致性。**

**实现方式: **

- **通过事务实现**
- **通过外键实现，强制绑定两个具有参照的表的字段**

**能否使用外键: **

能否使用外键，取决于具体情况，确定的是使用外键会导致一个表的操作访问另外一个表，也就是全表扫描。那么这个操作一定会导致效率降低。我们需要评估这个效率降低了多少，并且这种降低我们是否可以接受。若效率降低的微乎其微，我们是可以接受的，因为使用外键保证了数据强一致性，保证数据参照完整性。若我们不能接受这样的效率降低，那么我们可以使用别的手段来保证参照完整性。

## 多表问题

### 一对一

### 一对多

### 多对多

### 数据库设计范式

**和数据完整性不同: 数据库的设计范式更偏向于表设计的维度来看待数据的存储. 其存在的目的也是为了, 在维护或者操作数据库中数据: 1, 希望在数据库中数据存储更规整 2, 希望操作数据的时候效率更高**

#### 第一范式: 原子性

在设计表的时候, 应该每列保持原子性。 如果数据库中的所有字段都是不可分割的原子值。例如：地址

#### 第二范式: 唯一性

数据的唯一性。 要求表中数据有唯一标识，不存在部分依赖，也就是必须设置一个列为主键，不能使用联合主键

#### 第三范式: 不冗余

字段不要冗余。(消除表中非主键字段间的依赖: 即:要求每个非主键字段只依赖于主键，而不依赖于其他非主键字段)

### 多表查询

#### 联合查询

可以配合关键字 `where`,`order by`.... 一起使用。

##### 内连接

**`select <字段名> from table1 inner join table2 [on 子句]`**

**on 子句后为 表1 和 表2 的关联条件**

内连接原理: 对两张表划分 主表和 副表

使用内连接性能提升的幅度取决于主/副表的划分，连接条件

##### 外连接

**`select <字段名> from table1 LEFT OUTER JOIN table2 [on 子句]`**

**`select <字段名> from table1 RIGHT OUTER JOIN table2 [on 子句]`**

outer 可以省略

**外连接和内连接的区别:**

- **在外链接中可以指明主/副表**
- **外连接要求主表的数据无论与副表匹配与否，都会显示到结果集中**

#### 子查询

**在==删除/修改/查询== SQL 操作中，用到了另一个查询的结果**

**`SELECT <字段名> FROM <表|子查询> WHERE <IN| NOT IN | EXISTS | NOT EXISTS > <子查询>`**

子查询也叫嵌套查询，在WHERE子句或FROM子句中又嵌入SELECT查询语句。

## 数据库备份

### 命令行

命令:

**`mysqldump -u root -p 数据库名称>文件名.sql`**

恢复命令:

**`create database 数据库名称`**

**`source 文件名.sql`**

### 图形化

使用 navicat