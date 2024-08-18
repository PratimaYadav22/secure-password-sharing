Example of how to generate migration and model files using sequelize
```shell
npx sequelize-cli model:generate --name UserPassword --attributes ownerUserId:integer,url:string,username:string,password:string,sharedByUserId:integer
```

```shell
npx sequelize-cli migration:create --name modify_users_passwords_add_weak_encryption_column
```

Run migration

```shell
npx sequelize-cli db:migrate
```

Undo migration
```shell
npx sequelize-cli db:migrate:undo
```

user_passwords
weak_encryption = 1 (it is encrypted with the hash of encryption_key)
weak_encryption = 0 (it is encrypted with the actual encryption key)