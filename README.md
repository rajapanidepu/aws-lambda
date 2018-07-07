# Tutorial to deploy lambda functions to aws

Create AWS role which has policy with full access to lambda, dynamo and api access.
Its suggested to have specific access to each of the services.

Configure aws to use the newly created role. 

Visit apex.run tp install apex. Apex helps to deploy lambda functions to AWS.

Initialize Apex project:
```console
$ apex init
```

Deploy the project
```console
$ apex deploy
```

