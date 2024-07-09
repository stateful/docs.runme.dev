---
runme:
  id: 01J2B937J9DH0TPAHSSRB76X1G
  version: v3
---

# Guide to Using Google BigQuery with Runme

This guide will help you set up and use Google BigQuery with the Runme CLI. Follow these steps to authenticate, configure your project, and run queries.

### Prerequisites

To follow up on this guide, ensure you have the following:

**Runme Extension**

Install the Runme extension in your VS Code editor and make it your default Markdown viewer. Runme also provides other client interfaces where you can run your Markdown file. See the Runme installation guide.

**Install Google Cloud SDK**

To interact with Google Cloud resources, you need the Google Cloud SDK. This SDK provides the necessary tools and libraries. Run the command below to install

```sh {"id":"01J2B9V1NA28V0KFGPAYZP10V0"}
brew install --cask google-cloud-sdk
```

For Other platforms Consult [GCP's official docs](https://cloud.google.com/sdk/docs/install)

## Authenticate with Google Cloud

First, you need to authenticate your Google Cloud account, Run the command

```sh {"id":"01J2B937J9DH0TPAHSRX57KFSZ"}
gcloud auth login
```

This command will open a browser window where you can log in with your Google account.

**List Available Components**

Check which components are available in your Google Cloud SDK, Run the command below

```sh {"id":"01J2B937J9DH0TPAHSS05NY5CD"}
gcloud components list
```

**Update Google Cloud Components**

Run the command below to ensure your Google Cloud components are up to date:

```sh {"id":"01J2B937J9DH0TPAHSS26D4ST8"}
gcloud components update
```

**Install the BigQuery Component**

If you haven't already installed the BigQuery component, do so now:

```sh {"id":"01J2B937J9DH0TPAHSS5X947XP"}
gcloud components install bq
```

### Set Your Project

First, set your Google Cloud project ID using an [environment vairable](../getting-started/features#environment-variable-prompts). This allows you to specify the project you want to work with in your notebook. To set your project ID, run the command below:

```sh {"id":"01J2B992A1G2K3PT40FDHV4QZ9"}
export PROJECT_ID="runme-ci"
echo "PROJECT_ID set to $PROJECT_ID"
```

Configure the `gcloud` CLI to use your specific Google Cloud project:

```sh {"id":"01J2B937J9DH0TPAHSS7M7C8P5"}
gcloud config set project $PROJECT_ID
```

Replace `runme-ci` with the ID of your project.

## BigQuery Operations

### Querying BigQuery

You can now run a query against your BigQuery dataset. For example, to select data from a specific table, use the following command:

```sh {"id":"01J2BC81H7AVSXV28Z52C1QYM9"}
bq query --use_legacy_sql=false 'SELECT * FROM `[PROJECT_ID].[DATASET].[TABLE]` LIMIT 10'
```

```sh {"id":"01J2B937J9DH0TPAHSS8TSGV9W"}
bq query --use_legacy_sql=false 'SELECT * FROM `runme-ci.runme_bigquery.runme-query` LIMIT 10'
```

![query](../../static/img/guide-page/runme-bq-query.png)

This command will return the first 10 rows from the `runme-query` table in the `runme_bigquery` dataset.

### Listing Datasets and Tables

To list all datasets in your project:

```sh {"id":"01J2B937J9DH0TPAHSSCE4YYGS"}
bq ls
```

![List tables](../../static/img/guide-page/runme-bq-ls.png)

To list all tables in a specific dataset (e.g., `runme_bigquery`):

```sh {"id":"01J2B937J9DH0TPAHSSDVX8AD6"}
bq ls runme_bigquery
```

![list data set](../../static/img/guide-page/runme-list-bigquery.png)

To show details of a specific table (e.g., `runme-query`):

```sh {"id":"01J2B937J9DH0TPAHSSGGCRD0W"}
bq show runme_bigquery.runme-query
```

![show table](../../static/img/guide-page/runme-show-bigquery.png)

**Load Data into a Table**

```sh {"id":"01J2BCAB5QYAHCBFDK5JRSCR8G"}
bq load --source_format=CSV [DATASET].[TABLE] [PATH_TO_CSV_FILE] [SCHEMA]
```

```sh {"id":"01J2BH3RJYZVD6XRAHQ198FVD5"}
bq load --source_format=CSV --skip_leading_rows=1 runme_bq.runme_table ./101.csv ./schema.json
```

![bq load](../../static/img/guide-page/runme-bq-load.png)

**Export Data from a Table**

```sh {"id":"01J2BCARNPK25F2YAPAZ22GHK8"}
bq extract --destination_format=CSV [DATASET].[TABLE] gs://[BUCKET]/[FILE_NAME].csv
```

### Creating a Dataset

If you need to create a new dataset, use:

```sh {"id":"01J2B937J9DH0TPAHSSH4MHA49"}
bq mk runme_bq
```

![create table](../../static/img/guide-page/runme-create-table.png)

**Delete a Dataset**

### Creating a Table

To create a new table within your dataset:

```sh {"id":"01J2B937J9DH0TPAHSSKJSA3RH"}
bq mk --table runme_bq.new_table
```

```sh {"id":"01J2BCDZYCG9HJ1CY1J4W1RXAG"}
bq mk --table [DATASET].[TABLE] schema.json

```

```sh {"id":"01J2BEKT3ZJ208SC046E6F8THW"}
bq mk --table runme_bq.runme_table schema.json
```

![use schema](../../static/img/guide-page/runme_bigquery-schema.png)

**Delete a Table**

```sh {"id":"01J2BCCW3DTQ090CY0PGSGT5FZ"}
bq rm -f [DATASET].[TABLE]
```

```sh {"id":"01J2BEWCS160J7V3HCETZH6MNZ"}
bq rm -f runme_bq.runme_table
```

![remove table](../../static/img/guide-page/runme-bigquery-remove-table.png)

**Create a Table with Expiration Time**

```sh {"id":"01J2BCGHCEX7XV8EZAG9DC02D3"}
bq mk --table --time_partitioning_expiration 2592000000 my_dataset.temporary_data schema.json
```

### Getting Help

If you need additional help with BigQuery commands, you can view the help documentation:

```sh {"id":"01J2B937J9DH0TPAHSSMS5B4AF"}
bq --help
```

### Conclusion

By following these steps, you should be able to set up and use Google BigQuery with the Runme CLI effectively. For more detailed information, refer to the official Google Cloud documentation.
