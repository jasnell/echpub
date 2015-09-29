##### Signed by https://keybase.io/jasnell
```
-----BEGIN PGP SIGNATURE-----
Comment: GPGTools - https://gpgtools.org

iQEcBAABCgAGBQJWCs2MAAoJEHNBsVwHCHeswmQIAKWN9/SIpG5BOewge5z4MTC4
uf7HPiX4/SFmwvz69dFa8v32BU2CMGZhWMULl0kB7HwkzOp0yk0gjBCS8BSFFzCI
1g6o2/D89KtLAlckN+gt8liDGuPx1a7IwLkzEnOTBU5UH7dL2UnKM7G4sZQtmWgf
tFdqRaEGKY4nZLoBNgV6CM24bgJoZGuMyrI7zllPTO/blX3HS7UVbe/EKJfW85Id
Si9dGjAtQonFrevLl/Hxom+03WkayyPV+RSPoq7UR7BG9V+RIONQS47RsJdVLzFs
sgF7m4+qPW4U7ckC+/LHTV/YT2KRCfeJqXIsuSXCafGIx3uT9qsEDP1NQ9MVVEQ=
=wfXS
-----END PGP SIGNATURE-----

```

<!-- END SIGNATURES -->

### Begin signed statement 

#### Expect

```
size  exec  file            contents                                                        
            ./                                                                              
13            .gitignore    16d30e4462189fb14dd611bdb708c510630c576a1f35b9383e89a4352da36c97
37            .jshintrc     c9ffe7651d3a83c8843cb3f8ab8181b17a9d2326fb89f8450904ab8389908fff
1464          config.js     08f60aa5faa9712b8842ff45eff233bf04aeaf006a4ee21bfd1b1e5b63023174
3464  x       index.js      61fdbab70d3eb135951ba5133bfd25f8674bef5fad8d609c78f2c943279e2cef
448           package.json  023041ed87b9a80f736dfa467ebfc4657c0ae7a69dafba5defc576cb0b862602
954           README.md     8be04fde4b0a6aa5d8be50586cc90fc4a31d803dd21224fa72056b37418cbc01
588           results.js    ae3e8676ce502aa14cfe472fd401e5cf1e5583c6895262706b75ba2cff10d865
```

#### Ignore

```
/SIGNED.md
```

#### Presets

```
git      # ignore .git and anything as described by .gitignore files
dropbox  # ignore .dropbox-cache and other Dropbox-related files    
kb       # ignore anything as described by .kbignore files          
```

<!-- summarize version = 0.0.9 -->

### End signed statement

<hr>

#### Notes

With keybase you can sign any directory's contents, whether it's a git repo,
source code distribution, or a personal documents folder. It aims to replace the drudgery of:

  1. comparing a zipped file to a detached statement
  2. downloading a public key
  3. confirming it is in fact the author's by reviewing public statements they've made, using it

All in one simple command:

```bash
keybase dir verify
```

There are lots of options, including assertions for automating your checks.

For more info, check out https://keybase.io/docs/command_line/code_signing