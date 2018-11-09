### Databases

We want to be using DB [connection pools][conns] via [`sequelize`][seq] to connect to our Postgres database.
This is so we don't have to always pay the db re-connect fee when the lambda cache is warm. You may want to make
yourself comfortable with [our AWS setup][aws] 🔒.

To create a new db:

```sh
aws rds create-db-instance \
    --db-name mondrianstaging \
    --db-instance-identifier mondrian-staging \
    --allocated-storage 20 \
    --db-instance-class db.t2.micro \
    --engine postgres \
    --master-username <username> \
    --master-user-password <password>
    --db-subnet-group-name  default-<see AWS VPN ID>
```

This db will live inside the Artsy [AWS VPNs][vpns], which means it can't access outer resources in the internet
without using a NAT. Once you've created it, you should be able to see it in our [RDS instances][rds].

Now that you have a DB set up, you'll want to look at adding tables. To handle this we use [`sequelize-cli`][scli].
The sequelize-cli is built to be familiar to rails developers. For setting up development, you can run:

```sh
# Create local db
yarn db:create
# Migrate the dB
yarn db:migrate 
```

If you need to make a migration on staging/prod - you need to be running inside the Artsy VPN.

### DB Models

We define models using [sequelize][seq]

[conns]: http://www.rojotek.com/blog/2017/08/07/accessing-rds-from-aws-lambda/
[npgp]: https://github.com/brianc/node-pg-pool
[aws]: https://github.com/artsy/potential/blob/369d5652dfd3b5df1d1528136af61236bcff17ed/platform/AWS.md#overview-of-aws-setup
[vpns]: https://console.aws.amazon.com/vpc/home?region=us-east-1#vpcs:sort=VpcId
[rds]: https://console.aws.amazon.com/rds/home?region=us-east-1#dbinstances:
[npgm]: https://github.com/salsita/node-pg-migrate#node-pg-migrate
[seq]: https://www.github.com/sequelize/sequelize
[scli]: https://github.com/sequelize/cli#usage
