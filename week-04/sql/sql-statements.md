# SQL Statements

## IDs
- **UUID** - Universally Unique IDentifier.  The unique value that identifies an ID
    - uuid generator website: https://www.uuidgenerator.net/
    - We use version 4 UUIDs, which are randomly created
        - chance of collision between two UUIDs is vanishingly small: 1 in 2^122, or approximately 1 in 5.3x10^35 or 1 in 5,300,000,000,000,000,000,000,000,000,000,000,000
- SQL reserve word syntax can be capitalized or lowercase.  You can use either, but *you have to be consistent*.

## INSERT
- adds (i.e. inserts) data into the database
- Each item in the database is a single instance of an entity.
    - In database nomenclature, this is known as a **record** or **row**
    - In this context, an entity is an abstract category, like "Profile".  An instance is a specific item, like "Paul"
- `INSERT INTO table (column1, column2, column3, column4) VALUES ('value1', 'value2', 'value3', 'value4');`
- `INSERT INTO author(authorid, authoractivationtoken, authoravatarurl, authoremail, authorhash, authorusername) VALUES ('80242ec6-f1ef-402b-a41c-97c6aaa3f50f', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'someURL', 'email@email.com', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'Some Name');`

### Inserting into tables with Foreign keys.
- `INSERT INTO article (articleid, articleauthorid, articlecontent, articledate, articleimage) VALUES (gen_random_uuid(), '80242ec6-f1ef-402b-a41c-97c6aaa3f50f', 'This is an article', now(), 'imageURL.com');`
    - FOREIGN KEYS MUST EXIST IN THE PARENT TABLE OR MYSQL WILL THROW A FOREIGN KEY CONSTRAINT VIOLATION.
    - dates must be in the format year-month-day hour:minute:second, or use the now() function in SQL.
    - NOW() is a built in SQL function that returns the current server time.

## UPDATE
- Updates records/rows in a database.
- `UPDATE table SET colunm1 = newValue1, column2 = newValue2, WHERE primaryKey = uuid;`
- `UPDATE author SET authorid = '80242ec6-f1ef-402b-a41c-97c6aaa3f50f', authoractivationtoken = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', authoravatarurl = 'someURL', authoremail = 'email@email.com', authorhash = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', authorusername = 'My New Name' WHERE authorid = '80242ec6-f1ef-402b-a41c-97c6aaa3f50f';`
- `WHERE` specifies what record you are trying to update/delete/select.
    - For the most part you will be using primary keys to specify what you are updating/deleting
    - Generally a bad idea to update foreign keys.
    - With set you can specify what columns you are trying to update.

## DELETE
- deletes a record in the database.
- `DELETE FROM table WHERE primayKey = uuid;`
- `DELETE FROM article WHERE articleid = '51bf2811-34e2-4e15-8c92-092d9e33a29f';`
- make sure you have a where with delete or else you will delete every record in the table.

## SELECT
- SELECT grabs data from the database.
- SELECT accounts for ≈ 70% of database operations
- `SELECT  column1, column2, column3, column4, from table WHERE condition = true;`
- `SELECT articleid, articleauthorid, articlecontent, articledate, articleimage FROM article WHERE articleId = '8dbb6feb-a7e8-400a-b475-86e4b9d4eb66';`
- `SELECT articleid, articleauthorid, articlecontent, articledate, articleimage FROM article WHERE articlecontent LIKE '%another%';`
    - like allows for partial matches https://www.tutorialspoint.com/mysql/mysql-like-clause.htm
    - can use an equality after the where statement.

## JOINS
### Simple joins
- `SELECT tableA.column1, tableA.column2, tableA.column3, tableB.column3 FROM tableA INNER JOIN tableB on tableA.primaryKeyA = tableB.foreignKeyA WHERE tableA.column = true`
- `SELECT article.articleid, article.articleauthorid, article.articlecontent, article.articledate, article.articleimage, author.authorusername FROM article JOIN author ON author.authorid = article.articleauthorid WHERE articlecontent LIKE '%another%';`
### Complex joins
- `SELECT tweet.tweetId, tweet.tweetProfileId, tweet.tweetContent, tweet.tweetDate, profile.profileAtHandle FROM 'like' INNER JOIN tweet ON tweet.tweetId = like.likeTweetId INNER JOIN profile ON profile.profileId = like.likeProfileId WHERE like.likeTweetId = uuid`