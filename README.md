# Echidna Publishing Tool

A simple command line client for Echidna publishing.
No frills. 

```
  Usage: echpub [options] [command]


  Commands:

    add <name> <documentUrl> <token>  Add a document
    remove <name>                     Remove a document
    list                              List documents
    info <name>                       Show info
    publish <name> <decisionUrl>      Publish the document
    status <name>                     Show the status of the most recent publish attempt

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
```

## Add a document

```
echpub add foo http://example.org/foo/manifest token-from-w3c
```

## Request publication

```
echpub publish foo
```

## View publication status

```
echpub status foo
```

## List configured docs

```
echpub list
```

## Get info for specific doc

```
echpub info foo
```

## Remove a doc

```
echpub remove foo
```
