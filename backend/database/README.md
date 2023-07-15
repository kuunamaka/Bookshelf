# Accessing PostgreSQL on docker
```sh
$ docker container exec -it bookshelf_container bash
```

# Seeing all database
```sql
$ psql -U admin -l
```

# Accessing database
```sql
bash# psql -U admin -d test_db
```