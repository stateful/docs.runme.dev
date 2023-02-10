### It's quite confusing to have cells and screenshots of cells interleaved

```sh { interactive=false }
export pngs=$(find . -name "*.png")
```

```sh
echo $pngs | xargs -n 1 -I{} convert {} \( +clone -colorspace gray \) -define compose:args=70% -compose blend -composite ../{}
```
