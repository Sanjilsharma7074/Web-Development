# Intro of MongoDB

1. MongoDB supports 

  - No-SQL Document Based Database
  - Strong Support for Aggregation pipes
  - Works on BSON format
  - Best for Node Applications

2. Architecture of MongoDB

  - On broader level we have collections.

  - Just like we have tables in SQL DB, here we have collections in place of it.

  - We hade user tables, post tables <=> here we have User Collections, Post Collections.

  - Within these collections we have documents,the original entry is called document -> doc1 , doc2 .... doc1000 , we cane have huge number of documents inside a collection.

3. Some common cmds to be used

  - show dbs
  - use <db_name>
  - show collections
  - db.<collection_name>.find({}) - will give us an array of documents stored inside this collection.
  - db.<collection_name>.insert() - To create new entries

4. We have a Schema in mongoose in which we define the structure.

  - With the help of this Schema we make a Model and using this model we perform CRUD operations.

  ### {Schema - Define the structure
  ### Schema - Model
  ### Using model we do CRUD operations.}

 
