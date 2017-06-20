# jhi-entity-diff-to-changelog #

POC implementation for jhipster/generator-jhipster#5954

## Usage ##

- clone a JHipster sample app
- add this module
- snapshot `.jhipster` directory
- add a string column to `BankAccount` entity
- choose to overwrite all files except `src/main/resources/config/liquibase/changelog/20150805124838_added_entity_BankAccount.xml`
- run `./node_modules/.bin/jhi-entity-diff-to-changelog .jhipster.prev .jhipster`
- inspect the generated `src/main/resources/config/liquibase/changelog/rendered_liquibase_changelog.xml` file

```console
$ git clone https://github.com/jhipster/jhipster-sample-app-ng2.git
Cloning into 'jhipster-sample-app-ng2'...
... waffles ...
$ cd jhipster-sample-app-ng2/
$ yarn add https://github.com/gimoh/jhi-entity-diff-to-changelog.git
yarn add v0.24.6
[1/4] Resolving packages...
... waffles ...
success Saved lockfile.
success Saved 4 new dependencies.
├─ deep-equal@1.0.1
├─ ejs@2.5.6
├─ fast-json-patch@2.0.2
└─ jhi-entity-diff-to-changelog@0.0.0
... more waffles ...
$ cp -a .jhipster .jhipster.prev
$ jhipster entity BankAccount --skip-install
Executing jhipster:entity BankAccount --skip-install

Found the .jhipster/BankAccount.json configuration file, entity can be automatically generated!


The entity BankAccount is being updated.

WARNING! entityTableName is missing in .jhipster/BankAccount.json, using entity name as fallback
? Do you want to update the entity? This will replace the existing files for this entity, all your custom code will be overwritten Yes, add more fields and relationships

================= BankAccount =================
Fields
name (String) required
balance (BigDecimal) required

Relationships
user (User) many-to-one
operation (Operation) one-to-many


Generating field #3

? Do you want to add a field to your entity? Yes
? What is the name of your field? description
? What is the type of your field? String
? Do you want to add validation rules to your field? No

================= BankAccount =================
Fields
name (String) required
balance (BigDecimal) required
description (String)

Relationships
user (User) many-to-one
operation (Operation) one-to-many


Generating field #4

? Do you want to add a field to your entity? No

================= BankAccount =================
Fields
name (String) required
balance (BigDecimal) required
description (String)

Relationships
user (User) many-to-one
operation (Operation) one-to-many


Generating relationships to other entities

? Do you want to add a relationship to another entity? No

================= BankAccount =================
Fields
name (String) required
balance (BigDecimal) required
description (String)

Relationships
user (User) many-to-one
operation (Operation) one-to-many



WARNING! service is missing in .jhipster/BankAccount.json, using no as fallback
conflict .jhipster/BankAccount.json
? Overwrite .jhipster/BankAccount.json? overwrite
    force .jhipster/BankAccount.json
    conflict src/main/resources/config/liquibase/changelog/20150805124838_added_entity_BankAccount.xml
   ? Overwrite src/main/resources/config/liquibase/changelog/20150805124838_added_entity_BankAccount.xml? do not overwrite
        skip src/main/resources/config/liquibase/changelog/20150805124838_added_entity_BankAccount.xml
   identical src/main/resources/config/liquibase/changelog/20150805124838_added_entity_constraints_BankAccount.xml
   conflict src/main/java/io/github/jhipster/sample/domain/BankAccount.java
  ? Overwrite src/main/java/io/github/jhipster/sample/domain/BankAccount.java? overwrite
      force src/main/java/io/github/jhipster/sample/domain/BankAccount.java
  identical src/main/java/io/github/jhipster/sample/repository/BankAccountRepository.java
  identical src/main/java/io/github/jhipster/sample/web/rest/BankAccountResource.java
   conflict src/test/java/io/github/jhipster/sample/web/rest/BankAccountResourceIntTest.java
  ? Overwrite src/test/java/io/github/jhipster/sample/web/rest/BankAccountResourceIntTest.java? overwrite
      force src/test/java/io/github/jhipster/sample/web/rest/BankAccountResourceIntTest.java
   conflict src/test/gatling/simulations/BankAccountGatlingTest.scala
  ? Overwrite src/test/gatling/simulations/BankAccountGatlingTest.scala? overwrite
      force src/test/gatling/simulations/BankAccountGatlingTest.scala
  identical src/main/resources/config/liquibase/master.xml
  identical src/main/java/io/github/jhipster/sample/config/CacheConfiguration.java
   conflict src/main/webapp/app/entities/bank-account/bank-account.component.html
  ? Overwrite src/main/webapp/app/entities/bank-account/bank-account.component.html? overwrite
      force src/main/webapp/app/entities/bank-account/bank-account.component.html
   conflict src/main/webapp/app/entities/bank-account/bank-account-detail.component.html
  ? Overwrite src/main/webapp/app/entities/bank-account/bank-account-detail.component.html? overwrite
      force src/main/webapp/app/entities/bank-account/bank-account-detail.component.html
   conflict src/main/webapp/app/entities/bank-account/bank-account-dialog.component.html
  ? Overwrite src/main/webapp/app/entities/bank-account/bank-account-dialog.component.html? overwrite
      force src/main/webapp/app/entities/bank-account/bank-account-dialog.component.html
  identical src/main/webapp/app/entities/bank-account/bank-account-delete-dialog.component.html
  identical src/main/webapp/app/entities/bank-account/index.ts
  identical src/main/webapp/app/entities/bank-account/bank-account.module.ts
  identical src/main/webapp/app/entities/bank-account/bank-account.route.ts
   conflict src/main/webapp/app/entities/bank-account/bank-account.model.ts
  ? Overwrite src/main/webapp/app/entities/bank-account/bank-account.model.ts? overwrite
      force src/main/webapp/app/entities/bank-account/bank-account.model.ts
  identical src/main/webapp/app/entities/bank-account/bank-account.component.ts
  identical src/main/webapp/app/entities/bank-account/bank-account-dialog.component.ts
  identical src/main/webapp/app/entities/bank-account/bank-account-delete-dialog.component.ts
  identical src/main/webapp/app/entities/bank-account/bank-account-detail.component.ts
  identical src/main/webapp/app/entities/bank-account/bank-account.service.ts
  identical src/main/webapp/app/entities/bank-account/bank-account-popup.service.ts
  identical src/test/javascript/spec/app/entities/bank-account/bank-account-detail.component.spec.ts
  identical src/test/javascript/e2e/entities/bank-account.spec.ts
  identical src/main/webapp/app/entities/entity.module.ts
  identical src/main/webapp/app/layouts/navbar/navbar.component.html
   conflict src/main/webapp/i18n/en/bankAccount.json
  ? Overwrite src/main/webapp/i18n/en/bankAccount.json? overwrite
      force src/main/webapp/i18n/en/bankAccount.json
  identical src/main/webapp/i18n/en/global.json
   conflict src/main/webapp/i18n/fr/bankAccount.json
  ? Overwrite src/main/webapp/i18n/fr/bankAccount.json? overwrite
      force src/main/webapp/i18n/fr/bankAccount.json
  identical src/main/webapp/i18n/fr/global.json
  Execution complete
$ ./node_modules/.bin/jhi-entity-diff-to-changelog .jhipster.prev .jhipster
compare .jhipster.prev and .jhipster
diff: [
  {
    "op": "add",
    "path": "/BankAccount/fields/2",
    "value": {
      "fieldName": "description",
      "fieldType": "String"
    }
  },
  {
    "op": "add",
    "path": "/BankAccount/service",
    "value": "no"
  },
  {
    "op": "add",
    "path": "/BankAccount/entityTableName",
    "value": "bank_account"
  }
]
path: ,BankAccount,fields,2 -> entityName: BankAccount, prop: fields
$ git status
On branch master
Your branch is up-to-date with 'origin/master'.
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   .jhipster/BankAccount.json
        modified:   package.json
        modified:   src/main/java/io/github/jhipster/sample/domain/BankAccount.java
        modified:   src/main/webapp/app/entities/bank-account/bank-account-detail.component.html
        modified:   src/main/webapp/app/entities/bank-account/bank-account-dialog.component.html
        modified:   src/main/webapp/app/entities/bank-account/bank-account.component.html
        modified:   src/main/webapp/app/entities/bank-account/bank-account.model.ts
        modified:   src/main/webapp/i18n/en/bankAccount.json
        modified:   src/main/webapp/i18n/fr/bankAccount.json
        modified:   src/test/gatling/simulations/BankAccountGatlingTest.scala
        modified:   src/test/java/io/github/jhipster/sample/web/rest/BankAccountResourceIntTest.java
        modified:   yarn.lock

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        .jhipster.prev/
        src/main/resources/config/liquibase/changelog/rendered_liquibase_changelog.xml

no changes added to commit (use "git add" and/or "git commit -a")
$ cat src/main/resources/config/liquibase/changelog/rendered_liquibase_changelog.xml
<?xml version="1.1" encoding="UTF-8" standalone="no"?>
<databaseChangeLog
    xmlns="http://www.liquibase.org/xml/ns/dbchangelog"
    xmlns:ext="http://www.liquibase.org/xml/ns/dbchangelog-ext"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-3.5.xsd
                        http://www.liquibase.org/xml/ns/dbchangelog-ext http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-ext.xsd">
    <changeSet author="gimoh (generated)" id="1497953691541-1">

        <addColumn tableName="bank_account">
            <column name="description" type="varchar(255)"/>
        </addColumn>

    </changeSet>
</databaseChangeLog>
```
